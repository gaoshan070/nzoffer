import React from 'react';
import posed from 'react-pose';
import { IStep } from './ChatScreenStore/ChatScreenStore.type';

const getAnimationParams = (value: number) => ({
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 700 },
  },
  exit: { x: value, opacity: 0 },
});

export const getComponentInfo = (
  toGet: IStep,
  shouldPlaceLeft: boolean,
) => ({
  Component: toGet.component,
  props: toGet.props,
  position: shouldPlaceLeft
    ? 'flex-start'
    : 'flex-end',
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
