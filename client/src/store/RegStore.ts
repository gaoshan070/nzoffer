import {
  action,
  configure,
  observable,
  runInAction,
  extendObservable,
} from 'mobx';
import { is } from '../styles/rebase/utils/utils';
import { ILocation } from './ChatScreenStore/ChatScreenStore.type';
import {
  userService,
  nzStudyAreaDetailService,
  cnStudyAreaService,
  getProgrammePoolService,
  getRelatedNzStudyAreaDetailsService,
  getLanguageProgrammePoolService,
} from '../utils/feathers';
import { generalRequest } from './utils';
import { getUserId } from '../utils/token';
import { PlainObject } from '../styles';
import {
  INZStudyArea,
  INZStudyAreaDetail,
  ICNStudyArea,
  IProgramme,
  IHighSchool,
  ILanguageProgramme,
} from './AdminStore.type';
import { LOADING_STATUS } from '../utils/constants';
import { IRegUser } from '../screens/StartRegisterScreen/subRoutes/components/utils';
import { isIELTS, isInstituteCourse } from './IELTS.helper';

export type RegStoreUpdateKeys = Exclude<keyof RegStore, 'update' | 'city'>;

export class RegStore {
  userId = '';

  @observable province: ILocation = {
    name: '',
    id: '',
  };

  @observable firstName = '';
  @observable lastName = '';
  @observable birthday = '';
  @observable gender = '';

  @observable streetNum = '';
  @observable streetName = '';
  @observable city = {
    name: '',
    id: '',
    provinceId: '',
  };
  @observable email = '';

  @observable degreeCategory = '';
  @observable chinaDegree = '';
  @observable isCN211Uni = false;
  @observable cn211UniName = '';
  @observable cnNormalUniName = '';
  @observable cnUniAverageScore = '';

  @observable engTestName = '';
  @observable engTestScore = '';

  @observable nzStudyArea = '';
  @observable nzStudyAreaId = '';
  @observable nzStudyAreaDetail = '';
  @observable nzStudyAreaDetailId = '';
  @observable cnStudyArea = '';
  @observable cnStudyAreaId = '';

  @observable cnHighSchoolName = '';

  @observable gaoKaoScoreLevel = '';

  @observable overseaUniNameEN = '';
  @observable overseaStudyAreaNameEN = '';
  @observable overseaUniAverageScore = '';

  @observable isDegreeGetInChina = false;
  @observable hasWorkExperiences = false;

  @observable nzStudyAreas: INZStudyArea[] = [];
  @observable nzStudyAreaDetails: INZStudyAreaDetail[] = [];
  @observable nzStudyAreaDetailsLoadingStatus = LOADING_STATUS.INITIAL;
  @observable cnStudyAreas: ICNStudyArea[] = [];
  @observable cnStudyAreasLoadingStatus = LOADING_STATUS.INITIAL;
  @observable userLoadingStatus = LOADING_STATUS.INITIAL;

  @observable selected: IRegUser['selected'] = {
    highschool: {
      // @ts-ignore
      info: {},
      startDate: '',
    },
    programme: {
      // @ts-ignore
      info: {},
      startDate: '',
    },
    languageProgramme: {
      // @ts-ignore
      info: {},
      diyEngTest: false,
      startDate: '',
    },
  };

  @observable whenComeNZ: {
    year: number;
    month: number;
  } = {
    year: 2019,
    month: 10,
  };

  @observable programmesPool: {
    case: number;
    programmes: (IProgramme | IHighSchool)[];
    isInstituteCourse?: boolean;
  } = {
    case: 0,
    programmes: [],
    isInstituteCourse: false,
  };

  // @ts-ignore
  @observable languageProgrammePool: {
    case: number;
    languageProgramme: ILanguageProgramme;
  } = {
    case: 0,
    // @ts-ignore
    languageProgramme: {},
  };
  @observable languageProgrammePoolLoadingStatus = LOADING_STATUS.INITIAL;

  @observable programmesPoolLoadingStatus = LOADING_STATUS.INITIAL;

  @action.bound
  update(key: RegStoreUpdateKeys, value: unknown) {
    if (is.function(value)) {
      this[key] = value(this[key]);
    } else {
      // @ts-ignore
      this[key] = value;
    }
  }

