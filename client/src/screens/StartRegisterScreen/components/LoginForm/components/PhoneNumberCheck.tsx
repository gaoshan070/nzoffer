import React from 'react';
import { useField } from '../../../../../miscellaneous/hooks';
import { Box, Button } from '../../../../../styles';
import { Input } from '../../../../../components/Input';

const PhoneNumberCheck: React.FC = () => {
  const [userInput, onChange] = useField('');

  return (
    <Box alignItems="stretch">
      <Input
        type="text"
        placeholder="请输入短信验证码"
        value={userInput}
        onChange={onChange}
        borderRadius="4px 0 0 4px"
      />
      <Button
        borderRadius="0 4px 4px 0"
        minHeight="initial"
        maxHeight="initial"
      >
        获取短信验证码
      </Button>
    </Box>
  );
};

export default PhoneNumberCheck;
