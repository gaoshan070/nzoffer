import Alert from 'react-s-alert';
import React from 'react';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import GlobalCSS, { BodyWithOverflow } from '../styles/globalCSS';
import { withRouter } from 'react-router';

// @ts-ignore
export const App: React.FC = withRouter(({ children, history }) => {
  const isAtHomePage = history.location.pathname === '/';

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      {isAtHomePage ? <BodyWithOverflow /> : <GlobalCSS />}
      {children}
      <Alert
        stack={{ limit: 3 }}
        offset={34}
        position="top-right"
        effect="bouncyflip"
        timeout={6000}
      />
    </div>
  );
});
