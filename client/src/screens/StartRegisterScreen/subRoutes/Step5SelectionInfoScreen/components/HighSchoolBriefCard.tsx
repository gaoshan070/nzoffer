import React from 'react';
import { Box } from '../../../../../styles';
import { UniName } from '../../Step4SelectSchoolScreen/components/UniCard/components/UniName';
import { PaperName } from '../../Step4SelectSchoolScreen/components/UniCard/components/PaperName';
import { HighSchoolDescription } from '../../Step4SelectSchoolScreen/components/UniCard/components/HighSchoolDescription';
import { observer } from 'mobx-react-lite';

export const HighSchoolBriefCard: React.FC<{
  uniNameEN: string;
  paperNameEN: string;
  location: string;
  entryDates: string[];
  tuitionFeeInNZD: number;
  durationInMonths: number[];
}> = observer(
  ({
    uniNameEN,
    paperNameEN,
    location,
    entryDates,
    tuitionFeeInNZD,
    durationInMonths,
  }) => {
    return (
      <Box alignItems="end">
        <Box direction="column" width={0.35} gap="8px">
          <UniName uniNameEN={uniNameEN || 'ACG'} />
          <PaperName paperNameEN={paperNameEN || 'name'} />
        </Box>
        <Box direction="column" width={0.65} ml="-16px">
          <HighSchoolDescription
            location={location || 'Auckland'}
            entryDates={entryDates || ['1/1']}
            tuitionFeeInNZD={tuitionFeeInNZD || 123}
            durationInMonths={durationInMonths || [1, 2]}
          />
        </Box>
      </Box>
    );
  },
);
