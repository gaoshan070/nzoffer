import React, { useContext } from 'react';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import {
  useFetchNZStudyAreasWhenMount,
  useComponentDidMount,
} from '../../../../../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { Box, is } from '../../../../../../../../styles';
import { sharedDropDownStyleAll } from '../../../../../components/sharedDropDown';
import { StoreContext } from '../../../../../../../../store/store.context';
import {
  INZStudyArea,
  INZStudyAreaDetail,
} from '../../../../../../../../store/AdminStore.type';

export const NZStudyAreasAll: React.FC = observer(() => {
  const {
    nzStudyArea,
    nzStudyAreaId,
    nzStudyAreaDetail,
    nzStudyAreaDetailId,
    nzStudyAreaDetails,
    nzStudyAreaDetailsLoadingStatus,
    fetchNZStudyAreaDetailsIfNot,
    update,
  } = useContext(StoreContext).regStore;

  const {
    nzStudyAreas,
    nzStudyAreasLoadingStatus,
    getItemProps,
  } = useFetchNZStudyAreasWhenMount();

  useComponentDidMount(async () => {
    await fetchNZStudyAreaDetailsIfNot();
  });

  const isStudyAreaLoading = is.loading(nzStudyAreasLoadingStatus);
  const isStudyAreaDetailLoading = is.loading(nzStudyAreaDetailsLoadingStatus);

  return (
    <Box>
      <DropDown
        disable={isStudyAreaLoading}
        defaultText={isStudyAreaLoading ? '加载中' : '请选留学意向专业'}
        toDisplay={isStudyAreaLoading ? '加载中' : nzStudyArea}
        items={nzStudyAreas}
        getItemProps={getItemProps}
        whenSelectItem={(item: INZStudyArea) => {
          update('nzStudyArea', item.nameCN);
          update('nzStudyAreaId', item._id);
        }}
        {...sharedDropDownStyleAll}
      />
      <DropDown
        disable={isStudyAreaDetailLoading}
        defaultText={isStudyAreaDetailLoading ? '加载中' : '请选细分专业'}
        toDisplay={isStudyAreaDetailLoading ? '加载中' : nzStudyAreaDetail}
        items={nzStudyAreaDetails.filter(
          item => item.nzStudyArea === nzStudyAreaId,
        )}
        getItemProps={getItemProps}
        whenSelectItem={(item: INZStudyAreaDetail) => {
          update('nzStudyAreaDetail', item.nameCN);
          update('nzStudyAreaDetailId', item._id);
        }}
        {...sharedDropDownStyleAll}
      />
    </Box>
  );
});
