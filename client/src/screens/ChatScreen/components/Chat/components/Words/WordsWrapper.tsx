import React from 'react';
import { ScaleBox } from './Words.animation';
import { WORDS_LOADING_STATUS } from './loadingStatus';
import { Box } from '../../../../../../rebase/components';

export const WordsWrapper: React.FC<{
  loadingStatus: number;
}> = ({ loadingStatus, children }) => (
  <ScaleBox
    pose={
      loadingStatus === WORDS_LOADING_STATUS.NORMAL
        ? 'enter'
        : 'exit'
    }
  >
    <Box
      ml="small"
      boxShadow={0}
      height="auto"
      alignItems="center"
      px="small"
      py="xsmall"
      borderRadius={4}
      bg="white1"
      minHeight="41px"
    >
      {children}
    </Box>
  </ScaleBox>
);
