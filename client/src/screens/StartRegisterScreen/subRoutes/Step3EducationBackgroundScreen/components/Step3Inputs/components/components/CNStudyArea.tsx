import React, { useContext } from 'react';
import { useComponentDidMount } from '../../../../../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../../../../../../../store/store.context';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { is } from '../../../../../../../../styles';
import { ICNStudyArea } from '../../../../../../../../store/AdminStore.type';
import { getSharedDropDownStyleAll } from '../../../../../components/sharedDropDown';

const getItemProps = (item: ICNStudyArea) => ({
  key: item._id,
  itemText: item.nameCN,
});

export const CNStudyArea: React.FC = observer(() => {
  const {
    cnStudyArea,
    cnStudyAreas,
    cnStudyAreasLoadingStatus,
    fetchCNStudyAreaIfNot,
    update,
  } = useContext(StoreContext).regStore;

  useComponentDidMount(fetchCNStudyAreaIfNot);

  const isCNStudyAreaLoading = is.loading(cnStudyAreasLoadingStatus);

  return (
    <DropDown
      isOpenToTop
      disable={isCNStudyAreaLoading}
      defaultText="国内所学专业"
      toDisplay={cnStudyArea}
      items={cnStudyAreas}
      getItemProps={getItemProps}
      whenSelectItem={(item: ICNStudyArea) => {
        update('cnStudyArea', item.nameCN);
        // @ts-ignore
        update('cnStudyAreaId', item._id);
      }}
      {...getSharedDropDownStyleAll({
        listStyle: { height: '25vh' },
      })}
    />
  );
});
