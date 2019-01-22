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

export const Progress: React.FC = ({}) => (
  <Box direction="column" gap={SPACE.xSmall}>
    <Text size={FONT_SIZE.body} mt={SPACE.medium}>
      Well done! Offer111
      即将为你提交AUT的以下课程申请：
    </Text>
    <Box
      width={1}
      bg="white"
      p={SPACE.medium}
      direction="column"
      gap={SPACE.xxxSmall}
    >
      <Text fontWeight="bold">
        Bachelor of Commerce in Accounting 商科本科
        （会计专业）
      </Text>
      <Text fontWeight="bold">
        GIE - the AUT pathway programme AUT
        专业直升语言课程
      </Text>
    </Box>
    <Box
      width={1}
      bg="white"
      p={SPACE.small}
      justifyContent="between"
    >
      <ProgressNode isFinished text="课程匹配" />
      <ProgressNode isFinished text="最佳选择" />
      <ProgressNode
        isFinished={false}
        text="资料上传"
      />
      <ProgressNode
        isFinished={false}
        text="接受Offer"
      />
      <ProgressNode
        isFinished={false}
        text="签证申请"
      />
    </Box>
  </Box>
);
