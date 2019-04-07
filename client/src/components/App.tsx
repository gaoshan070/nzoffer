import Alert from 'react-s-alert';
import React from 'react';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';

export const App: React.FC = ({ children }) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
    }}
  >
    {children}
    <Alert
      stack={{ limit: 3, spacing: 20 }}
      position="top-right"
      effect="bouncyflip"
      timeout={3000}
    />
  </div>
);
