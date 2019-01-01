import React from 'react';
import {
  toJS,
  action,
  configure,
  observable,
} from 'mobx';
import createStepsToRender, {
  getStepsIfGetDegreeInChina,
  getStepsIfNotGetDegreeInChina,
} from './steps';
import Box from '../../components/Box/Box';
import {
  wrapComponent,
  getComponentInfo,
} from '../utils';
import {
  ICity,
  ILocation,
  IStep,
  ReactElementArray,
} from './ChatScreenStore.type';
import WhenComeNZ from '../../screens/ChatScreen/components/WhenComeNZ';

configure({ enforceActions: 'observed' });
export default class AppStore {
  toRender: IStep[] = [];

  @observable steps: ReactElementArray = [];

  @observable selectedProvince: ILocation = {
    name: '',
    id: '',
  };
  @observable isDegreeGetInChina:
    | boolean
    | null = null;
  @observable chinaDegree = '';
  @observable expectedNZDegree = '';
  @observable whenComeNZ = '';
  @observable selectedStudyArea = '';
  @observable whichCountryDegree = '';
  @observable overseaDegree = '';
  @observable isFinished = false;

  currentStepIndex = 0;

  constructor() {
    this.toRender = createStepsToRender(this.nextStep);
    this.addNewStep(this.currentStepIndex);
  }

  @action.bound
  nextStep() {
    if (
      this.isIndexOutOfRange(this.currentStepIndex + 1)
    ) {
      return;
    }

    this.currentStepIndex += 1;
    this.addNewStep(this.currentStepIndex);
  }

  @action.bound
  setIsFinished(value: boolean) {
    this.isFinished = value;
  }

  @action.bound
  setOverseaDegree(degree: string) {
    this.overseaDegree = degree;
  }

  @action.bound
  setWhichCountryDegree(country: string) {
    this.whichCountryDegree = country;
  }

  @action.bound
  setChinaDegree(degree: string) {
    this.chinaDegree = degree;
  }

  @action.bound
  setSelectedStudyArea(selectedStudyArea: string) {
    this.selectedStudyArea = selectedStudyArea;
  }

  @action.bound
  setSelectedProvince(province: ILocation) {
    this.selectedProvince = province;
  }

  @action.bound
  setIsDegreeGetInChina(value: boolean) {
    this.isDegreeGetInChina = value;
  }

  @action.bound
  setExpectedNZDegree(degree: string) {
    this.expectedNZDegree = degree;
  }

  @action.bound
  setWhenComeNZ(year: string) {
    this.whenComeNZ = year;
  }

  isIndexOutOfRange(index: number): boolean {
    return index >= this.toRender.length;
  }

  @action.bound
  addStepsAfterDegreeInChina(
    isDegreeInChina: boolean,
  ) {
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

    const shouldPlaceLeft =
      this.toRender[index].position === 'left';

    const {
      Component,
      props,
      position,
    } = getComponentInfo(
      this.toRender[index],
      shouldPlaceLeft,
    );

    const inner = (
      <Box
        width={1}
        mb={7}
        justifyContent={position}
        alignItems="center"
      >
        <Component {...props} />
      </Box>
    );

    const toRender = wrapComponent(
      inner,
      shouldPlaceLeft,
      index,
    );

    this.steps.push(toRender);
  }
}
