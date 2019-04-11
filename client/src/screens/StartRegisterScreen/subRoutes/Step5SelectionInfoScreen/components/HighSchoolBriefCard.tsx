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
      <Box>
        <Box direction="column" width={0.4}>
          <UniName uniNameEN={uniNameEN} />
          <PaperName paperNameEN={paperNameEN} />
        </Box>
        <Box direction="column" width={0.6}>
          <HighSchoolDescription
            location={location}
            entryDates={entryDates}
            tuitionFeeInNZD={tuitionFeeInNZD}
            durationInMonths={durationInMonths}
          />
        </Box>
      </Box>
    );
  },
);
