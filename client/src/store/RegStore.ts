import { action, configure, observable } from 'mobx';
import { is } from '../styles/rebase/utils/utils';

export type RegStoreUpdateKeys = Exclude<keyof RegStore, 'update'>;

export class RegStore {
  @observable firstName = '';
  @observable lastName = '';
  @observable birthday = '';
  @observable gender = '';

  @action.bound
  update(key: RegStoreUpdateKeys, value: unknown) {
    if (is.function(value)) {
      this[key] = value(this[key]);
    } else {
      // @ts-ignore
      this[key] = value;
    }
  }
}
