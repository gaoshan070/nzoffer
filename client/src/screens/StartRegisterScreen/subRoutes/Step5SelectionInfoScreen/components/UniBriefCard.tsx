import React from 'react';
import { Box } from '../../../../../styles';
import { UniName } from '../../Step4SelectSchoolScreen/components/UniCard/components/UniName';
import { PaperName } from '../../Step4SelectSchoolScreen/components/UniCard/components/PaperName';
import { Description } from '../../Step4SelectSchoolScreen/components/UniCard/components/Description';
import { observer } from 'mobx-react-lite';

export const UniBriefCard: React.FC<{
  uniNameCN: string;
  uniNameEN: string;
  paperNameCN: string;
  paperNameEN: string;
  duration: string;
  startMonth: number[];
  tuitionFeeInNZD: number;
  difficulty: number;
  requiredIELTSScore: string;
  location: string;
}> = observer(
  ({
    uniNameCN,
    uniNameEN,
    paperNameCN,
    paperNameEN,
    duration,
    startMonth,
    tuitionFeeInNZD,
    difficulty,
    requiredIELTSScore,
    location,
  }) => (
    <Box>
      <Box direction="column" width={0.5}>
        <UniName uniNameCN={uniNameCN} uniNameEN={uniNameEN} />
        <PaperName
          paperNameCN={paperNameCN}
          paperNameEN={paperNameEN}
          css={{
            marginTop: '16px',
          }}
        />
      </Box>
      <Box direction="column" width={0.5}>
        <Description
          duration={duration}
          startMonth={startMonth}
          tuitionFeeInNZD={tuitionFeeInNZD}
          difficulty={difficulty}
          requiredIELTSScore={requiredIELTSScore}
          location={location}
        />
      </Box>
    </Box>
  ),
);
