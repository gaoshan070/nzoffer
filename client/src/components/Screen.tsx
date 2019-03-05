import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Box, css, CSSType, SPACE } from '../styles';
import Header from './Header/Header';

const getBoxStyle = (merge?: CSSType) => css`
  display: flex;
  justify-content: center;
  ${merge ? merge : ''};
`;

interface IScreen {
  css?: CSSType;
  title?: string;
}

export const Screen: React.FC<IScreen> = ({ title = '', children, css }) => (
  <Box width={1} direction="column" alignItems="center">
    <Header title={title} />
    <Box pt={SPACE.medium} width={1} css={getBoxStyle(css)}>
      {children}
    </Box>
  </Box>
);

export default Screen;
