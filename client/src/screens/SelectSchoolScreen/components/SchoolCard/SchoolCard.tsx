import React, { useState } from 'react';
import Box from '../../../../components/Box/Box';
import {
  UniLogo,
  PaperName,
  UniName,
  Description,
} from './SchoolCard.others';
import { RouteComponentProps } from 'react-router';
import { ROUTES } from '../../../../routes/routes';
import { css } from '../../../../styles/styledLib';

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
      flexDirection="column"
      alignItems="center"
      bg="white"
      boxShadow={4}
      p={7}
      minHeight="30rem"
      maxHeight="30rem"
      minWidth="20rem"
      maxWidth="20rem"
      height="max-content"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() =>
        history.push(ROUTES.SELECTION_INFO)
      }
      position="relative"
      css={css`
        :hover {
          transform: scale(1.1);
        }
      `}
    >
      {isHover && (
        <Box
          position="absolute"
          width={1}
          height="100%"
          bg="grey1"
          opacity={0.9}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          py={5}
          css={{
            top: 0,
            boxSizing: 'border-box',
          }}
        >
          <UniLogo src={logo} width="12rem" />
          <UniName
            uniNameCN={uniNameCN}
            uniNameEN={uniNameEN}
            isWhite
          />
          <PaperName
            paperNameEN={paperNameEN}
            paperNameCN={paperNameCN}
            isWhite
          />
        </Box>
      )}
      <UniLogo src={logo} />
      <UniName
        uniNameCN={uniNameCN}
        uniNameEN={uniNameEN}
      />
      <PaperName
        paperNameEN={paperNameEN}
        paperNameCN={paperNameCN}
      />
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
