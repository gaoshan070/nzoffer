import React, { useState } from 'react';
import { Box, Text, is } from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';
import {
  RadioButton,
  RadioGroup,
} from '../../../components/RadioGroup/RadioGroup';
import { observer } from 'mobx-react-lite';
import { useRegStore } from '../../../store/store.context';

export const DIY_IELTS_WORDS = '我选择自行报考雅思';

const LanguageRadioButton: React.FC<{
  nameEN: string;
  nameCN: string;
}> = observer(({ nameEN = '', nameCN = '' }) => (
  <Text width={1} direction="column">
    <Text width={1}>{nameEN}</Text>
    <Text mt="12px">{nameCN}</Text>
  </Text>
));

export const LanguageSchool: React.FC<{
  languageSelect: string;
  setLanguageSelect: (v: string) => void;
}> = observer(({ languageSelect, setLanguageSelect }) => {
  const { selected, languageProgrammePool, isHighSchoolCase } = useRegStore();
  const { languageProgramme } = languageProgrammePool;
  const { info } = selected.languageProgramme;

  // if no language, then we don't display this
  if (is.emptyObject(languageProgrammePool) || isHighSchoolCase()) {
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
          selectedValue={languageSelect}
          onChange={v => {
            setLanguageSelect((v.currentTarget as HTMLInputElement).value);
          }}
          alignItems="center"
          ml="66px"
          direction="column"
          gap="40px"
          width={1}
          py="20px"
        >
          <RadioButton
            labelStyle={{ fontSize: '16px', minWidth: '500px' }}
            value={languageProgramme._id}
            label={
              <LanguageRadioButton
                nameCN={languageProgramme.nameCN}
                nameEN={languageProgramme.nameEN}
              />
            }
          />
          <RadioButton
            labelStyle={{ fontSize: '16px', minWidth: '200px' }}
            value={DIY_IELTS_WORDS}
            label={DIY_IELTS_WORDS}
          />
        </RadioGroup>
      </SectionWithTitle>
    </Box>
  );
});
