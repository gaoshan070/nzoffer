import React from 'react';
import { Box, Text, css as cssFunc, SPACE } from '../../../../../../../styles';
import { CSSType } from '../../../../../../../styles/rebase/components';
export const PaperName: React.FC<{
  paperNameCN?: string;
  paperNameEN: string;
  isWhite?: boolean;
  css?: CSSType;
}> = ({ paperNameCN, paperNameEN, isWhite, css }) => (
  <Box
    direction="column"
    alignItems="center"
    py={SPACE.xxxSmall}
    width={1}
    mb="4px"
    fontSize="17px"
    css={cssFunc`
      border-top: 1px solid
        ${({ theme }) => theme.colors.grey};
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.grey};
        word-break: break-word;
         white-space: normal;
      ${css ? css : ''};
    `}
    color={isWhite ? 'white1' : 'inherit'}
    gap="4px"
  >
    <Text as="span" mb={SPACE.xxxxSmall} textAlign={'center'} width={1}>
      {paperNameEN}
    </Text>
    {paperNameCN && (
      <Text as="span" width={1} textAlign={'center'}>
        {paperNameCN}
      </Text>
    )}
  </Box>
);
