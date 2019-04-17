import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ChinaDegreeDropDown } from './components/ChinaDegreeDropDown';
import { CNHighSchoolName } from './components/CNHighSchoolName';
import {
  useRegStoreDropDown,
  useRegStoreField,
} from '../../../../../../../miscellaneous/hooks';
import {
  RadioGroup,
  RadioButton,
} from '../../../../../../../components/RadioGroup/RadioGroup';
import { Box } from '../../../../../../../styles';
import DropDown from '../../../../../../../components/DropDown/DropDown';
import {
  gaoKaoScoreLevels,
  NO_ENG_SCORE_TEXT,
} from '../../../../../../../shared/sharedData';
import { EngTest } from './components/EngTest';
import { NZStudyAreasAll } from './components/NZStudyAreasAll';
import { CaseWrapper } from './components/CaseWrapper';
import {
  getSharedDropDownStyleAll,
  sharedDropDownStyleAll,
} from '../../../../components/sharedDropDown';
import { StoreContext } from '../../../../../../../store/store.context';

export const Step3Case3Input: React.FC = observer(() => {
  const { regStore } = useContext(StoreContext);

  const [gaoKaoScoreLevel, onGaoKaoScoreLevelChange] = useRegStoreDropDown(
    'gaoKaoScoreLevel',
  );

  return (
    <CaseWrapper>
      <ChinaDegreeDropDown />
      <CNHighSchoolName />
      {
        <Box gap={'20px'} alignItems={'center'}>
          <Box width={0.4} pl={'16px'}>
            选择高考成绩
          </Box>
          <DropDown
            defaultText="高考成绩"
            toDisplay={gaoKaoScoreLevel}
            items={gaoKaoScoreLevels}
            whenSelectItem={onGaoKaoScoreLevelChange}
            {...getSharedDropDownStyleAll({
              boxProps: {
                width: '70%',
              },
              itemStyle: {
                paddingLeft: '19px',
              },
            })}
          />
        </Box>
      }
      <EngTest />
      <NZStudyAreasAll />
    </CaseWrapper>
  );
});
