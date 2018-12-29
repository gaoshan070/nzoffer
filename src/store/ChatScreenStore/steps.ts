import React from 'react';
import Chat from '../../screens/ChatScreen/components/Chat/Chat';
import { IStep } from './ChatScreenStore.type';
import ProvinceDropDown from '../../screens/ChatScreen/components/ProvinceDropDown/ProvinceDropDown';
import StudyAreasDropDown from '../../screens/ChatScreen/components/StudyAreasDropDown';
import IsDegreeInChina from '../../screens/ChatScreen/components/IsDegreeInChina/IsDegreeInChina';
import ChinaDegreeDropDown from '../../screens/ChatScreen/components/ChinaDegreeDropDown';
import ExpectedNZDegree from '../../screens/ChatScreen/components/ExpectedNZDegree';
import WhenComeNZ from '../../screens/ChatScreen/components/WhenComeNZ';
import WhichCountryDegree from '../../screens/ChatScreen/components/WhichCountryDegree';
import OverseaDegree from '../../screens/ChatScreen/components/OverseaDegree';

const LEFT = 'left';
const RIGHT = 'right';

const prepareChat = (callback: Function) => (
  text: string,
): IStep => ({
  component: Chat,
  position: LEFT,
  props: {
    text,
    callback,
  },
});

const prepareStep = (callback: Function) => (
  component: React.ComponentType<any>,
): IStep => ({
  component,
  position: RIGHT,
  props: {
    callback,
  },
});

export default (callback: Function): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat(
      '你好，我是COCO，请问你来自中国哪个地方？',
    ),
    getStep(ProvinceDropDown),
    getChat(
      '我知道了，你希望来新西兰学习什么专业领域呢？',
    ),
    getStep(StudyAreasDropDown),
    getChat('你最近的学历是在中国取得的吗？'),
    getStep(IsDegreeInChina),
  ];
};

const getFinalSteps = (
  callback: Function,
): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat('你想来新西兰入读什么级别的课程？'),
    getStep(ExpectedNZDegree),
    getChat('好的，你准备什么时间来新西兰入读？'),
    getStep(WhenComeNZ),
  ];
};

export const getStepsIfGetDegreeInChina = (
  callback: Function,
): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat(
      '你最近在读什么学历，或是已经取得了什么学历？',
    ),
    getStep(ChinaDegreeDropDown),
    ...getFinalSteps(callback),
  ];
};

export const getStepsIfNotGetDegreeInChina = (
  callback: Function,
): IStep[] => {
  const getChat = prepareChat(callback);
  const getStep = prepareStep(callback);

  return [
    getChat('你最近的学历是在哪个国家取得的？'),
    getStep(WhichCountryDegree),
    getChat('你最近在国外就读的学历是？'),
    getStep(OverseaDegree),
    ...getFinalSteps(callback),
  ];
};
