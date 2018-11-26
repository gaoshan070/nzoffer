import React from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { Text, Link } from 'rebass';
import { ROUTES } from '../routes/routes';

interface ITextLink extends RouteComponentProps {
  children: string;
  toRoute: ROUTES;
}

const TextLink: React.FC<ITextLink> = ({
  history,
  toRoute,
  children,
}) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    history.push(toRoute);
  };

  return (
    <Text color="primary">
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
