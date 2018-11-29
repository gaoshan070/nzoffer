import React, { useState } from 'react';
import { Text, Flex } from 'rebass';
import { FlexCard } from '../../../../components/buildingBlocks';
import { ROUTES } from '../../../../routes/routes';
import HeaderLine from './components/HeaderLine';
import Input, {
  onChangeCallBackType,
} from './components/Input';
import ValidationInput from './components/ValidationInput/ValidationInput';

const useInputField = (): [
  string,
  onChangeCallBackType
] => {
  const [value, setValue] = useState('');

  const onChange = (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  return [value, onChange];
};

const LoginForm: React.FC = () => {
  const [mobilePhone, onChange] = useInputField();

  return (
    <FlexCard
      flexDirection="column"
      width={[1, '500px']}
      bg="white1"
      mx={4}
      px={[6, 7]}
      py={[7, 8]}
      height={400}
    >
      <HeaderLine />
      <FlexCard
        flexDirection="column"
        py={5}
        css={{
          flexGrow: 1,
        }}
        justifyContent="space-around"
      >
        <Input
          type="tel"
          placeholder="请输入手机号"
          value={mobilePhone}
          onChange={onChange}
        />
        <ValidationInput />
      </FlexCard>
    </FlexCard>
  );
};

export default LoginForm;
