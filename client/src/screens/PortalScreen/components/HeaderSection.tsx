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
    px={SPACE.xxSmall}
    direction="column"
    alignItems="center"
    justifyContent="between"
  >
    <Box />
    <Box
      bg="primary"
      direction="column"
      opacity={0.85}
      px={SPACE.xSmall}
      py={SPACE.xSmall}
      width={['95%', '70%', '40%']}
      alignItems="center"
      height="44%"
      gap="26px"
    >
      <Text
        size={FONT_SIZE.sectionHeading}
        color="white"
        css={{ lineHeight: 0 }}
      >
        马泽民<span style={{ fontSize: '16px' }}> 个人主页</span>
      </Text>
      <Text
        zIndex={9}
        color="white"
        fontSize="12px"
        css={{ lineHeight: 1.6 }}
        textAlign="center"
      >
        欢迎来到你的Offer111个人主页！在这里你将完成专属你的学校课程申请，迈出留学新西兰的第一步。Offer拿到后，新西兰政府特许签证顾问将会帮您办理留学签证。
      </Text>
    </Box>
  </Box>
);
