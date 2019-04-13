import Alert from 'react-s-alert';
import React from 'react';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import GlobalCSS from '../styles/globalCSS';

export const App: React.FC = ({ children }) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
    }}
  >
    <GlobalCSS />
    {children}
    <Alert
      stack={{ limit: 3, spacing: 20 }}
      position="top-right"
      effect="bouncyflip"
      timeout={6000}
    />
  </div>
);
