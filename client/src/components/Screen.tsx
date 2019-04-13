import React from 'react';
import { Box, css, CSSType, SPACE, IBox } from '../styles';
import Header from './Header/Header';

const getBoxStyle = (merge?: CSSType) => css`
  display: flex;
  justify-content: center;
  ${merge ? merge : ''};
`;

interface IScreen {
  css?: CSSType;
  title?: string;
  headerBox?: () => React.ReactNode;
}

export const Screen: React.FC<IScreen & IBox> = ({
  title = '',
  headerBox,
  children,
  css,
  ...rest
}) => (
  <Box width={1} direction="column" alignItems="center" {...rest}>
    <Header title={title} headerBox={headerBox} />
    <Box pt={SPACE.medium} width={1} css={getBoxStyle(css)}>
      {children}
    </Box>
  </Box>
);

export default Screen;
