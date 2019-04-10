import React from 'react';
import {
  Box,
  Text,
  Image,
  Paragraph,
  Heading,
  FONT_SIZE,
  SPACE,
} from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';
import testLogo from '../../../assets/testlogo.svg';

export const Programme: React.FC = () => (
  <SectionWithTitle title="目前正在为你申请的专业课程是:">
    <Box gap="24px" px={'2px'} py={12}>
      <Image src={testLogo} width={80} height={80} />
      <Box direction="column">
        <Text fontSize="18px" fontWeight="bold">
          AUT 奥克兰理工大学
        </Text>
        <Text mt="12px" fontSize="16px">
          Bachelor of Commerce in Accounting <br />
          <Text mt={12}>商科本科（会计专业）</Text>
        </Text>
        <Box gap={SPACE.xxSmall} mt="18px">
          <Text size={FONT_SIZE.body}>课程长度：3年</Text>
          <Text size={FONT_SIZE.body}>开学时间：2019年7月</Text>
          <Text size={FONT_SIZE.body}>城市：奥克兰</Text>
        </Box>
      </Box>
    </Box>
  </SectionWithTitle>
);
