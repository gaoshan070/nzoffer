import { observable, action, runInAction } from 'mobx';
import {
  INZStudyArea,
  INZStudyAreaDetail,
  ICNStudyArea,
  IUniversity,
  IProgramme,
} from './AdminStore.type';
import {
  nzStudyAreaService,
  nzStudyAreaDetailService,
} from '../utils/feathers';
import { generalRequest } from './utils';

export type KeyName = Exclude<keyof AdminStore, 'update' | 'fetchNZStudyAreas'>;

export class AdminStore {
  @observable nzStudyAreas: INZStudyArea[] = [];
  @observable nzStudyAreaDetails: INZStudyAreaDetail[] = [];
  @observable cnStudyAreas: ICNStudyArea[] = [];
  @observable universities: IUniversity[] = [];
  @observable programmes: IProgramme[] = [];

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
  update(key: KeyName, value: any) {
    this[key] = value;
  }
}
