import React, { useState } from 'react';
import { UniLogo, PaperName, UniName, Description } from './SchoolCard.others';
import { RouteComponentProps } from 'react-router';
import { ROUTES } from '../../../../../../routes/routesConfig';
import { Box, CSSType, Responsive, SPACE } from '../../../../../../styles';

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
      p={SPACE.xSmall}
      minHeight="420px"
      maxHeight="420px"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => history.push(ROUTES.SELECTION_INFO)}
      position="relative"
      ml={ml}
      gap={SPACE.xxSmall}
      css={`
        :hover {
          transform: scale(1.1);
        }
        ${css};
      `}
    >
      {isHover && (
        <Box
          position="absolute"
          width={1}
          height="100%"
          bg="grey1"
          opacity={0.9}
          direction="column"
          alignItems="center"
          justifyContent="around"
          py={SPACE.medium}
          css={{
            top: 0,
            boxSizing: 'border-box',
          }}
        >
          <UniLogo src={logo} width="12rem" />
          <UniName uniNameCN={uniNameCN} uniNameEN={uniNameEN} isWhite />
          <PaperName
            paperNameEN={paperNameEN}
            paperNameCN={paperNameCN}
            isWhite
          />
        </Box>
      )}
      <UniLogo src={logo} />
      <UniName uniNameCN={uniNameCN} uniNameEN={uniNameEN} />
      <PaperName paperNameEN={paperNameEN} paperNameCN={paperNameCN} />
      <Description
        duration={duration}
        enroll={enroll}
        fee={fee}
        difficulties={difficulties}
        ielts={ielts}
        city={city}
      />
    </Box>
  );
};
