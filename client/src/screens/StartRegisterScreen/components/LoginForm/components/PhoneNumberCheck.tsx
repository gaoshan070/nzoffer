import React from 'react';
import { useField } from '../../../../../miscellaneous/hooks';
import { Box, Input } from '../../../../../styles';

const PhoneNumberCheck: React.FC = () => {
  const [userInput, onChange] = useField('');

  return (
    <Box>
      <Input
        type="text"
        placeholder="请输入验证码"
        value={userInput}
        onChange={onChange}
      />
    </Box>
  );
};

export default PhoneNumberCheck;
