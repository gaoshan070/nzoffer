import React from 'react';
import { action, configure, observable } from 'mobx';
import createStepsToRender, {
  getStepsIfGetDegreeInChina,
  getStepsIfNotGetDegreeInChina,
} from './steps';
import {
  wrapComponent,
  getComponentInfo,
  box,
} from '../utils';
import {
  ILocation,
  IStep,
  ReactElementArray,
} from './ChatScreenStore.type';
import { Box, SPACE } from '../../styles';

configure({ enforceActions: 'observed' });
export class AppStore {
  toRender: IStep[] = [];

  @observable steps: ReactElementArray = [];

  @box selectedProvince: ILocation = {
    name: '',
    id: '',
  };
  @box isDegreeGetInChina: boolean | null = null;
  @box chinaDegree = '';
  @box expectedNZDegree = '';
  @box whenComeNZ = '';
  @box selectedStudyArea = '';
  @box whichCountryDegree = '';
  @box overseaDegree = '';

  currentStepIndex = 0;

  constructor() {
    this.toRender = createStepsToRender(this.nextStep);
    this.addNewStep(this.currentStepIndex);
  }

  @action.bound
  nextStep(index: number) {
    const isExecuted = index < this.currentStepIndex;
    const isOutOfRange = this.isIndexOutOfRange(
      this.currentStepIndex + 1,
    );
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
        mb={SPACE.xLarge}
        // @ts-ignore
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
