import React from 'react';
import { Box, Image, Text, FONT_SIZE, SPACE } from '../../../../../styles';
import writingSVG from '../../../../../assets/writing6Dots.svg';
import loading from '../../../../../assets/Loading-animation.gif';

export const Step4Loading: React.FC<{
  name: string;
}> = ({ name }) => (
  <Box
    height="50vh"
    justifyContent="center"
    alignItems="center"
    direction="column"
  >
    <Text
      fontSize={FONT_SIZE.bodyHeading}
      fontWeight="bold"
      color={'primary'}
      mb={'20px'}
    >
      恭喜 {name} 同学
    </Text>
    <Text fontSize={FONT_SIZE.bodyHeading} fontWeight="bold" mb={SPACE.xSmall}>
      你的最佳学校匹配正在生成中, 请稍候
    </Text>
    <Box>
      <Image src={loading} width="35px" />
      <Image src={loading} width="35px" />
    </Box>
  </Box>
);
