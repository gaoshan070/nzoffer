import React, { useContext } from 'react';
import Box from '../../components/Box/Box';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-pose';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';
import Screen from '../../components/Screen';

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(ChatScreenStoreContext);

  return (
    <Screen css={{ height: 'auto' }}>
      <Box
        flexDirection="column"
        width={1}
        px={[5, 15]}
        pt={5}
        pb={7}
        overflowX="hidden"
        overflowY="auto"
      >
        <Transition animateOnMount>{steps}</Transition>
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
