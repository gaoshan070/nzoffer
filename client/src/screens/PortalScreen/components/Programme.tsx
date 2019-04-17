import React from 'react';
import { Box, Text, Image, is, FONT_SIZE, SPACE } from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';
import testLogo from '../../../assets/testlogo.svg';
import { observer } from 'mobx-react-lite';
import { useRegStore } from '../../../store/store.context';
import { getDateStr } from '../../StartRegisterScreen/subRoutes/Step5SelectionInfoScreen/components/date.utils';

export const Programme: React.FC = observer(() => {
  const { startDate, info } = useRegStore().selected.programme;
  const { nameCN, nameEN, university, duration, location } = info;
  if (is.emptyObject(info)) return null;

  return (
    <SectionWithTitle title="目前正在为你申请的专业课程是:">
      <Box gap="24px" px="2px" py={12}>
        <Image src={university.logoURL} width={80} height={57} />
        <Box direction="column">
          <Text fontSize="24px">{university.nameCN}</Text>
          <Text mt="12px" fontSize="16px">
            {nameEN} <br />
            <Text mt={12}>{nameCN}</Text>
          </Text>
          <Box gap="48px" mt="18px" color="#34495e">
            <Text size={FONT_SIZE.body}>
              课程长度：
              <br />
              {duration}月
            </Text>
            <Text size={FONT_SIZE.body}>
              开学时间：
              <br />
              {getDateStr(startDate)}
            </Text>
            <Text size={FONT_SIZE.body}>
              城市：
              <br />
              {location}
            </Text>
          </Box>
        </Box>
      </Box>
    </SectionWithTitle>
  );
});
