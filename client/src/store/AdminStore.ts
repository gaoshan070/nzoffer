import { observable, action } from 'mobx';
import { INZStudyArea } from './AdminStore.type';

export type KeyName = Exclude<keyof AdminStore, 'update'>;

export class AdminStore {
  @observable nzStudyAreas: INZStudyArea[] = [];
  @observable universities = [];

  @action.bound
  update(key: KeyName, value: any) {
    this[key] = value;
  }
}
