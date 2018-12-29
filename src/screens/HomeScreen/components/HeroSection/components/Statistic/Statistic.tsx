import React from 'react';
import { styled } from '../../../../../../styles/styledLib';
import { Row } from './Row';
import { Box } from '../../../../../../components/Box/Box';

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
`;

export const Statistic = () => (
  <Box
    flexDirection="column"
    width={['20rem', '32rem']}
  >
    <Row
      isHeader
      text={['地区', '浏览数', '注册数']}
    />
    <Row text={['北京市', '1232', '232']} />
    <Row text={['北京市', '1232', '232']} />
    <Row text={['北京市', '1232', '232']} />
  </Box>
);
