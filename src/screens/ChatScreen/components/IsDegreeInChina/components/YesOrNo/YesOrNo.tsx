import React, { useContext } from 'react';
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
  const paramForNoButton =
    value == null ? null : !value;

  const boxRef = useScrollIntoView();
  return (
    <Box ref={boxRef}>
      <BaseButton
        border="primary"
        bg={getBackGroundColor(value)}
        color={getFontColor(value)}
        onClick={onClick(true)}
      >
        是
      </BaseButton>
      <BaseButton
        border="primary"
        bg={getBackGroundColor(paramForNoButton)}
        color={getFontColor(paramForNoButton)}
        onClick={onClick(false)}
      >
        不是
      </BaseButton>
    </Box>
  );
};

export default observer(YesOrNo);
