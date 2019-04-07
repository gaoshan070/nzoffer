import React, { useState } from 'react';
import { UniLogo, PaperName, UniName, Description } from './SchoolCard.others';
import { RouteComponentProps } from 'react-router';
import { ROUTES } from '../../../../../../routes/routesConfig';
import {
  Box,
  COLORS,
  CSSType,
  Responsive,
  SPACE,
} from '../../../../../../styles';

interface ISchoolCard {
  logo: string;
  uniNameCN: string;
  uniNameEN: string;
  paperNameCN: string;
  paperNameEN: string;
  duration: string;
  enroll: string;
  fee: string;
  difficulties: number;
  ielts: string;
  city: string;
  history: RouteComponentProps['history'];
  ml?: Responsive;
  css?: CSSType;
}

export const SchoolCard: React.FC<ISchoolCard> = ({
  history,
  logo,
  uniNameCN,
  uniNameEN,
  paperNameCN,
  paperNameEN,
  duration,
  enroll,
  fee,
  difficulties,
  ielts,
  city,
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
          enroll={enroll}
          fee={fee}
          difficulties={difficulties}
          ielts={ielts}
          city={city}
        />
      )}
    </Box>
  );
};
