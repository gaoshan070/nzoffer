import React from 'react';
import { Box, Text, FONT_SIZE, SPACE, is, Image } from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';
import { useRegStore } from '../../../store/store.context';
import { observer } from 'mobx-react-lite';
import { getDateStr } from '../../StartRegisterScreen/subRoutes/Step5SelectionInfoScreen/components/date.utils';

export const HighSchool: React.FC = observer(() => {
  const { startDate, info } = useRegStore().selected.highschool;
  const { name, programmeDescription, durationInMonths, location } = info;
  if (is.emptyObject(info)) return null;

  return (
    <SectionWithTitle title="目前正在为你申请的学校是:">
      <Box gap="24px" px={'2px'} py={12}>
        <Box direction="column" width={1}>
          <Box width={1}>
            <Image src={info.logoURL} maxHeight={52} />
          </Box>
          <Text fontSize="18px" fontWeight="bold">
            {name}
          </Text>
          <Text mt="12px" fontSize="16px">
            {programmeDescription}
          </Text>
          <Box gap="48px" mt="18px">
            <Text size={FONT_SIZE.body}>
              课程长度：
              <br />
              {`${durationInMonths[0]}月`}
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
