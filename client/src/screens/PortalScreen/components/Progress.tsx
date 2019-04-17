import React from 'react';
import { Box, Text, SPACE } from '../../../styles';
import { ProgressNode } from './ProgressNode';
import { observer } from 'mobx-react-lite';

const Line = () => (
  <Box
    bg="grey"
    position="absolute"
    width={0.85}
    height="2px"
    top={0}
    bottom={25}
    left={0}
    right={0}
    m="auto"
    zIndex={1}
  />
);

export const Progress: React.FC = observer(({}) => {
  return (
    <Box direction="column" gap={SPACE.xxSmall}>
      <Text color={'primary'} mt="28px" fontSize={'18px'}>
        目前申请状态：
      </Text>
      <Box
        position="relative"
        width={1}
        bg="white"
        p={SPACE.small}
        justifyContent="between"
        zIndex={0}
      >
        <Line />
        <ProgressNode isFinished text="课程匹配" />
        <ProgressNode isFinished text="我的选择" />
        <ProgressNode isFinished={false} text="资料上传" />
        <ProgressNode isFinished={false} text="接受Offer" />
        <ProgressNode isFinished={false} text="签证申请" />
      </Box>
    </Box>
  );
});
