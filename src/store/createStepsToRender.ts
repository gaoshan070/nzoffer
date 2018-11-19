import Chat from '../screens/ChatScreen/components/Chat/Chat';
import { IStep } from './ChatScreenStore.type';
import ProvinceDropDown from '../screens/ChatScreen/components/ProvinceDropDown/ProvinceDropDown';
import StudyAreasDropDown from '../screens/ChatScreen/components/StudyAreasDropDown';
import DegreeInChina from '../screens/ChatScreen/components/DegreeInChina/DegreeInChina';

const LEFT = 'left';
const RIGHT = 'right';

export default (callback: Function): IStep[] => {
  const getChat = (text: string): IStep => ({
    component: Chat,
    position: LEFT,
    props: {
      text,
      callback,
    },
  });

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
      component: DegreeInChina,
      position: RIGHT,
      props: {
        callback,
      },
    },
    getChat('aiya'),
  ];
};
