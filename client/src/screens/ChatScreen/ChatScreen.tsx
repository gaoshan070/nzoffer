import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-pose';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';
import Screen from '../../components/Screen';
import { Box, SPACE } from '../../styles';

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(ChatScreenStoreContext);

  return (
    <Screen css={{ height: 'auto' }}>
      <Box
        direction="column"
        width={1}
        px={[SPACE.xLarge, SPACE.xxxxLarge]}
        pt={SPACE.large}
        pb={SPACE.xxxLarge}
        overflowX="hidden"
        overflowY="auto"
      >
        <Transition animateOnMount>{steps}</Transition>
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