  @action.bound
  async fetchUser() {
    let userId = this.userId;
    if (!userId) {
      userId = await getUserId();
      this.userId = userId;
    }
    await generalRequest.bind(this)({
      asyncFunc: () => userService.get(userId),
      loadStatusPropertyName: 'userLoadingStatus',
      afterLoaded: data => {
        const res = data as PlainObject;

        const setValue = (keyNameInRes: string, keyNameInStore: string) => {
          if (res.hasOwnProperty(keyNameInRes)) {
            runInAction(() => {
              // @ts-ignore
              this[keyNameInStore] = res[keyNameInRes];
            });
          }
        };

        setValue('province', 'province');
        setValue('firstName', 'firstName');
        setValue('lastName', 'lastName');
        setValue('birthday', 'birthday');
        setValue('gender', 'gender');

        setValue('streetNum', 'streetNum');
        setValue('streetName', 'streetName');
        setValue('city', 'city');
        setValue('email', 'email');

        setValue('chinaDegree', 'chinaDegree');
        setValue('isCN211Uni', 'isCN211Uni');
        setValue('cn211UniName', 'cn211UniName');
        setValue('cnNormalUniName', 'cnNormalUniName');
        setValue('cnUniAverageScore', 'cnUniAverageScore');

        setValue('engTestName', 'engTestName');
        setValue('engTestScore', 'engTestScore');

        if (res.hasOwnProperty('nzStudyArea')) {
          runInAction(() => {
            this.nzStudyArea = (res.nzStudyArea as INZStudyArea).nameCN;
            this.nzStudyAreaId = (res.nzStudyArea as INZStudyArea)._id;
          });
        }
        if (res.hasOwnProperty('nzStudyAreaDetail')) {
          runInAction(() => {
            this.nzStudyAreaDetail = (res.nzStudyAreaDetail as INZStudyAreaDetail).nameCN;
            this.nzStudyAreaDetailId = (res.nzStudyAreaDetail as INZStudyAreaDetail)._id;
          });
        }
        if (res.hasOwnProperty('cnStudyArea')) {
          runInAction(() => {
            this.cnStudyArea = (res.cnStudyArea as ICNStudyArea).nameCN;
            this.cnStudyAreaId = (res.cnStudyArea as ICNStudyArea)._id;
          });
        }

        setValue('whenComeNZ', 'whenComeNZ');

        setValue('cnHighSchoolName', 'cnHighSchoolName');

        setValue('gaoKaoScoreLevel', 'gaoKaoScoreLevel');

        setValue('overseaUniNameEN', 'overseaUniNameEN');
        setValue('overseaStudyAreaNameEN', 'overseaStudyAreaNameEN');
        setValue('overseaUniAverageScore', 'overseaUniAverageScore');

        setValue('isDegreeGetInChina', 'isDegreeGetInChina');
        setValue('hasWorkExperiences', 'hasWorkExperiences');

        if (res.selected) {
          runInAction(() => {
            const responseSelected = res.selected as IRegUser['selected'];

            // @ts-ignore
            // extendObservable(this.selected, res.selected);

            if (responseSelected.highschool) {
              this.selected.highschool.info = responseSelected.highschool.info;
              this.selected.highschool.startDate =
                responseSelected.highschool.startDate;
            }
            if (responseSelected.programme) {
              this.selected.programme.info = responseSelected.programme.info;
              this.selected.programme.startDate =
                responseSelected.programme.startDate;
            }
            if (responseSelected.languageProgramme) {
              this.selected.languageProgramme.info =
                responseSelected.languageProgramme.info;
              this.selected.languageProgramme.diyEngTest =
                responseSelected.languageProgramme.diyEngTest;
              this.selected.languageProgramme.startDate =
                responseSelected.languageProgramme.startDate;
            }
          });
        }

        // setValue('selected', 'selected');
      },
    });
  }

  @action.bound
  async fetchUserIfNoData() {
    if (this.userId) return;
    await this.fetchUser();
  }

  @action.bound
  async fetchCNStudyAreaIfNot() {
    if (!this.cnStudyAreas.length) {
      await generalRequest.bind(this)({
        asyncFunc: () => cnStudyAreaService.find(),
        loadStatusPropertyName: 'cnStudyAreasLoadingStatus',
        dataPropertyName: 'cnStudyAreas',
      });
    }
  }

  @action.bound
  async fetchProgrammesSelection() {
    await generalRequest.bind(this)({
      asyncFunc: () => getProgrammePoolService.find(),
      loadStatusPropertyName: 'programmesPoolLoadingStatus',
      dataPropertyName: 'programmesPool',
    });
  }

  @action.bound
  async fetchLanguageProgrammesSelection() {
    await generalRequest.bind(this)({
      asyncFunc: () => getLanguageProgrammePoolService.find(),
      loadStatusPropertyName: 'languageProgrammePoolLoadingStatus',
      dataPropertyName: 'languageProgrammePool',
    });
  }

  isInstituteCourse = (engTestScore?: string) =>
    this.chinaDegree === '高三毕业' &&
    ['无成绩', '一本线以下'].includes(this.gaoKaoScoreLevel) &&
    (isIELTS.s45(this.engTestName, this.engTestScore) ||
      isIELTS.s50(this.engTestName, engTestScore || this.engTestScore));

  @action.bound
  async fetchRelatedNZStudyAreaDetails(callback?: (data: unknown) => void) {
    const isInstituteCourseValue = this.isInstituteCourse();

    if (is.loading(this.nzStudyAreaDetailsLoadingStatus)) {
      return;
    }

    await generalRequest.bind(this)({
      asyncFunc: () =>
        getRelatedNzStudyAreaDetailsService.find({
          query: {
            chinaDegree: this.chinaDegree,
            isInstituteCourse: isInstituteCourseValue,
          },
        }),
      loadStatusPropertyName: 'nzStudyAreaDetailsLoadingStatus',
      dataPropertyName: 'nzStudyAreaDetails',
      afterLoaded: data => {
        // @ts-ignore
        this.nzStudyAreas = data.nzStudyAreas;
        // @ts-ignore
        this.nzStudyAreaDetails = data.nzStudyAreaDetails;
        if (is.function(callback)) {
          callback(data);
        }
      },
    });
  }
}
