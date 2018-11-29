import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { Text, Link } from 'rebass';
import { IROUTES } from '../routes/routes';

interface ITextLink extends RouteComponentProps {
  children: string;
  toRoute: IROUTES[keyof IROUTES];
  fontSize?: number | number[];
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
      <Link
        onClick={onClick}
        color="primary"
        css={{
          textDecoration: 'none',
          ':hover': {
            cursor: 'pointer',
            color: '#7ACDE3',
          },
        }}
      >
        {children}
      </Link>
    </Text>
  );
};

export default withRouter(TextLink);
