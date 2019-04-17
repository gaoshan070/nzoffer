import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, SPACE } from '../../../../../../../../styles';

export const CaseWrapper: React.FC = observer(({ children }) => (
  <Box direction="column" gap={SPACE.xxSmall}>
    {children}
  </Box>
));
