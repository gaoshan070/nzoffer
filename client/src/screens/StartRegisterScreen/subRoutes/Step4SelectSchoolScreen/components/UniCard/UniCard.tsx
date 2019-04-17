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

interface ISchoolCard {
  logo: string;
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
  history: RouteComponentProps['history'];
  ml?: Responsive;
  css?: CSSType;
  onClick?: React.EventHandler<any>;
}

export const UniCard: React.FC<ISchoolCard> = observer(
  ({
    history,
    logo,
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
    css,
    ml,
    onClick,
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
        py={SPACE.xxxSmall}
        minHeight="360px"
        maxHeight="360px"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        position="relative"
        ml={ml}
        gap={SPACE.xxxSmall}
        maxWidth="280px"
        minWidth="280px"
        css={`
          :hover {
            transform: scale(1.01);
            background: #40739e;
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
            px={SPACE.xxSmall}
            py={SPACE.medium}
            css={{
              top: 0,
              boxSizing: 'border-box',
            }}
          >
            <UniLogo src={logo} width="8rem" />
            <UniName
              uniNameCN={uniNameCN}
              uniNameEN={uniNameEN}
              isWhite
              mt={'10px'}
            />
            <PaperName
              paperNameEN={paperNameEN}
              paperNameCN={paperNameCN}
              isWhite
              css={{
                marginTop: '20px',
                lineHeight: 1.7,
              }}
            />
          </Box>
        )}
        {!isHover && <UniLogo src={logo} />}
        {!isHover && <UniName uniNameCN={uniNameCN} uniNameEN={uniNameEN} />}
        {!isHover && (
          <PaperName paperNameEN={paperNameEN} paperNameCN={paperNameCN} />
        )}
        {!isHover && (
          <Description
            duration={duration}
            startMonth={startMonth}
            tuitionFeeInNZD={tuitionFeeInNZD}
            difficulty={difficulty}
            requiredIELTSScore={requiredIELTSScore}
            location={location}
          />
        )}
      </Box>
    );
  },
);
