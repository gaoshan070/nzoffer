import React, { useContext } from 'react';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import {
  useFetchNZStudyAreasWhenMount,
  useComponentDidMount,
} from '../../../../../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { Box, is } from '../../../../../../../../styles';
import { getSharedDropDownStyleAll } from '../../../../../components/sharedDropDown';
import { StoreContext } from '../../../../../../../../store/store.context';
import {
  INZStudyArea,
  INZStudyAreaDetail,
} from '../../../../../../../../store/AdminStore.type';

export const NZStudyAreasAll: React.FC = observer(() => {
  const { regStore } = useContext(StoreContext);
  const {
    nzStudyArea,
    nzStudyAreaId,
    nzStudyAreaDetail,
    nzStudyAreaDetailId,
    update,
    nzStudyAreaDetails,
    fetchRelatedNZStudyAreaDetails,
    nzStudyAreaDetailsLoadingStatus,
  } = regStore;
  const { nzStudyAreas, getItemProps } = useFetchNZStudyAreasWhenMount();

  useComponentDidMount(async () => {
    if (!is.loading(nzStudyAreaDetailsLoadingStatus)) {
      await fetchRelatedNZStudyAreaDetails();
    }
  });

  return (
    <Box>
      <DropDown
        isOpenToTop
        defaultText="留学意向专业"
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
        defaultText="细分专业"
        toDisplay={nzStudyAreaDetail}
        items={nzStudyAreaDetails
          .filter(item => item.nzStudyArea === nzStudyAreaId)
          .sort(
            (a: INZStudyAreaDetail, b: INZStudyAreaDetail) =>
              a.nameCN.length - b.nameCN.length,
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
