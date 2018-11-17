import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Text } from 'rebass';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown';
import { FlexCard } from '../../../components/buildingBlocks';
import { ChatScreenStoreContext } from '../../../store/ChatScreenStore.context';

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

const displayItem = (itemOnClick: Function) => (
  studyArea: string,
) => (
  <Text
    key={studyArea}
    onClick={itemOnClick}
    mb={3}
    css={{ cursor: 'pointer' }}
  >
    {studyArea}
  </Text>
);

const StudyAreasDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const {
    selectedStudyArea,
    setSelectedStudyArea,
  } = useContext(ChatScreenStoreContext);

  const whenSelectItem = (
    event: React.MouseEvent<HTMLElement>,
    selectItemFromList: Function,
  ) => {
    const target = event.target as HTMLElement;
    const selectedStudyArea = target.innerText;

    setSelectedStudyArea(selectedStudyArea);
    selectItemFromList(selectedStudyArea);

    callback();
  };

  const displaySelected = () =>
    selectedStudyArea || '请选择';

  return (
    <FlexCard boxShadow={2}>
      <DropDown
        displayItems={displayItem}
        initializeSelected=""
        items={StudyAreasData}
        whenSelectItem={whenSelectItem}
        displaySelected={displaySelected}
      />
    </FlexCard>
  );
};

export default observer(StudyAreasDropDown);
