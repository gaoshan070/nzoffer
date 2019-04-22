import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Image, is, SPACE, Text } from '../../../styles';
import { SectionWithTitle } from './SectionWithTitle';
import { useRegStore } from '../../../store/store.context';
import starSVG from '../../../assets/star.svg';

const STAR_HEIGHT_WIDTH = '24px';

const Star: React.FC = () => (
  <Image
    src={starSVG}
    minHeight={STAR_HEIGHT_WIDTH}
    maxHeight={STAR_HEIGHT_WIDTH}
    minWidth={STAR_HEIGHT_WIDTH}
    maxWidth={STAR_HEIGHT_WIDTH}
  />
);

const Item: React.FC<{ firstLine: string; secondLine: string }> = ({
  firstLine,
  secondLine,
}) => (
  <Box gap="12px">
    <Star />
    <Box direction="column" gap="16px">
      <Text fontSize="18px">{firstLine}</Text>
      <Text>{secondLine}</Text>
    </Box>
  </Box>
);

export const InfoConfirm: React.FC<{ isLanguageSelected: boolean }> = observer(
  ({ isLanguageSelected }) => {
    const { selected, languageProgrammePool } = useRegStore();
    const { highschool, programme } = selected;

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
      <SectionWithTitle
        title={`Well done! 我们即将为你提交以下课程申请：`}
        mt="12px"
      >
        <Box
          width={1}
          ml={[0, '30px']}
          py={SPACE.xxSmall}
          direction="column"
          gap={SPACE.xSmall}
          fontSize="16px"
        >
          {highSchoolOrProgramme}

          {isLanguageSelected ? (
            <Item
              firstLine={languageProgrammePool.languageProgramme.nameEN}
              secondLine={languageProgrammePool.languageProgramme.nameCN}
            />
          ) : null}
        </Box>
      </SectionWithTitle>
    );
  },
);
