import React from 'react';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import Box from '../../../components/Box/Box';
import Button from '../../Button/Button';
import backButton from '../../../assets/arrowBack.svg';
import { History } from 'history';

const onClickHandler = (history: History) => () =>
  history.goBack();

const GoBackButton: React.FC<RouteComponentProps> = ({
  history,
}) => (
  <Button
    bg="primary"
    onClick={onClickHandler(history)}
  >
    <Box alignItems="center">
      <img src={backButton} />
      返回
    </Box>
  </Button>
);

export default withRouter(GoBackButton);
