import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import { styled } from '../../../../../../styles/styledLib';
import Box from '../../../../../../components/Box/Box';
import {
  getRandom,
  updateCanvas,
  VALIDATION_STATUS,
  ValueOfValidationStatus,
} from './ValidationInput.utils';
import StatusText from './StatusText';

const StyledValidationInput = styled.input<{
  status: ValueOfValidationStatus;
}>`
  height: 45px;
  border: 2px solid
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

  const styledValidationInput = (
    //@ts-ignore
    <StyledValidationInput
      type="text"
      status={status}
      onChange={inputOnChange}
    />
  );

  return (
    <Box flexDirection="column">
      <Box>
        {styledValidationInput}
        <StyledCanvas
          onClick={canvasOnClick}
          ref={canvasRef}
        />
      </Box>
      <StatusText status={status} />
    </Box>
  );
};

export default ValidationInput;
