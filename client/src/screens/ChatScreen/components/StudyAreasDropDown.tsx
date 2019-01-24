import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';
import DropDown from '../../../components/DropDown/DropDown';

const studyAreasData = [
  '传播影视',
  '体育运动',
  '法律学科',
  '心理学科',
  '工程学科',
  '艺术时尚',
  '航空航天',
  '医药护理',
  '环境地理',
  '音乐舞蹈',
  '教育学科',
  '语言文学',
  '建筑学科',
  '多媒体设计',
  '旅游酒管',
  '计算机学科',
  '农林动植',
  '新西兰高中',
  '商科管理',
  '新西兰初中',
  '社会学科',
  '生物学科',
  '食品科学',
  '数理化学',
];

const StudyAreasDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const store = useContext(ChatScreenStoreContext);

  return (
    <DropDown
      toDisplay={store.selectedStudyArea}
      items={studyAreasData}
      whenSelectItem={(item: string) => {
        store.selectedStudyArea = item;
        callback();
      }}
    />
  );
};

export default observer(StudyAreasDropDown);
