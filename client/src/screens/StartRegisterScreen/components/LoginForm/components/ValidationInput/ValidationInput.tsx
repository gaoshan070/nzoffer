import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  getRandom,
  updateCanvas,
  VALIDATION_STATUS,
  ValueOfValidationStatus,
} from './ValidationInput.utils';
import StatusText from './StatusText';
import {
  styled,
  css,
  Box,
} from '../../../../../../styles';

const placeholderCSS = css`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  padding-left: ${({ theme }) =>
    theme.space[2] + 'px'};
  padding-right: ${({ theme }) =>
    theme.space[2] + 'px'};
  padding-top: ${({ theme }) => theme.space[1] + 'px'};
  padding-bottom: ${({ theme }) =>
    theme.space[1] + 'px'};
  color: ${({ theme }) => theme.colors.grey1};

  ::placeholder {
    font-size: 1rem;
    padding-left: 1rem;
  }
`;

interface IStyledValidationInput {
  type: string;
  status: ValueOfValidationStatus;
  onChange?: Function;
  placeholder?: string;
}

const StyledValidationInput = styled('input')<
  IStyledValidationInput
>`
  box-sizing: border-box;
  vertical-align: middle;
  width: 100%;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, status }) => {
      switch (status) {
        case VALIDATION_STATUS.CORRECT:
          return theme.colors.green;

        case VALIDATION_STATUS.WRONG:
          return 'red';

        default:
        case VALIDATION_STATUS.NORMAL:
          return theme.colors.grey;
      }
    }};

  &:focus {
    outline: none;
  }

  transition: all 0.3s ease-in;

  ${placeholderCSS};
`;

const StyledCanvas = styled.canvas`
  height: 45px;
  width: 90px;
`;

const ValidationInput = () => {
  const [letters, setLetters] = useState(getRandom());
  const [userInput, setUserInput] = useState('');
  const [status, setStatus] = useState<
    ValueOfValidationStatus
  >(VALIDATION_STATUS.NORMAL);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function updateStatus(
    value: string,
    passedLetters = letters,
  ) {
    if (!value) {
      setStatus(VALIDATION_STATUS.NORMAL);
      return;
    }
    if (value === passedLetters) {
      setStatus(VALIDATION_STATUS.CORRECT);
    } else {
      setStatus(VALIDATION_STATUS.WRONG);
    }
  }

  function canvasOnClick() {
    const newLetters = getRandom();
    setLetters(newLetters);

    // we need to update the status to re-validate
    updateStatus(userInput, newLetters);
  }

  function inputOnChange(
    e: React.FormEvent<HTMLInputElement>,
  ) {
    const { value } = e.currentTarget;
    setUserInput(value);
    updateStatus(value);
  }

  useEffect(
    () => {
      updateCanvas(canvasRef, letters);
    },
    [canvasRef, letters],
  );

  return (
    <Box direction="column">
      <Box flexGrow={1} alignItems="center">
        <StyledValidationInput
          type="text"
          placeholder="请输入右边的验证码"
          status={status}
          onChange={inputOnChange}
        />
        <StyledCanvas
          onClick={canvasOnClick}
          ref={canvasRef}
        />
      </Box>
      {status !== VALIDATION_STATUS.NORMAL && (
        <StatusText status={status} />
      )}
    </Box>
  );
};

export default ValidationInput;
