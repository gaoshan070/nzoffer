import React, { MouseEvent } from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Text from '../components/Text/Text';
import Button from '../components/Button';
import { IROUTES } from '../routes/routes';
import { css } from '../styles/styledLib';
import { ThemeInterface } from '../styles/theme';

interface ITextLink extends RouteComponentProps {
  children: string;
  toRoute: IROUTES[keyof IROUTES];
  fontSize?: number;
}

const TextLink: React.FC<ITextLink> = ({
  history,
  toRoute,
  fontSize,
  children,
}) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    history.push(toRoute);
  };

  return (
    <Text color="primary" fontSize={fontSize}>
      <Button
        onClick={onClick}
        color="primary"
        css={css`
          text-decoration: 'none';
          &:hover {
            cursor: 'pointer';
            color: '#7ACDE3';
          }
        `}
      >
        {children}
      </Button>
    </Text>
  );
};

export default withRouter(TextLink);
