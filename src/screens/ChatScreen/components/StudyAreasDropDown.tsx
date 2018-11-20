import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType, getItemProps } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { FlexCard } from '../../../components/buildingBlocks';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore/ChatScreenStore.context';

const StudyAreasData = [
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
  const {
    selectedStudyArea,
    setSelectedStudyArea,
  } = useContext(ChatScreenStoreContext);

  const whenSelectItem = (
    eventTarget: HTMLElement,
  ) => {
    const selectedStudyArea =
      eventTarget.textContent || '';
    setSelectedStudyArea(selectedStudyArea);
    callback();
  };

  return (
    <FlexCard boxShadow={2}>
      <DropDown<string>
        defaultText="请选择"
        toDisplay={selectedStudyArea}
        items={StudyAreasData}
        getItemProps={getItemProps}
        whenSelectItem={whenSelectItem}
      />
    </FlexCard>
  );
};

export default observer(StudyAreasDropDown);
