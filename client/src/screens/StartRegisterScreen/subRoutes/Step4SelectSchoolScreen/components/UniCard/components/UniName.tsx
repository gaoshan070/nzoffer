import React from 'react';
import { Text, FONT_SIZE } from '../../../../../../../styles';
export const UniName: React.FC<{
  uniNameCN: string;
  uniNameEN: string;
  isWhite?: boolean;
  mt?: number | string;
}> = ({ isWhite, uniNameCN, uniNameEN, mt }) => (
  <Text
    color={isWhite ? 'white1' : 'primary'}
    fontWeight="bold"
    fontSize={FONT_SIZE.body}
    css={{ wordWrap: 'normal' }}
    mt={mt}
    textAlign="center"
  >
    {uniNameEN}
    <br />
    {uniNameCN}
  </Text>
);
