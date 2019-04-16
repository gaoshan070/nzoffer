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
import { observer } from 'mobx-react-lite';
import { useRegStore } from '../../../store/store.context';

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

export const LanguageSchool: React.FC = observer(({}) => {
  const { info } = useRegStore().selected.languageProgramme;
  const [selected, setSelected] = useState('专业offer+16周语言');

  // if no language, then we don't display this
  if (!Object.keys(info).length) {
    return null;
  }

  return (
    <Box direction="column">
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
            value={info.nameCN}
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
});
