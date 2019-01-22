import React from 'react';
import Chat from '../../screens/ChatScreen/components/Chat/Chat';
import { IStep } from './ChatScreenStore.type';
import ProvinceDropDown from '../../screens/ChatScreen/components/ProvinceDropDown';
import StudyAreasDropDown from '../../screens/ChatScreen/components/StudyAreasDropDown';
import IsDegreeInChina from '../../screens/ChatScreen/components/IsDegreeInChina';
import ChinaDegreeDropDown from '../../screens/ChatScreen/components/ChinaDegreeDropDown';
import ExpectedNZDegree from '../../screens/ChatScreen/components/ExpectedNZDegree';
import WhenComeNZ from '../../screens/ChatScreen/components/WhenComeNZ';
import WhichCountryDegree from '../../screens/ChatScreen/components/WhichCountryDegree';
import OverseaDegree from '../../screens/ChatScreen/components/OverseaDegree';

const LEFT = 'left';
const RIGHT = 'right';

const prepareChat = (callback: Function) => (
  index: number,
  text: string,
): IStep => ({
  component: Chat,
  position: LEFT,
  props: {
    text,
    index,
    callback: () => {
      callback(index);
    },
  },
});

const prepareStep = (callback: Function) => (
  index: number,
  component: React.ComponentType<any>,
): IStep => ({
  component,
  position: RIGHT,
  props: {
    index,
    callback: () => {
      callback(index);
    },
  },
});

export default (callback: Function): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat(
      0,
      '你好，我是COCO，请问你来自中国哪个地方？',
    ),
    getStep(1, ProvinceDropDown),
    getChat(
      2,
      '我知道了，你希望来新西兰学习什么专业领域呢？',
    ),
    getStep(3, StudyAreasDropDown),
    getChat(4, '你最近的学历是在中国取得的吗？'),
    getStep(5, IsDegreeInChina),
  ];
};

const getFinalSteps = (
  callback: Function,
  startFrom: number,
): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat(
      startFrom,
      '你想来新西兰入读什么级别的课程？',
    ),
    getStep(startFrom + 1, ExpectedNZDegree),
    getChat(
      startFrom + 2,
      '好的，你准备什么时间来新西兰入读？',
    ),
    getStep(startFrom + 3, WhenComeNZ),
  ];
};

export const getStepsIfGetDegreeInChina = (
  callback: Function,
): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat(
      6,
      '你最近在读什么学历，或是已经取得了什么学历？',
    ),
    getStep(7, ChinaDegreeDropDown),
    ...getFinalSteps(callback, 8),
  ];
};

export const getStepsIfNotGetDegreeInChina = (
  callback: Function,
): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat(6, '你最近的学历是在哪个国家取得的？'),
    getStep(7, WhichCountryDegree),
    getChat(8, '你最近在国外就读的学历是？'),
    getStep(9, OverseaDegree),
    ...getFinalSteps(callback, 10),
  ];
};
