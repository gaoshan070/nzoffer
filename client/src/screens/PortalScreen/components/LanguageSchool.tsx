import React from 'react';
import {
  Box,
  Text,
  Paragraph,
  Heading,
  Input,
  FONT_SIZE,
  SPACE,
} from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';

const Option: React.FC<{
  name: string;
  label: string;
}> = ({ name, label }) => (
  <Box alignItems="center">
    <Input type="radio" name={name} />
    <Text ml={SPACE.xxSmall} as="label">
      {label}
    </Text>
  </Box>
);

export const LanguageSchool: React.FC = ({}) => (
  <Box direction="column">
    <Paragraph size={FONT_SIZE.small}>
      因为你的语言成绩没有达标，你可以选择先去学校语言中心入读语言课程并熟悉当地的学习生活环境，同时取得以上专业课程的条件录取通知书
    </Paragraph>
    <SectionWithTitle
      title="你的选择是："
      innerBoxStyle={{
        alignItems: 'center',
      }}
    >
      <Option name="programme" label="专业offer+16周语言" />
      <Option name="programme" label="专业offer+32周语言" />
      <Option name="programme" label="专业条件录取通知书" />
    </SectionWithTitle>
  </Box>
);
