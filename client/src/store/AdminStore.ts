import { observable, action, runInAction } from 'mobx';
import {
  INZStudyArea,
  INZStudyAreaDetail,
  ICNStudyArea,
} from './AdminStore.type';
import { nzStudyAreaService } from '../utils/feathers';
import Alert from 'react-s-alert';
import { generalRequest } from './utils';

export type KeyName = Exclude<keyof AdminStore, 'update' | 'fetchNZStudyAreas'>;

export class AdminStore {
  @observable nzStudyAreas: INZStudyArea[] = [];
  @observable nzStudyAreaDetails: INZStudyAreaDetail[] = [];
  @observable cnStudyAreas: ICNStudyArea[] = [];
  @observable universities = [];

  @action.bound
  async fetchNZStudyAreas() {
    await generalRequest.bind(this)({
      asyncFunc: () => nzStudyAreaService.find(),
      dataPropertyName: 'nzStudyAreas',
    });
  }

  @action.bound
  update(key: KeyName, value: any) {
    this[key] = value;
  }
}
