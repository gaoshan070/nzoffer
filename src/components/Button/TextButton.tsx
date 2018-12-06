import React, { MouseEvent } from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import {
  BaseButton,
  basePropsWithoutColor,
  IButton,
} from './Button';
import { IROUTES } from '../../routes/routes';
import { css } from '../../styles/styledLib';
import { ThemeInterface } from '../../styles/theme';

interface ITextButton
  extends RouteComponentProps,
    IButton<ThemeInterface> {
  toRoute?: IROUTES[keyof IROUTES];
  fontSize?: number;
}

const TextButton: React.FC<ITextButton> = ({
  history,
  text,
  onClick,
  toRoute,
  fontSize = 1,
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
    <BaseButton
      {...basePropsWithoutColor}
      onClick={onClickFunc}
      bg="white"
      color="primary"
      fontSize={fontSize}
      border="0px"
      css={css`
        text-decoration: 'none';
        &:hover {
          cursor: 'pointer';
          color: '#7ACDE3';
        }
      `}
    >
      {text}
    </BaseButton>
  );
};

export default withRouter(TextButton);
