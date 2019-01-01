import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box } from '../../../../../components/Box/Box';
import { Button } from '../../../../../components/Button/Button';
import { IEventHandler } from '../../../../../components/Box/Box.type';
import { ROUTES } from '../../../../../routes/routes';

const HomePageButton: React.FC<{
  onClick?: IEventHandler;
}> = ({ onClick, children }) => (
  <Button
    onClick={onClick}
    width={['9rem', '12rem']}
    fontWeight={300}
    text={children}
  />
);

export const Buttons = withRouter(({ history }) => (
  <Box
    mb={[9, 3]}
    justifyContent="space-around"
    width={['85%', '50%']}
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
