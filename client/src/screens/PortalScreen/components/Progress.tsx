import React from 'react';
import {
  Box,
  Text,
  Image,
  Paragraph,
  Heading,
  Input,
  FONT_SIZE,
  SPACE,
} from '../../../styles';
import { ProgressNode } from './ProgressNode';

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

export const Progress: React.FC = ({}) => (
  <Box direction="column" gap={SPACE.xxSmall} mt={'32px'}>
    <Text size="18px" color="primary">
      Well done! 我们即将为你提交<span>AUT</span>
      的以下课程申请：
    </Text>
    <Box
      width={1}
      bg="white"
      px={'78px'}
      py={SPACE.small}
      direction="column"
      gap={SPACE.xSmall}
      fontSize="16px"
    >
      <Box direction="column" gap="16px">
        <Text fontSize={'18px'}>Bachelor of Commerce in Accounting</Text>
        <Text>商科本科 （会计专业）</Text>
      </Box>
      <Box direction="column" gap="16px">
        <Text fontSize={'18px'}>GIE - the AUT pathway programme </Text>
        <Text>AUT 专业直升语言课程</Text>
      </Box>
    </Box>
    <Text color={'primary'} mt={SPACE.large} fontSize={'18px'}>
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
