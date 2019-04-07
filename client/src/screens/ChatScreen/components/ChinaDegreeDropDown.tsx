import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';
import { StoreContext } from '../../../store/store.context';
import DropDown from '../../../components/DropDown/DropDown';
import { chinaDegrees, chinaDegreesMap } from '../../../shared/sharedData';
import { Box } from '../../../styles';

const ChinaDegreeDropDown: React.FC<IBaseStepType> = ({ callback }) => {
  const [degreeCategory, setDegreeCategory] = useState<
    keyof typeof chinaDegreesMap
  >('大学');
  const { chinaDegree, update } = useContext(StoreContext).chatStore;

  return (
    <Box>
      <DropDown
        defaultText="请选择你当前的学历"
        toDisplay={degreeCategory}
        items={Object.keys(chinaDegreesMap)}
        whenSelectItem={(item: keyof typeof chinaDegreesMap) => {
          setDegreeCategory(item);
          if (!chinaDegreesMap[item].includes(chinaDegree)) {
            update('chinaDegree', '');
          }
        }}
        boxProps={{
          width: '128px',
        }}
        css={{
          borderRight: 'none',
        }}
      />
      <DropDown
        toDisplay={chinaDegree}
        items={chinaDegreesMap[degreeCategory]}
        whenSelectItem={(item: string) => {
          update('chinaDegree', item);
          callback();
        }}
        boxProps={{
          width: '128px',
        }}
        itemStyle={{
          paddingLeft: '23px',
          paddingRight: '23px',
        }}
      />
    </Box>
  );
};

export default observer(ChinaDegreeDropDown);
