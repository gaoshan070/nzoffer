import { action, configure, observable } from 'mobx';

class RegisterStore {
  @observable firstName = '';
  @observable lastName = '';
}
