import React from 'react';
import Text from '../../../../../../components/Text/Text';
import { css } from '../../../../../../styles/styled';
import {
  ValueOfValidationStatus,
  VALIDATION_STATUS,
} from './ValidationInput.utils';

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
  let color = '#606869';

  if (status === VALIDATION_STATUS.CORRECT) {
    text = '潇洒，完全正确，awesome job！';
    color = 'green';
  } else if (status === VALIDATION_STATUS.WRONG) {
    text = '验证码不对哦，加油加油 >_<';
    color = 'red';
  }

  return (
    <Text css={style} fontSize={1} color={color}>
      {text}
    </Text>
  );
};

export default StatusText;
