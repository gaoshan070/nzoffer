import React from 'react';
import { action, configure, observable } from 'mobx';
import createStepsToRender from './createStepsToRender';
import { Flex } from 'rebass';
import {
  wrapComponent,
  getComponentInfo,
} from './utils';
import {
  ICity,
  ILocation,
  IStep,
  ReactElementArray,
} from './ChatScreenStore.type';

configure({ enforceActions: 'observed' });
export default class AppStore {
  @observable
  toRender: IStep[] = [];

  @observable
  steps: ReactElementArray = [];

  @observable
  selectedProvince: ILocation = {
    name: '',
    id: '',
  };

  @observable
  isDegreeGetInChina = true;

  @observable
  selectedStudyArea = '';

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

  isIndexOutOfRange(index: number): boolean {
    return index >= this.toRender.length;
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
      <Flex
        width={1}
        mb={4}
        justifyContent={position}
        alignItems="center"
      >
        <Component {...props} />
      </Flex>
    );

    const toRender = wrapComponent(
      inner,
      shouldPlaceLeft,
      index,
    );

    this.steps.push(toRender);
  }
}
