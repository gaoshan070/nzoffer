import React from 'react';
import { Text, FONT_SIZE } from '../../../../../../../styles';
import { observer } from 'mobx-react-lite';

export const UniName: React.FC<{
  uniNameEN: string;
  uniNameCN?: string;
  isWhite?: boolean;
  mt?: number | string;
}> = observer(({ isWhite, uniNameCN, uniNameEN, mt }) => {
  let content: string | JSX.Element = uniNameEN;
  if (uniNameCN) {
    content = <>{uniNameCN}</>;
  }

  return (
    <Text
      color={isWhite ? 'white1' : 'primary'}
      fontWeight="bold"
      fontSize="17px"
      css={{ wordWrap: 'normal' }}
      mt={mt}
      mb="4px"
      textAlign="center"
    >
      {content}
    </Text>
  );
});
