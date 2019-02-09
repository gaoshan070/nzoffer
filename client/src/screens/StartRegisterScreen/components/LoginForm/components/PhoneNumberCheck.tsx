import React, { useState } from 'react';
import { useField } from '../../../../../miscellaneous/hooks';
import {
  Box,
  Button,
  css,
  COLORS,
} from '../../../../../styles';
import { Input } from '../../../../../components/Input';

const PhoneNumberCheck: React.FC = () => {
  const [canSendSMS, setCanSendSMS] = useState(true);
  const [userInput, onChange] = useField('');

  function onClick() {
    setCanSendSMS(false);
    setTimeout(() => {
      setCanSendSMS(true);
    }, 5 * 60 * 1000);
  }

  return (
    <Box alignItems="stretch" width={1}>
      <Box width={0.72}>
        <Input
          type="text"
          placeholder="请输入短信验证码"
          value={userInput}
          onChange={onChange}
          borderRadius="4px 0 0 4px"
        />
      </Box>
      <Box width={0.28}>
        <Button
          width={1}
          borderRadius="0 4px 4px 0"
          minHeight="initial"
          maxHeight="initial"
          onClick={onClick}
          bg={
            canSendSMS ? COLORS.primary : COLORS.grey1
          }
          css={`
            pointer-events: ${canSendSMS
              ? 'auto'
              : 'none'};
          `}
        >
          获取短信验证码
        </Button>
      </Box>
    </Box>
  );
};

export default PhoneNumberCheck;
