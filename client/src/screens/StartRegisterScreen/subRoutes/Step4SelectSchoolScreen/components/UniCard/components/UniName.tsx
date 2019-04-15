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
    content = (
      <>
        {uniNameEN}
        <br />
        {uniNameCN}
      </>
    );
  }

  return (
    <Text
      color={isWhite ? 'white1' : 'primary'}
      fontWeight="bold"
      fontSize={FONT_SIZE.body}
      css={{ wordWrap: 'normal' }}
      mt={mt}
      textAlign="center"
    >
      {content}
    </Text>
  );
});
