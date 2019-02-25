import { observable, action } from 'mobx';

export class AdminStore {
  @observable universities = [];

  @action.bound
  update(key: Exclude<keyof AdminStore, 'update'>, value: any) {
    this[key] = value;
  }
}
