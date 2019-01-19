import React from 'react';
import {
  css,
  styled,
} from '../../../../../../rebase/styles';

const Box = styled.div<{
  isHeader?: boolean;
}>`
  display: flex;
  text-align: center;
  ${({ isHeader, theme }) =>
    isHeader && `color: ${theme.colors.primary}`};
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  font-size: 13px;
`;

const Cell = styled.div<{
  isFirst?: boolean;
}>`
  background-color: #f6f6f9;
  padding: 0.2rem;

  ${({ isFirst, theme }) =>
    isFirst
      ? css`
          border-left: 0.23rem solid
            ${theme.colors.primary};
          width: 50%;
        `
      : css`
          margin-left: 0.15rem;
          width: 25%;
        `};
`;

export const Row: React.FC<{
  text: string[];
  isHeader?: boolean;
}> = ({ text, isHeader }) => (
  <Box isHeader={isHeader}>
    <Cell isFirst>{text[0]}</Cell>
    <Cell>{text[1]}</Cell>
    <Cell>{text[2]}</Cell>
  </Box>
);
