import React from 'react';
import { Row } from './Row';
import { styled } from '../../../../../../rebase/styles';
import { Box } from '../../../../../../rebase/components';

export const Statistic = () => (
  <Box direction="column" width={['20rem', '32rem']}>
    <Row
      isHeader
      text={['地区', '浏览数', '注册数']}
    />
    <Row text={['北京市', '1232', '232']} />
    <Row text={['北京市', '1232', '232']} />
    <Row text={['北京市', '1232', '232']} />
  </Box>
);
