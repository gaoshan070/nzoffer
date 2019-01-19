import React from 'react';
import {
  Box,
  Text,
  Paragraph,
  Heading,
} from '../../../rebase/components';
import bg from '../../../assets/selection-ok.jpg';
import { SIZES } from '../../../rebase/styles';

export const HeaderSection: React.FC = () => (
  <Box
    width={1}
    height={SIZES.xxlarge}
    css={{
      background: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPositionY: '60%',
    }}
    direction="column"
    alignItems="center"
    px="small"
  >
    <Heading size="sectionHeading" color="white1">
      马泽民个人主页
    </Heading>
    <Box
      bg="white"
      opacity={0.8}
      px="medium"
      py="xsmall"
    >
      <Paragraph zIndex={9}>
        欢迎来到你的Offer111个人主页！在这里你将完成专属你的学校课程申请，迈出留学新西兰的第一步。Offer拿到后，新西兰政府特许签证顾问将会帮您办理留学签证。
      </Paragraph>
    </Box>
  </Box>
);
