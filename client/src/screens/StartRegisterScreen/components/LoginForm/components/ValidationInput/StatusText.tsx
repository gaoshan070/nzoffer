import React from 'react';
import {
  ValueOfValidationStatus,
  VALIDATION_STATUS,
} from './ValidationInput.utils';
import { Text } from '../../../../../../rebase/components';
import {
  css,
  ColorType,
} from '../../../../../../rebase/styles';

const style = css`
  margin-top: 7px;
  transition: all 0.3s ease-in;
`;

interface IStatusText {
  status: ValueOfValidationStatus;
}

const StatusText: React.FC<IStatusText> = ({
  status,
}) => {
  let text = '请输入右图的验证码';
  let color: ColorType = 'grey';

  if (status === VALIDATION_STATUS.CORRECT) {
    text = '潇洒，完全正确，awesome job！';
    color = 'green';
  } else if (status === VALIDATION_STATUS.WRONG) {
    text = '验证码不对哦，加油加油 >_<';
    color = 'red';
  }

  return (
    <Text css={style} fontSize="body" color={color}>
      {text}
    </Text>
  );
};

export default StatusText;
