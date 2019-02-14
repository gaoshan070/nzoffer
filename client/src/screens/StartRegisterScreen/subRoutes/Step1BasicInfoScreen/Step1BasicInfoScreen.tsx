import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { Screen } from '../../../../components/Screen';
import { BottomNavBar } from '../components/BottomNavBar';
import { Step1Inputs } from './Step1Inputs';
import { StoreContext } from '../../../../store/store.context';
import { validDateStr } from '../../../../shared/dateCheck';
import { isNameValid } from '../../../../shared/nameCheck';
import Alert from 'react-s-alert';
import { observer } from 'mobx-react-lite';

export const Step1BasicInfoScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    const { regStore } = useContext(StoreContext);

    const isStep1Ready = () =>
      isNameValid(regStore.firstName) &&
      isNameValid(regStore.lastName) &&
      validDateStr(regStore.birthday) &&
      regStore.gender !== '';

    return (
      <Screen>
        <Box direction="column" pt={SPACE.large} alignItems="center">
          <Step1Inputs hideOpenButton />
          <BottomNavBar
            history={history}
            continueOnClick={() => {
              if (isStep1Ready()) {
                history.push(ROUTES.CONTACT_METHODS);
              } else {
                Alert.warning('还有项目没正确填写，加油哦亲');
              }
            }}
          />
        </Box>
      </Screen>
    );
  },
);
