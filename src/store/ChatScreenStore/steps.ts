import Chat from '../../screens/ChatScreen/components/Chat/Chat';
import { IStep } from './ChatScreenStore.type';
import ProvinceDropDown from '../../screens/ChatScreen/components/ProvinceDropDown/ProvinceDropDown';
import StudyAreasDropDown from '../../screens/ChatScreen/components/StudyAreasDropDown';
import IsDegreeInChina from '../../screens/ChatScreen/components/IsDegreeInChina/IsDegreeInChina';
import ChinaDegreeDropDown from '../../screens/ChatScreen/components/ChinaDegreeDropDown';

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

export default (callback: Function): IStep[] => {
  const getChat = prepareChat(callback);

  return [
    getChat(
      '你好，我是COCO，请问你来自中国哪个地方？',
    ),
    {
      component: ProvinceDropDown,
      position: RIGHT,
      props: {
        callback,
      },
    },
    getChat(
      '我知道了，你希望来新西兰学习什么专业领域呢？',
    ),
    {
      component: StudyAreasDropDown,
      position: RIGHT,
      props: {
        callback,
      },
    },
    getChat('你最近的学历是在中国取得的吗？'),
    {
      component: IsDegreeInChina,
      position: RIGHT,
      props: {
        callback,
      },
    },
  ];
};

export const getStepsIfGetDegreeInChina = (
  callback: Function,
): IStep[] => {
  const getChat = prepareChat(callback);

  return [
    getChat(
      '你最近在读什么学历，或是已经取得了什么学历？',
    ),
    {
      component: ChinaDegreeDropDown,
      position: RIGHT,
      props: {
        callback,
      },
    },
  ];
};

export const getStepsIfNotGetDegreeInChina = (
  callback: Function,
): IStep[] => {
  const getChat = prepareChat(callback);

  return [getChat('啊，你不在中国上学啊？')];
};
