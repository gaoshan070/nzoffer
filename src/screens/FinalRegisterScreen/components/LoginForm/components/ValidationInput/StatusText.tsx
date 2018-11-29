import React from 'react';
import { Text } from 'rebass';
import {
  ValueOfValidationStatus,
  VALIDATION_STATUS,
} from './ValidationInput.utils';

const style = {
  marginTop: '7px',
  transition: 'all .3s ease-in',
};

interface IStatusText {
  status: ValueOfValidationStatus;
}

const StatusText: React.FC<IStatusText> = ({
  status,
}) => {
  let text = '请输入右图的验证码';
  let color = '#606869';

  if (status === VALIDATION_STATUS.CORRECT) {
    text = '验证码正确！';
    color = 'green';
  } else if (status === VALIDATION_STATUS.WRONG) {
    text = '请输入正确的验证码';
    color = 'red';
  }

  return (
    <Text css={style} fontSize={0} color={color}>
      {text}
    </Text>
  );
};

export default StatusText;
