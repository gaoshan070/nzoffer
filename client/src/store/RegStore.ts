import { action, configure, observable, runInAction } from 'mobx';
import { is } from '../styles/rebase/utils/utils';
import { ILocation } from './ChatScreenStore/ChatScreenStore.type';
import {
  userService,
  nzStudyAreaDetailService,
  cnStudyAreaService,
  getProgrammePoolService,
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
} from './AdminStore.type';
import { LOADING_STATUS } from '../utils/constants';
import { IRegUser } from '../screens/StartRegisterScreen/subRoutes/components/utils';

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

  @observable degreeCategory = '大学';
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

  @observable haveGaoKaoScore = false;
  @observable gaoKaoScoreLevel = '';

  @observable overseaUniNameEN = '';
  @observable overseaStudyAreaNameEN = '';
  @observable overseaUniAverageScore = '';

  @observable isDegreeGetInChina = false;
  @observable hasWorkExperiences = false;

  @observable nzStudyAreaDetails: INZStudyAreaDetail[] = [];
  @observable nzStudyAreaDetailsLoadingStatus = LOADING_STATUS.INITIAL;

  @observable cnStudyAreas: ICNStudyArea[] = [];
  @observable cnStudyAreasLoadingStatus = LOADING_STATUS.INITIAL;

  @observable selected: IRegUser['selected'] = {
    highschool: {
      info: '',
      startDate: '',
    },
    programme: {
      info: '',
      startDate: '',
    },

    languageProgramme: {
      info: '',
      startDate: '',
    },
  };

  @observable programmesPool: {
    case: number;
    programmes: (IProgramme | IHighSchool)[];
  } = {
    case: 0,
    programmes: [],
  };
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
        setValue('cnHighSchoolName', 'cnHighSchoolName');

        setValue('haveGaoKaoScore', 'haveGaoKaoScore');
        setValue('gaoKaoScoreLevel', 'gaoKaoScoreLevel');

        setValue('overseaUniNameEN', 'overseaUniNameEN');
        setValue('overseaStudyAreaNameEN', 'overseaStudyAreaNameEN');
        setValue('overseaUniAverageScore', 'overseaUniAverageScore');

        setValue('isDegreeGetInChina', 'isDegreeGetInChina');
        setValue('hasWorkExperiences', 'hasWorkExperiences');
        setValue('selected', 'selected');
      },
    });
  }

  @action.bound
  async fetchUserIfNoData() {
    if (this.userId) return;
    await this.fetchUser();
  }

  @action.bound
  async fetchNZStudyAreaDetailsIfNot() {
    if (!this.nzStudyAreaDetails.length) {
      await generalRequest.bind(this)({
        asyncFunc: () => nzStudyAreaDetailService.find(),
        loadStatusPropertyName: 'nzStudyAreaDetailsLoadingStatus',
        dataPropertyName: 'nzStudyAreaDetails',
      });
    }
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
}
