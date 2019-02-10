import React from 'react';
import {
  Box,
  Text,
} from '../../../styles/rebase/components';
import { COLORS, SPACE } from '../../../styles';

export const ProgressBar: React.FC<{
  progress: number;
}> = ({ progress }) => (
  <Box
    alignItems="center"
    direction="column"
    width={1}
    gap={SPACE.xxxSmall}
  >
    <Text alignSelf={'center'}>
      目前申请进度 {`${progress * 100}%`}
    </Text>
    <Box
      borderRadius={0}
      width={1}
      height="6px"
      bg={COLORS.fontGrey}
      position="relative"
    >
      <Box
        borderRadius={0}
        width={progress}
        height="6px"
        position="absolute"
        bg={COLORS.green}
      />
    </Box>
    <Text alignSelf={'center'}>
      请完成注册继续申请
    </Text>
  </Box>
);
