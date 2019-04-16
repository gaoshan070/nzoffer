import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, is, SPACE, Text } from '../../../styles';
import { getDateStr } from '../../StartRegisterScreen/subRoutes/Step5SelectionInfoScreen/components/date.utils';
import { SectionWithTitle } from './SectionWithTitle';
import { useRegStore } from '../../../store/store.context';

const Item: React.FC<{ firstLine: string; secondLine: string }> = ({
  firstLine,
  secondLine,
}) => (
  <Box direction="column" gap="16px">
    <Text fontSize="18px">{firstLine}</Text>
    <Text>{secondLine}</Text>
  </Box>
);

export const InfoConfirm: React.FC = observer(() => {
  const { highschool, programme, languageProgramme } = useRegStore().selected;

  let highSchoolOrProgramme = null;
  if (!is.emptyObject(highschool.info)) {
    highSchoolOrProgramme = (
      <Item
        firstLine={highschool.info.name}
        secondLine={highschool.info.programmeDescription}
      />
    );
  } else if (!is.emptyObject(programme.info)) {
    highSchoolOrProgramme = (
      <Item
        firstLine={programme.info.nameEN}
        secondLine={programme.info.nameCN}
      />
    );
  }

  return (
    <SectionWithTitle title={`Well done! 我们即将为你提交以下课程申请：`}>
      <Box
        width={1}
        bg="white"
        px={'78px'}
        py={SPACE.small}
        direction="column"
        gap={SPACE.xSmall}
        fontSize="16px"
      >
        {highSchoolOrProgramme}

        {is.emptyObject(languageProgramme.info) ? null : (
          <Item
            firstLine={languageProgramme.info.nameEN}
            secondLine={languageProgramme.info.nameCN}
          />
        )}
      </Box>
    </SectionWithTitle>
  );
});
