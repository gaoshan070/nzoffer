import React, { useState } from 'react';
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
import {
  RadioButton,
  RadioGroup,
} from '../../../components/RadioGroup/RadioGroup';
import { InputsBox } from './InputsBox';

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

export const LanguageSchool: React.FC = ({}) => {
  const [selected, setSelected] = useState('专业offer+16周语言');

  return (
    <Box direction="column">
      {/*<Paragraph size={FONT_SIZE.body}>*/}
      {/*  因为你的语言成绩没有达到学校入学要求，你可以选择先去本学校语言中心入读语言课程并熟悉当地的学习生活环境，同时取得以上专业课程的条件录取通知书。*/}
      {/*</Paragraph>*/}
      <SectionWithTitle
        title="你的语言课选择是："
        innerBoxStyle={{
          alignItems: 'center',
        }}
      >
        <RadioGroup
          name="gender"
          selectedValue={selected}
          // @ts-ignore
          onChange={v => setSelected(v)}
          alignItems="center"
          ml={'66px'}
          direction="column"
          gap="40px"
          width={1}
          py={'20px'}
        >
          <RadioButton
            labelStyle={{ fontSize: '16px', minWidth: '500px' }}
            value="专业offer+16周语言"
            label={
              <Text width={1} direction="column">
                <Text width={1}>
                  Certificate of Attainment in English Language （CAAE)
                </Text>
                <Text mt={'12px'}>学术英语课程学历证书 6级+7级+8级</Text>
              </Text>
            }
          />
          <RadioButton
            labelStyle={{ fontSize: '16px' }}
            value="我选择自行报考雅思"
            label="我选择自行报考雅思"
          />
        </RadioGroup>
      </SectionWithTitle>
    </Box>
  );
};
