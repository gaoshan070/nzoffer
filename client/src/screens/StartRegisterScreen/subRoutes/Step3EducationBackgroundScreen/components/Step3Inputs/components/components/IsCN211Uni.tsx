import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, SPACE } from '../../../../../../../../styles';
import {
  RadioGroup,
  RadioButton,
} from '../../../../../../../../components/RadioGroup/RadioGroup';
import { useRegStoreField } from '../../../../../../../../miscellaneous/hooks';

export const IsCN211Uni = observer(() => {
  const [is211, onIs211Change] = useRegStoreField('isCN211Uni');

  return (
    <Box justifyContent="between" gap={SPACE.xxSmall} direction="column">
      <Box>你所就读的学校是否属于211院校</Box>
      <RadioGroup
        name="is211"
        selectedValue={is211}
        onChange={onIs211Change}
        alignItems="center"
      >
        <RadioButton value label="是" />
        <RadioButton value={false} label="否" />
      </RadioGroup>
    </Box>
  );
});
