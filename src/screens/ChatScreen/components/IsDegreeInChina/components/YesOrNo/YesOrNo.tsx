import React, { useState } from 'react';
import Box from '../../../../../../components/Box/Box';
import { observer } from 'mobx-react-lite';
import { ChatScreenStoreContext } from '../../../../../../store/ChatScreenStore/ChatScreenStore.context';
import BaseButton from './YesOrNo.base';
import { useScrollIntoView } from '../../../../../../miscellaneous/utils';

const getBackGroundColor = (value: boolean | null) =>
  value ? 'primary' : 'white';

const getFontColor = (value: boolean | null) =>
  value ? 'white' : 'primary';

interface IYesOrNo {
  value: boolean | null;
  onClick: (value: boolean) => () => void;
}

const YesOrNo: React.FC<IYesOrNo> = ({
  value,
  onClick,
}) => {
  const [yesOrNo, setYesOrNo] = useState(undefined);
  const paramForNoButton =
    value == null ? null : !value;

  function update(selected: boolean) {
    return function() {
      console.log(selected);
      //@ts-ignore
      setYesOrNo(selected);
      onClick(selected)();
    };
  }

  const boxRef = useScrollIntoView();
  return (
    <Box ref={boxRef}>
      <BaseButton
        isSelected={yesOrNo === true}
        border="primary"
        bg={getBackGroundColor(value)}
        color={getFontColor(value)}
        onClick={update(true)}
        text="是"
      />
      <BaseButton
        isSelected={yesOrNo === false}
        border="primary"
        bg={getBackGroundColor(paramForNoButton)}
        color={getFontColor(paramForNoButton)}
        onClick={update(false)}
        text="不是"
      />
    </Box>
  );
};

export default observer(YesOrNo);
