import { observable, action } from 'mobx';
import { INZStudyArea } from './AdminStore.type';

export class AdminStore {
  @observable nzStudyAreas: INZStudyArea[] = [];
  @observable universities = [];

  @action.bound
  update(key: Exclude<keyof AdminStore, 'update'>, value: any) {
    this[key] = value;
  }
}
