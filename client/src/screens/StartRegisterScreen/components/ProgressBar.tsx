import React from 'react';
import { Box, Text } from '../../../styles/rebase/components';
import { COLORS, SPACE } from '../../../styles';

const HEIGHT = '4px';

export const ProgressBar: React.FC<{
  progress: number;
}> = ({ progress }) => (
  <Box
    alignItems="center"
    direction="column"
    width={0.95}
    gap={SPACE.xxxSmall}
    css={{
      'letter-spacing': '1px',
    }}
  >
    <Text alignSelf={'center'}>目前申请进度 {`${progress * 100}%`}</Text>
    <Box
      borderRadius={0}
      width={'110%'}
      height={HEIGHT}
      bg={COLORS.fontGrey}
      position="relative"
    >
      <Box
        borderRadius={0}
        width={progress}
        height={HEIGHT}
        position="absolute"
        bg={COLORS.green}
      />
    </Box>
    <Text alignSelf={'center'}>请完成注册继续申请</Text>
  </Box>
);
