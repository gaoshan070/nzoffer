import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import backButton from '../../../assets/arrowBack.svg';
import { History } from 'history';
import { Box, Button } from '../../../styles';

const onClickHandler = (history: History) => () => history.goBack();

const GoBackButton: React.FC<RouteComponentProps> = ({ history }) => (
  <Button bg="white1" onClick={onClickHandler(history)}>
    <Box alignItems="center" color="primary">
      <img src={backButton} />
      返回
    </Box>
  </Button>
);

export default withRouter(GoBackButton);
