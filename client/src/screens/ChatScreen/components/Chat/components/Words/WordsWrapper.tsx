import React from 'react';
import { ScaleBox } from './Words.animation';
import { WORDS_LOADING_STATUS } from './loadingStatus';
import { Box, SPACE } from '../../../../../../styles';

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
      ml={SPACE.xxSmall}
      boxShadow={0}
      height="auto"
      alignItems="center"
      px={SPACE.small}
      borderRadius={4}
      bg="white1"
      minHeight="48px"
      maxHeight="48px"
    >
      {children}
    </Box>
  </ScaleBox>
);
