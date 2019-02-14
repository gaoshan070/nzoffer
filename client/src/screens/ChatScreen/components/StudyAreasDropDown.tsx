import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { nzStudyAreas } from '../../../shared/sharedData';

const StudyAreasDropDown: React.FC<IBaseStepType> = ({ callback }) => {
  const store = useContext(StoreContext).chatStore;
  return (
    <DropDown
      toDisplay={store.nzStudyArea}
      items={nzStudyAreas}
      whenSelectItem={(item: string) => {
        store.update('nzStudyArea', item);
        callback();
      }}
    />
  );
};

export default observer(StudyAreasDropDown);
