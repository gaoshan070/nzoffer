import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { chinaDegreesMap } from '../../../../../../../../shared/sharedData';
import {
  StoreContext,
  useRegStore,
} from '../../../../../../../../store/store.context';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import {
  getSharedDropDownStyleAll,
  sharedDropDownStyleAll,
} from '../../../../../components/sharedDropDown';
import { Box, is } from '../../../../../../../../styles';
import {
  useComponentDidMount,
  usePrevious,
  useRegStoreDropDown,
} from '../../../../../../../../miscellaneous/hooks';

export const ChinaDegreeDropDown: React.FC = observer(() => {
  const {
    nzStudyAreaDetailsLoadingStatus,
    fetchRelatedNZStudyAreaDetails,
    userLoadingStatus,
  } = useRegStore();
  const [degreeCategory, onDegreeCategoryChange] = useRegStoreDropDown<string>(
    'degreeCategory',
  );
  const prevDegreeCategory = usePrevious(degreeCategory);
  const { update } = useContext(StoreContext).regStore;

  const [chinaDegree, onChinaDegreeChange] = useRegStoreDropDown<string>(
    'chinaDegree',
  );
  const prevChinaDegree = usePrevious(chinaDegree);

  useEffect(() => {
    if (prevChinaDegree !== chinaDegree) {
      if (
        !is.loading(nzStudyAreaDetailsLoadingStatus) &&
        is.loaded(userLoadingStatus)
      ) {
        // @ts-ignore
        fetchRelatedNZStudyAreaDetails();
      }
    }
  }, [prevChinaDegree, chinaDegree, nzStudyAreaDetailsLoadingStatus]);

  useEffect(() => {
    // This is for syncing the category name with chinaDegree
    // Because we don't save this category name in DB
    // It can be derived from chinaDegree.
    const isPrimarySchool = chinaDegree.startsWith('小');
    const isHighSchool = chinaDegree.startsWith('初');
    const isSeniorHighSchool = chinaDegree.startsWith('高');
    const isCollege = chinaDegree.startsWith('大专');

    if (!degreeCategory && chinaDegree) {
      if (isPrimarySchool) {
        onDegreeCategoryChange('小学');
      } else if (isHighSchool) {
        onDegreeCategoryChange('初中');
      } else if (isSeniorHighSchool) {
        onDegreeCategoryChange('高中');
      } else if (isCollege) {
        onDegreeCategoryChange('大专');
      } else {
        onDegreeCategoryChange('大学');
      }
    }
  }, [degreeCategory, chinaDegree, onDegreeCategoryChange]);

  return (
    <Box>
      <DropDown
        defaultText="请选择当前学历"
        toDisplay={degreeCategory}
        items={Object.keys(chinaDegreesMap)}
        whenSelectItem={(item: keyof typeof chinaDegreesMap) => {
          onDegreeCategoryChange(item);
          if (item !== prevDegreeCategory) {
            update('chinaDegree', '');
          }
        }}
        {...getSharedDropDownStyleAll({
          css: {
            borderRight: 'none',
          },
          itemStyle: {
            paddingLeft: '18px',
          },
        })}
      />
      <DropDown
        defaultText="学历细分"
        toDisplay={chinaDegree}
        // @ts-ignore
        items={chinaDegreesMap[degreeCategory]}
        whenSelectItem={(item: string) => {
          onChinaDegreeChange(item);
        }}
        {...sharedDropDownStyleAll}
      />
    </Box>
  );
});
