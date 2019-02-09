import React, { useState } from 'react';
import {
  useField,
  usePrevious,
} from '../../../../../miscellaneous/hooks';
import {
  Box,
  Button,
  css,
  COLORS,
  SPACE,
} from '../../../../../styles';
import { Input } from '../../../../../components/Input';

const WAIT_MINUTES = 1;

const PhoneNumberCheck: React.FC = () => {
  const [canSendSMS, setCanSendSMS] = useState(true);
  const [seconds, setSeconds] = useState(
    WAIT_MINUTES * 60,
  );
  const [userInput, onChange] = useField('');

  const prevSeconds = usePrevious(seconds);

  function onClick() {
    setCanSendSMS(false);

    setTimeout(() => {
      setCanSendSMS(true);
    }, WAIT_MINUTES * 60 * 1000);

    const interval = setInterval(() => {
      if (prevSeconds - 1 < 0) {
        clearInterval(interval);
      } else {
        setSeconds(v => v - 1);
      }
    }, 1000);
  }

  return (
    <Box alignItems="stretch" width={1}>
      <Box width={[0.6, 0.7]}>
        <Input
          type="text"
          placeholder="请输入短信验证码"
          value={userInput}
          onChange={onChange}
          borderRadius="4px 0 0 4px"
        />
      </Box>
      <Box width={[0.4, 0.3]}>
        <Button
          px={SPACE.xxSmall}
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
          {canSendSMS ? '获取验证码' : `${seconds}秒`}
        </Button>
      </Box>
    </Box>
  );
};

export default PhoneNumberCheck;
