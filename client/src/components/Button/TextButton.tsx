import React, { MouseEvent } from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { Button, IButton } from './Button';
import { ROUTES } from '../../routes/routesConfig';
import { ThemeInterface } from '../../styles/theme';

interface ITextButton
  extends RouteComponentProps,
    IButton<ThemeInterface> {
  toRoute?: typeof ROUTES[keyof typeof ROUTES];
  fontSize?: number;
}

const TextButton: React.FC<ITextButton> = ({
  history,
  text,
  onClick,
  toRoute,
  fontSize = 1,
  ...rest
}) => {
  const onClickFunc = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (typeof onClick === 'function') {
      onClick(e);
    }

    if (toRoute) {
      history.push(toRoute);
    }
  };

  return (
    <Button
      onClick={onClickFunc}
      bg="white"
      color="primary"
      fontSize={fontSize}
      border="0px"
      text={text}
      {...rest}
    />
  );
};

export default withRouter(TextButton);
