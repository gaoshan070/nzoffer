import React from 'react';
import posed from 'react-pose';
import { IStep } from './ChatScreenStore/ChatScreenStore.type';
import {
  computed,
  extendObservable,
  observable,
} from 'mobx';

const getAnimationParams = (value: number) => ({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 700,
      ease: [0.53, 0.01, 0.36, 1.63],
    },
  },
  exit: { x: value, opacity: 0 },
});

export const getComponentInfo = (
  toGet: IStep,
  shouldPlaceLeft: boolean,
) => ({
  Component: toGet.component,
  props: toGet.props,
  position: shouldPlaceLeft ? 'start' : 'end',
});

const getAnimationWrapper = (isFromLeft: boolean) =>
  posed.div(
    getAnimationParams(isFromLeft ? -100 : 100),
  );

export const wrapComponent = (
  innerComponent: React.ReactNode,
  shouldPlaceLeft: boolean,
  index: number,
): React.ReactElement<React.ReactNode> => {
  const FromLeft = getAnimationWrapper(true);
  const FromRight = getAnimationWrapper(false);

  return shouldPlaceLeft ? (
    <FromLeft key={index}>{innerComponent}</FromLeft>
  ) : (
    <FromRight key={index}>{innerComponent}</FromRight>
  );
};

// @ts-ignore
export const box: typeof observable &
  typeof computed = (
  obj: object,
  prop: unknown,
  desc: unknown,
) => {
  const privateProp = `_${prop}`;

  // @ts-ignore
  if (desc && desc.initializer) {
    // is decorated
    // @ts-ignore
    observable(obj, privateProp, desc);

    return computed(obj, prop as symbol, {
      get() {
        // @ts-ignore
        return this[privateProp];
      },
      set(value: unknown) {
        // @ts-ignore
        this[privateProp] = value;
      },
    });
  }

  return extendObservable(obj, {
    [privateProp]: desc,
    get [prop as string]() {
      // @ts-ignore
      return this[privateProp];
    },
    set [prop as string](value: string) {
      this[privateProp] = value;
    },
  });
};

export default box;
