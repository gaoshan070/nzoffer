import React from 'react';
import {
  Box,
  Text,
  Paragraph,
  Heading,
  SIZE,
  FONT_SIZE,
  SPACE,
} from '../../../styles';
import bg from '../../../assets/selection-ok.jpg';

export const HeaderSection: React.FC = () => (
  <Box
    width={1}
    height={SIZE.xxLarge}
    css={{
      background: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPositionY: '60%',
    }}
    direction="column"
    alignItems="center"
    px={SPACE.small}
  >
    <Heading
      size={FONT_SIZE.sectionHeading}
      color="primary"
    >
      马泽民个人主页
    </Heading>
    <Box
      bg="white"
      opacity={0.85}
      px={SPACE.medium}
      py={SPACE.xSmall}
    >
      <Paragraph
        zIndex={9}
        fontWeight="bold"
        color="fontGrey"
      >
        欢迎来到你的Offer111个人主页！在这里你将完成专属你的学校课程申请，迈出留学新西兰的第一步。Offer拿到后，新西兰政府特许签证顾问将会帮您办理留学签证。
      </Paragraph>
    </Box>
  </Box>
);
