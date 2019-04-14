import React from 'react';
import posed from 'react-pose';
import { IStep } from './ChatScreenStore/ChatScreenStore.type';
import { AxiosPromise, AxiosError } from 'axios';
import { runInAction } from 'mobx';
import Alert from 'react-s-alert';
import { LOADING_STATUS } from '../utils/constants';
import { is } from '../styles';

const getAnimationParams = (value: number) => ({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 800,
    },
  },
  exit: { x: value, opacity: 0 },
});

export const getComponentInfo = (toGet: IStep, shouldPlaceLeft: boolean) => ({
  Component: toGet.component,
  props: toGet.props,
  position: shouldPlaceLeft ? 'start' : 'end',
});

const getAnimationWrapper = (isFromLeft: boolean) =>
  posed.div(getAnimationParams(isFromLeft ? -100 : 100));

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

export async function generalRequest({
  asyncFunc,
  afterLoaded,
  dataPropertyName,
  loadStatusPropertyName,
}: {
  asyncFunc: () => AxiosPromise;
  afterLoaded?: (response: unknown) => void;
  dataPropertyName?: string;
  loadStatusPropertyName?: string;
}) {
  const isLoadExist = typeof loadStatusPropertyName === 'string';

  if (isLoadExist) {
    runInAction(() => {
      // @ts-ignore
      this[loadStatusPropertyName] = LOADING_STATUS.LOADING;
    });
  }

  try {
    const response = await asyncFunc();

    if (isLoadExist) {
      runInAction(() => {
        // @ts-ignore
        this[loadStatusPropertyName] = LOADING_STATUS.LOADED;
      });
    }

    if (is.function(afterLoaded)) {
      runInAction(() => {
        afterLoaded(response);
      });
    } else {
      runInAction(() => {
        // @ts-ignore
        this[dataPropertyName] = response.data ? response.data : response;
      });
    }
  } catch (e) {
    if (isLoadExist) {
      runInAction(() => {
        // @ts-ignore
        this[loadStatusPropertyName] = LOADING_STATUS.FAILED;
      });
    }
    Alert.error((e as AxiosError).message);
  }
}
