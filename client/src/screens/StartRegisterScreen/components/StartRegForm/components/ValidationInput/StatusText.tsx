import React from 'react';
import {
  ValueOfValidationStatus,
  VALIDATION_STATUS,
} from './ValidationInput.utils';
import { Text, css, ColorType, FONT_SIZE } from '../../../../../../styles';

const style = css`
  margin-top: 7px;
  transition: all 0.3s ease-in;
  padding-left: 14px;
`;

interface IStatusText {
  status: ValueOfValidationStatus;
}

const StatusText: React.FC<IStatusText> = ({ status }) => {
  let text = '请输入右图的验证码';
  let color: ColorType = 'grey';

  if (status === VALIDATION_STATUS.CORRECT) {
    text = '验证码正确！';
    color = 'green';
  } else if (status === VALIDATION_STATUS.WRONG) {
    text = '验证码错误，可单击验证码刷新。';
    color = 'red';
  }

  return (
    <Text css={style} size={FONT_SIZE.small} color={color}>
      {text}
    </Text>
  );
};

export default StatusText;
