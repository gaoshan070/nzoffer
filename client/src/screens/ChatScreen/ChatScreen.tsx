import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-pose';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';
import Screen from '../../components/Screen';
import { Box } from '../../rebase/components';

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(ChatScreenStoreContext);

  return (
    <Screen css={{ height: 'auto' }}>
      <Box
        direction="column"
        width={1}
        px={['xlarge', 'xxxxlarge']}
        pt="large"
        pb="xxxlarge"
        overflowX="hidden"
        overflowY="auto"
      >
        <Transition animateOnMount>{steps}</Transition>
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
