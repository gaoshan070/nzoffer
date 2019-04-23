import React from 'react';
import { Text } from '../../../../../../../styles';
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
      maxWidth="280px"
      color={isWhite ? 'white1' : 'primary'}
      fontWeight="bold"
      fontSize="17px"
      css={{ wordWrap: 'normal', whiteSpace: 'normal' }}
      mt={mt}
      mb="4px"
      textAlign="center"
    >
      {content}
    </Text>
  );
});
