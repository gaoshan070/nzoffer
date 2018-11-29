import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import { styled } from '../../../../../../styles/styledLib';
import { FlexCard } from '../../../../../../components/buildingBlocks';
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
      if (status === VALIDATION_STATUS.NORMAL) {
        return theme.colors.grey;
      } else if (
        status === VALIDATION_STATUS.CORRECT
      ) {
        return theme.colors.green;
      } else if (status === VALIDATION_STATUS.WRONG) {
        return 'red';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [letters, setLetters] = useState(getRandom());
  const [status, setStatus] = useState<
    ValueOfValidationStatus
  >(VALIDATION_STATUS.NORMAL);

  function canvasOnClick() {
    setLetters(getRandom());
  }

  function inputOnChange(
    e: React.FormEvent<HTMLInputElement>,
  ) {
    const { value } = e.currentTarget;
    if (!value) {
      setStatus(VALIDATION_STATUS.NORMAL);
      return;
    }
    if (value === letters) {
      setStatus(VALIDATION_STATUS.CORRECT);
    } else {
      setStatus(VALIDATION_STATUS.WRONG);
    }
  }

  useEffect(
    () => {
      updateCanvas(canvasRef, letters);
    },
    [canvasRef, letters],
  );

  return (
    <FlexCard flexDirection="column">
      <FlexCard>
        <StyledValidationInput
          type="text"
          status={status}
          onChange={inputOnChange}
        />
        <StyledCanvas
          onClick={canvasOnClick}
          ref={canvasRef}
        />
      </FlexCard>
      <StatusText status={status} />
    </FlexCard>
  );
};

export default ValidationInput;
