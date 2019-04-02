import React, { useContext } from 'react';
import { Input } from '../../../../../../../../components/Input';
import {
  useRegStoreField,
  useComponentDidMount,
} from '../../../../../../../../miscellaneous/hooks';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../../../../../../../store/store.context';
import DropDown from '../../../../../../../../components/DropDown/DropDown';
import { is } from '../../../../../../../../styles';
import { ICNStudyArea } from '../../../../../../../../store/AdminStore.type';
import { sharedDropDownStyleAll } from '../../../../../components/sharedDropDown';

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
      disable={isCNStudyAreaLoading}
      defaultText={isCNStudyAreaLoading ? '加载中' : '请选择国内所学专业'}
      toDisplay={isCNStudyAreaLoading ? '加载中' : cnStudyArea}
      items={cnStudyAreas}
      getItemProps={getItemProps}
      whenSelectItem={(item: ICNStudyArea) => {
        update('cnStudyArea', item.nameCN);
        update('cnStudyAreaId', item._id);
      }}
      {...sharedDropDownStyleAll}
    />
  );
});
