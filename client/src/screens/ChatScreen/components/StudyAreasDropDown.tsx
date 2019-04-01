import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { nzStudyAreas } from '../../../shared/sharedData';
import { useComponentDidMount } from '../../../miscellaneous/hooks';
import { INZStudyArea } from '../../../store/AdminStore.type';
import { is } from '../../../styles';

const getItemProps = (item: INZStudyArea) => ({
  key: item._id,
  itemText: item.nameCN,
});

const StudyAreasDropDown: React.FC<IBaseStepType> = ({ callback }) => {
  const { chatStore } = useContext(StoreContext);

  useComponentDidMount(async () => {
    await chatStore.fetchNZStudyAreasIfNot();
  });

  return is.loading(chatStore.nzStudyAreasLoadingStatus) ? (
    <div>加载中</div>
  ) : (
    <DropDown<INZStudyArea>
      toDisplay={chatStore.nzStudyArea}
      items={chatStore.nzStudyAreas}
      getItemProps={getItemProps}
      whenSelectItem={(item: INZStudyArea) => {
        chatStore.update('nzStudyArea', item.nameCN);
        chatStore.update('nzStudyAreaId', item._id);
        callback();
      }}
    />
  );
};

export default observer(StudyAreasDropDown);
