import React from 'react';
import { observer } from 'mobx-react-lite';
import { AdminScreen } from '../components/AdminScreen';
import { RouteComponentProps } from 'react-router-dom';
import { Button, SPACE } from '../../../../styles';

const ActionButton: React.FC<{ onClick?: React.ReactEventHandler }> = ({
  children,
  onClick,
}) => {
  return (
    <Button
      maxHeight="32px"
      minHeight="32px"
      onClick={onClick}
      css={{
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      {children}
    </Button>
  );
};

export const AdminUniversitiesScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    return (
      <AdminScreen
        title="大学列表"
        history={history}
        actionButtons={<ActionButton>新建</ActionButton>}
      >
        <div>AdminUniversitiesScreen</div>
      </AdminScreen>
    );
  },
);
