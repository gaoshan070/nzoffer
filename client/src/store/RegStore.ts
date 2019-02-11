import { action, configure, observable } from 'mobx';
import { is } from '../styles/rebase/utils/utils';
import { ILocation } from './ChatScreenStore/ChatScreenStore.type';

export type RegStoreUpdateKeys = Exclude<keyof RegStore, 'update' | 'city'>;

export class RegStore {
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

  @observable is211school = 'false';

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
