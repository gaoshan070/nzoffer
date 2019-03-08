import React from 'react';
import { FlatButton, IButton, FONT_SIZE } from '../styles';
import { ROUTES } from '../routes/routesConfig';
import { RouteComponentProps, withRouter } from 'react-router';

interface ILinkButton extends IButton, RouteComponentProps {
  toRoute?: typeof ROUTES[keyof typeof ROUTES];
  isReplace?: boolean;
}

const LinkButton: React.FC<ILinkButton> = ({
  history,
  onClick,
  toRoute,
  children,
  fontSize = 1,
  isReplace,
  ...rest
}) => {
  const onClickFunc: React.ReactEventHandler = e => {
    e.preventDefault();

    if (typeof onClick === 'function') {
      onClick(e);
    }

    if (toRoute) {
      if (isReplace) {
        history.replace(toRoute);
      } else {
        history.push(toRoute);
      }
    }
  };

  return (
    <FlatButton
      onClick={onClickFunc}
      bg="white1"
      color="primary"
      fontSize={FONT_SIZE.body}
      border="0px"
      noDefaultHoverCSS
      {...rest}
    >
      {children}
    </FlatButton>
  );
};

export default withRouter(LinkButton);
