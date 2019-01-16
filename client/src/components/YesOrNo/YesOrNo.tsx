import React, { useState, useRef } from 'react';
import Box from '../Box/Box';
import { observer } from 'mobx-react-lite';
import BaseButton from './YesOrNo.base';
import { useScrollIntoView } from '../../miscellaneous/hooks';

const getBackGroundColor = (value: boolean | null) =>
  value ? 'primary' : 'white';

const getFontColor = (value: boolean | null) =>
  value ? 'white' : 'primary';

interface IYesOrNo {
  yesText: string;
  noText: string;
  value: boolean | null;
  onClick: (value: boolean) => () => void;
  notScrollInToView?: boolean;
  initialState?: boolean;
}

const YesOrNo: React.FC<IYesOrNo> = ({
  value,
  yesText,
  noText,
  onClick,
  notScrollInToView = false,
  initialState,
}) => {
  const [yesOrNo, setYesOrNo] = useState(initialState);
  const boxRef = useRef<HTMLElement>(null);

  if (!notScrollInToView) {
    useScrollIntoView(boxRef);
  }

  const paramForNoButton =
    value == null ? null : !value;

  function update(selected: boolean) {
    return function() {
      // @ts-ignore
      setYesOrNo(selected);
      onClick(selected)();
    };
  }

  return (
    <Box ref={boxRef}>
      <BaseButton
        isSelected={yesOrNo === true}
        border="primary"
        bg={getBackGroundColor(value)}
        color={getFontColor(value)}
        onClick={update(true)}
        text={yesText}
        minWidth="8rem"
      />
      <BaseButton
        isSelected={yesOrNo === false}
        border="primary"
        bg={getBackGroundColor(paramForNoButton)}
        color={getFontColor(paramForNoButton)}
        onClick={update(false)}
        text={noText}
        ml={3}
        minWidth="8rem"
      />
    </Box>
  );
};

export default observer(YesOrNo);
