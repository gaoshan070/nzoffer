import React from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../../../../routes/routesConfig';
import {
  Box,
  Button,
  css,
  FONT_SIZE,
  SPACE,
} from '../../../../../styles';

const HomePageButton: React.FC<{
  onClick?: React.ReactEventHandler;
}> = ({ onClick, children }) => (
  <Button
    onClick={onClick}
    width={['9rem', '11rem']}
    fontWeight="regular"
    fontSize={FONT_SIZE.bodyHeading}
    maxHeight="32px"
    minHeight="32px"
    css={css`
      &:hover {
        border: 1px solid #e75b41;
        color: #e75b41;
        background-color: white;
        transform: scale(1.2);
      }
    `}
  >
    {children}
  </Button>
);

export const Buttons = withRouter(({ history }) => (
  <Box
    mb={[SPACE.large, '8rem']}
    justifyContent="around"
    width={['80%', '40%']}
  >
    <HomePageButton
      onClick={() => history.push(ROUTES.CHAT)}
    >
      我是新人
    </HomePageButton>
    <HomePageButton
      onClick={() => history.push(ROUTES.LOGIN)}
    >
      我已注册
    </HomePageButton>
  </Box>
));
