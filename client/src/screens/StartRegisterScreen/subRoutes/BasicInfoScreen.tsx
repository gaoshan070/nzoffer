import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InputsBox } from '../../PortalScreen/components/InputsBox';
import { Box, Input, SPACE } from '../../../styles';
import YesOrNo from '../../../components/YesOrNo/YesOrNo';
import { useField } from '../../../miscellaneous/hooks';
import { ROUTES } from '../../../routes/routesConfig';
import { Screen } from '../../../components/Screen';
import { ProgressBar } from '../components/ProgressBar';

export const BasicInfoScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  const [firstName, onFirstNameChange] = useField('');
  const [lastName, onLastNameChange] = useField('');
  const [birthday, onBirthdayChange] = useField('');

  return (
    <Screen>
      <Box direction="column" pt={SPACE.large}>
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
              onClick={x => () => {
                history.push(ROUTES.CONTACT_METHODS);
              }}
            />
          </Box>
        </InputsBox>
      </Box>
    </Screen>
  );
};
