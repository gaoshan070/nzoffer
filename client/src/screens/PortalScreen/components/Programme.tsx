import React from 'react';
import {
  Box,
  Text,
  Paragraph,
  Heading,
  FONT_SIZE,
} from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';

export const Programme: React.FC = () => (
  <SectionWithTitle title="目前正在为你申请的专业课程是:">
    <Text fontWeight="bold">AUT 奥克兰理工大学</Text>
    <Text fontWeight="bold">
      Bachelor of Commerce in Accounting
      商科本科（会计专业）
    </Text>
    <Box justifyContent="between">
      <Text size={FONT_SIZE.small} color="grey1">
        课程长度：3年
      </Text>
      <Text size={FONT_SIZE.small}>
        开学时间：2019年7月
      </Text>
      <Text size={FONT_SIZE.small}>城市：奥克兰</Text>
    </Box>
  </SectionWithTitle>
);
