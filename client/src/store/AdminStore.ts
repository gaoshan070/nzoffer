import { observable, action } from 'mobx';
import {
  INZStudyArea,
  INZStudyAreaDetail,
  ICNStudyArea,
  IUniversity,
  IProgramme,
  ILanguageProgramme,
  IHighSchool,
  IPartner,
} from './AdminStore.type';
import {
  nzStudyAreaService,
  nzStudyAreaDetailService,
  universityService,
  programmeService,
  highSchoolService,
} from '../utils/feathers';
import { generalRequest } from './utils';

export type KeyName = Exclude<keyof AdminStore, 'update' | 'fetchNZStudyAreas'>;

export class AdminStore {
  @observable nzStudyAreas: INZStudyArea[] = [];
  @observable nzStudyAreaDetails: INZStudyAreaDetail[] = [];
  @observable cnStudyAreas: ICNStudyArea[] = [];
  @observable universities: IUniversity[] = [];
  @observable programmes: IProgramme[] = [];
  @observable languageProgrammes: ILanguageProgramme[] = [];
  @observable highschools: IHighSchool[] = [];
  @observable partners: IPartner[] = [];

  @action.bound
  async fetchNZStudyAreas() {
    await generalRequest.bind(this)({
      asyncFunc: () => nzStudyAreaService.find(),
      dataPropertyName: 'nzStudyAreas',
    });
  }

  @action.bound
  async fetchNZStudyAreaDetails() {
    await generalRequest.bind(this)({
      asyncFunc: () => nzStudyAreaDetailService.find(),
      dataPropertyName: 'nzStudyAreaDetails',
    });
  }

  @action.bound
  async fetchUniversities() {
    await generalRequest.bind(this)({
      asyncFunc: () => universityService.find(),
      dataPropertyName: 'universities',
    });
  }

  @action.bound
  async fetchProgrammes() {
    await generalRequest.bind(this)({
      asyncFunc: () => programmeService.find(),
      dataPropertyName: 'programmes',
    });
  }

  @action.bound
  update(key: KeyName, value: any) {
    this[key] = value;
  }
}
