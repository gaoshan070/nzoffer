import { action, configure, observable } from 'mobx';

export class RegStore {
  @observable firstName = '';
  @observable lastName = '';
}
