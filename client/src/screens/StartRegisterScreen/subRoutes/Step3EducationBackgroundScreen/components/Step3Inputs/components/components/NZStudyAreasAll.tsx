import React, { useContext } from 'react';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import {
  useFetchNZStudyAreasWhenMount,
  useComponentDidMount,
} from '../../../../../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { Box, is } from '../../../../../../../../styles';
import {
  getSharedDropDownStyleAll,
  sharedDropDownStyleAll,
} from '../../../../../components/sharedDropDown';
import { StoreContext } from '../../../../../../../../store/store.context';
import {
  INZStudyArea,
  INZStudyAreaDetail,
} from '../../../../../../../../store/AdminStore.type';
import { NO_ENG_SCORE_TEXT } from '../../../../../../../../shared/sharedData';

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
        isOpenToTop
        disable={isStudyAreaLoading}
        defaultText="请选留学意向专业"
        toDisplay={nzStudyArea}
        items={nzStudyAreas}
        getItemProps={getItemProps}
        whenSelectItem={(item: INZStudyArea) => {
          update('nzStudyArea', item.nameCN);
          update('nzStudyAreaId', item._id);

          if (
            item._id !== nzStudyAreaId &&
            nzStudyAreaDetail !== '' &&
            nzStudyAreaDetailId !== ''
          ) {
            update('nzStudyAreaDetail', '');
            update('nzStudyAreaDetailId', '');
          }
        }}
        {...getSharedDropDownStyleAll({
          css: {
            borderRight: 'none',
          },
          listStyle: {
            maxHeight: '25vh',
          },
        })}
      />
      <DropDown
        isOpenToTop
        disable={isStudyAreaDetailLoading}
        defaultText="请选细分专业"
        toDisplay={nzStudyAreaDetail}
        items={nzStudyAreaDetails.filter(
          item => item.nzStudyArea === nzStudyAreaId,
        )}
        getItemProps={getItemProps}
        whenSelectItem={(item: INZStudyAreaDetail) => {
          update('nzStudyAreaDetail', item.nameCN);
          update('nzStudyAreaDetailId', item._id);
        }}
        {
          // @ts-ignore
          ...getSharedDropDownStyleAll({
            listStyle: {
              maxHeight: '25vh',
            },
          })
        }
      />
    </Box>
  );
});
