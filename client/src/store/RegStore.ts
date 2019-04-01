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

  @observable degreeCategory = '大学';
  @observable chinaDegree = '';
  @observable isCN211Uni = false;
  @observable cn211UniName = '';
  @observable cnNormalUniName = '';
  @observable cnUniAverageScore = '';

  @observable engTestName = '';
  @observable engTestScore = '';

  @observable nzStudyArea = '';
  @observable nzStudyAreaDetail = '';
  @observable cnStudyArea = '';

  @observable cnHighSchoolName = '';

  @observable haveGaoKaoScore = false;
  @observable gaoKaoScoreLevel = '';

  @observable overseaUniNameEN = '';
  @observable overseaStudyAreaNameEN = '';
  @observable overseaUniAverageScore = '';

  @observable isDegreeGetInChina = false;
  @observable hasWorkExperiences = false;

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
