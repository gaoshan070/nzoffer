import React from 'react';
import { FlatButton, IButton } from '../styles';
import { ROUTES } from '../routes/routesConfig';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router';

interface ILinkButton
  extends IButton,
    RouteComponentProps {
  toRoute?: typeof ROUTES[keyof typeof ROUTES];
}

const LinkButton: React.FC<ILinkButton> = ({
  history,
  onClick,
  toRoute,
  children,
  fontSize = 1,
  ...rest
}) => {
  const onClickFunc: React.ReactEventHandler = e => {
    e.preventDefault();

    if (typeof onClick === 'function') {
      onClick(e);
    }

    if (toRoute) {
      history.push(toRoute);
    }
  };

  return (
    <FlatButton
      onClick={onClickFunc}
      bg="white1"
      color="primary"
      fontSize="body"
      border="0px"
      {...rest}
    >
      {children}
    </FlatButton>
  );
};

export default withRouter(LinkButton);
