import React, { useState } from 'react';
import { Description } from './components/Description';
import { PaperName } from './components/PaperName';
import { UniName } from './components/UniName';
import { UniLogo } from './components/UniLogo';
import { RouteComponentProps } from 'react-router';
import { ROUTES } from '../../../../../../routes/routesConfig';
import {
  Box,
  COLORS,
  CSSType,
  Responsive,
  SPACE,
} from '../../../../../../styles';
import { observer } from 'mobx-react-lite';
import { IHighSchool } from '../../../../../../store/AdminStore.type';
import { HighSchoolDescription } from './components/HighSchoolDescription';

export const HighSchoolCard: React.FC<
  Pick<
    IHighSchool,
    | 'logoURL'
    | 'name'
    | 'programmeDescription'
    | 'location'
    | 'entryDates'
    | 'tuitionFeeInNZD'
    | 'durationInMonths'
  > & {
    history: RouteComponentProps['history'];
    css?: CSSType;
    ml?: number | string;
  }
> = observer(
  ({
    history,
    logoURL,
    name,
    programmeDescription,
    location,
    entryDates,
    tuitionFeeInNZD,
    durationInMonths,
    css,
    ml,
  }) => {
    const [isHover, setIsHover] = useState(false);

    function onHover() {
      setIsHover(v => (!v ? true : v));
    }
    function onLeave() {
      setIsHover(v => (v ? false : v));
    }

    return (
      <Box
        direction="column"
        justifyContent={'center'}
        alignItems="center"
        bg="white1"
        boxShadow={8}
        p={SPACE.xxSmall}
        minHeight="340px"
        maxHeight="340px"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={() => history.push(ROUTES.SELECTION_INFO)}
        position="relative"
        ml={ml}
        gap={SPACE.xxxSmall}
        maxWidth="280px"
        minWidth="280px"
        css={`
          :hover {
            transform: scale(1.01);
            background: #57606f;
            opacity: 1;
          }
          ${css};
        `}
      >
        {isHover && (
          <Box
            position="absolute"
            width={1}
            height="100%"
            direction="column"
            alignItems="center"
            py={SPACE.xxSmall}
            css={{
              top: 0,
              boxSizing: 'border-box',
            }}
          >
            <UniLogo src={logoURL} width="8rem" />
            <UniName uniNameEN={name} isWhite mt={'10px'} />
            <PaperName
              paperNameEN={programmeDescription}
              isWhite
              css={{
                marginTop: '20px',
              }}
            />
          </Box>
        )}
        {!isHover && <UniLogo src={logoURL} />}
        {!isHover && <UniName uniNameEN={name} />}
        {!isHover && <PaperName paperNameEN={programmeDescription} />}
        {!isHover && (
          <HighSchoolDescription
            location={location}
            entryDates={entryDates}
            tuitionFeeInNZD={tuitionFeeInNZD}
            durationInMonths={durationInMonths}
          />
        )}
      </Box>
    );
  },
);
