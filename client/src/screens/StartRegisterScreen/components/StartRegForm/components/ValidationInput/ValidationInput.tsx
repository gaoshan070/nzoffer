import React, { useState, useRef, useEffect } from 'react';
import {
  getRandom,
  updateCanvas,
  VALIDATION_STATUS,
  ValueOfValidationStatus,
} from './ValidationInput.utils';
import StatusText from './StatusText';
import { styled, css, Box, SPACE, SIZE } from '../../../../../../styles';
import { Input } from '../../../../../../components/Input';

const placeholderCSS = css`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.grey1};

  ::placeholder {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    padding-left: ${({ theme }) => theme.space[0] + 'px'};
    padding-right: ${({ theme }) => theme.space[1] + 'px'};
    padding-top: ${({ theme }) => theme.space[1] + 'px'};
    padding-bottom: ${({ theme }) => theme.space[1] + 'px'};
  }
`;

const StyledCanvas = styled.canvas`
  height: 45px;
  width: 26%;
`;

const ValidationInput = () => {
  const [letters, setLetters] = useState(getRandom());
  const [userInput, setUserInput] = useState('');
  const [status, setStatus] = useState<ValueOfValidationStatus>(
    VALIDATION_STATUS.NORMAL,
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function updateStatus(value: string, passedLetters = letters) {
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

  function inputOnChange(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setUserInput(value);
    updateStatus(value);
  }

  useEffect(() => {
    updateCanvas(canvasRef, letters);
  }, [canvasRef, letters]);

  return (
    <Box direction="column">
      <Box flexGrow={1} width={1} alignItems="center">
        <Input
          type="text"
          placeholder="请输入右边的验证码"
          onChange={inputOnChange}
          minHeight={SIZE.xSmall}
          width={0.88}
          border-radius={0}
          css={css`
            vertical-align: middle;
            border: 1px solid
              ${({ theme }) => {
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

            ${placeholderCSS};
          `}
        />
        <StyledCanvas onClick={canvasOnClick} ref={canvasRef} />
      </Box>
      {status !== VALIDATION_STATUS.NORMAL && <StatusText status={status} />}
    </Box>
  );
};

export default ValidationInput;
