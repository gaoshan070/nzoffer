import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InputsBox } from '../../../PortalScreen/components/InputsBox';
import { Box, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import YesOrNo from '../../../../components/YesOrNo/YesOrNo';
import { useField } from '../../../../miscellaneous/hooks';
import { ROUTES } from '../../../../routes/routesConfig';
import { Screen } from '../../../../components/Screen';
import { ProgressBar } from '../../components/ProgressBar';
import { BottomNavBar } from '../components/BottomNavBar';

export const Step1BasicInfoScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  const [firstName, onFirstNameChange] = useField('');
  const [lastName, onLastNameChange] = useField('');
  const [birthday, onBirthdayChange] = useField('');

  return (
    <Screen>
      <Box
        direction="column"
        pt={SPACE.large}
        alignItems="center"
      >
        <ProgressBar progress={0.4} />
        <InputsBox label="基本信息" shouldOpen>
          <Input
            type="text"
            placeholder="请输入姓"
            value={firstName}
            onChange={onFirstNameChange}
          />
          <Input
            type="text"
            placeholder="请输入名"
            value={lastName}
            onChange={onLastNameChange}
          />
          <Input
            type="text"
            placeholder="请输入生日"
            value={birthday}
            onChange={onBirthdayChange}
          />
          <Box alignSelf="end">
            <YesOrNo
              yesText="男"
              noText="女"
              value
              onClick={x => () => 0}
            />
          </Box>
        </InputsBox>
        <BottomNavBar
          history={history}
          continueOnClick={() => {
            history.push(ROUTES.CONTACT_METHODS);
          }}
        />
      </Box>
    </Screen>
  );
};
