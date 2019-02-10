import React from 'react';
import { Box, Image, Text, FONT_SIZE, SPACE } from '../../../../../styles';
import writingSVG from '../../../../../assets/writing6Dots.svg';

export const Step4Loading: React.FC<{
  name: string;
}> = ({ name }) => (
  <Box
    height="90vh"
    justifyContent="center"
    alignItems="center"
    direction="column"
  >
    <Text fontSize={FONT_SIZE.bodyHeading} fontWeight="bold" mb={SPACE.small}>
      恭喜{name}同学
    </Text>
    <Text fontSize={FONT_SIZE.bodyHeading} fontWeight="bold" mb={SPACE.small}>
      你的最佳学校匹配正在生成中,
    </Text>
    <Text fontSize={FONT_SIZE.bodyHeading} fontWeight="bold">
      请稍候
    </Text>
    <Image src={writingSVG} width="12rem" />
  </Box>
);
