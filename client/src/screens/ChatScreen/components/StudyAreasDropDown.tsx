import React from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import DropDown from '../../../components/DropDown/DropDown';
import { useFetchNZStudyAreasWhenMount } from '../../../miscellaneous/hooks';
import { INZStudyArea } from '../../../store/AdminStore.type';
import { is } from '../../../styles';

const StudyAreasDropDown: React.FC<IBaseStepType> = ({ callback }) => {
  const {
    nzStudyArea,
    nzStudyAreas,
    getItemProps,
    whenSelectItem,
  } = useFetchNZStudyAreasWhenMount();

  return (
    <DropDown<INZStudyArea>
      toDisplay={nzStudyArea}
      items={nzStudyAreas}
      getItemProps={getItemProps}
      whenSelectItem={(item: INZStudyArea) => {
        whenSelectItem(item);
        callback();
      }}
      listStyle={{
        maxHeight: '280px',
      }}
    />
  );
};

export default observer(StudyAreasDropDown);
