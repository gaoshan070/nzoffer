import React from 'react';
import { action, configure, observable } from 'mobx';
import createStepsToRender, {
  getStepsIfGetDegreeInChina,
  getStepsIfNotGetDegreeInChina,
} from './steps';
import { wrapComponent, getComponentInfo, generalRequest } from '../utils';
import { ILocation, IStep, ReactElementArray } from './ChatScreenStore.type';
import { Box, SPACE } from '../../styles';
import { is } from '../../styles/rebase/utils/utils';
import { INZStudyArea } from '../AdminStore.type';
import { nzStudyAreaService } from '../../utils/feathers';
import { LOADING_STATUS } from '../../utils/constants';

configure({ enforceActions: 'observed' });
export class ChatStore {
  toRender: IStep[] = [];

  @observable steps: ReactElementArray = [];

  @observable province: ILocation = {
    name: '',
    id: '',
  };

  @observable isDegreeGetInChina: boolean | null = null;

  @observable expectedNZDegree = '';
  @observable nzStudyArea = '';
  @observable nzStudyAreaId = '';

  @observable chinaDegree = '';
  @observable overseaDegree = {
    country: '',
    degree: '',
  };

  @observable whenComeNZ = {
    year: 0,
    month: 0,
  };

  @observable phone = 0;
  password = '';
  @observable validationCode = '';

  currentStepIndex = 0;

  @observable nzStudyAreas: INZStudyArea[] = [];
  @observable nzStudyAreasLoadingStatus = LOADING_STATUS.INITIAL;

  constructor() {
    this.toRender = createStepsToRender(this.nextStep);
    this.addNewStep(this.currentStepIndex);
  }

  @action.bound
  update(
    key: Exclude<
      keyof ChatStore,
      | 'toRender'
      | 'steps'
      | 'currentStepIndex'
      | 'update'
      | 'isIndexOutOfRange'
      | 'addStepsAfterDegreeInChina'
      | 'backToStep'
      | 'addNewStep'
      | 'whenComeNZ'
      | 'overseaDegree'
    >,
    value: unknown,
  ) {
    if (is.function(value)) {
      this[key] = value(this[key]);
    } else {
      // @ts-ignore
      this[key] = value;
    }
  }

  @action.bound
  nextStep(index: number) {
    const isExecuted = index < this.currentStepIndex;
    const isOutOfRange = this.isIndexOutOfRange(this.currentStepIndex + 1);
    if (isExecuted || isOutOfRange) {
      return;
    }

    this.currentStepIndex += 1;
    this.addNewStep(this.currentStepIndex);
  }

  isIndexOutOfRange(index: number): boolean {
    return index >= this.toRender.length;
  }

  @action.bound
  addStepsAfterDegreeInChina(isDegreeInChina: boolean) {
    const restSteps = isDegreeInChina
      ? getStepsIfGetDegreeInChina(this.nextStep)
      : getStepsIfNotGetDegreeInChina(this.nextStep);

    this.backToStep(6);

    this.toRender.push(...restSteps);
  }

  @action.bound
  backToStep(step: number) {
    // [Before adding] toRender length: 6
    const { length } = this.toRender;

    if (!is.number(length)) {
      console.warn('this.toRender.length is undefined');
      return;
    }

    if (length > step) {
      this.toRender = this.toRender.slice(0, step);

      while (this.steps.length !== step) {
        this.steps.pop();
      }

      this.currentStepIndex = step - 1;
    }
  }

  addNewStep(index: number) {
    if (this.isIndexOutOfRange(index)) return;

    const shouldPlaceLeft = this.toRender[index].position === 'left';

    const { Component, props, position } = getComponentInfo(
      this.toRender[index],
      shouldPlaceLeft,
    );

    const inner = (
      <Box
        width={1}
        mb={SPACE.small}
        // @ts-ignore
        justifyContent={position}
        alignItems="center"
      >
        <Component {...props} />
      </Box>
    );

    const toRender = wrapComponent(inner, shouldPlaceLeft, index);

    this.steps.push(toRender);
  }

  collectRegFromChatData() {
    return {
      province: this.province,
      isDegreeGetInChina: this.isDegreeGetInChina,
      expectedNZDegree: this.expectedNZDegree,
      nzStudyArea: this.nzStudyAreaId,
      chinaDegree: this.chinaDegree,
      overseaDegree: this.overseaDegree,
      whenComeNZ: this.whenComeNZ,
      phone: this.phone,
      password: this.password,
      validationCode: this.validationCode,
    };
  }

  isPhoneValid = () => /^\d{11}$/.test(this.phone.toString());

  isFormReady = () =>
    this.isPhoneValid() && this.password !== '' && this.validationCode !== '';

  @action.bound
  async fetchNZStudyAreasIfNot() {
    if (this.nzStudyAreas.length !== 0) return;

    await generalRequest.bind(this)({
      asyncFunc: () => nzStudyAreaService.find(),
      dataPropertyName: 'nzStudyAreas',
      loadStatusPropertyName: 'nzStudyAreasLoadingStatus',
    });
  }
}
