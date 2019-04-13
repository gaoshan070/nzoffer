import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-pose';
import { StoreContext } from '../../store/store.context';
import Screen from '../../components/Screen';
import { Box, SPACE } from '../../styles';

const ChatScreen: React.FC<RouteComponentProps> = () => {
  const { chatStore } = useContext(StoreContext);
  const { steps } = chatStore;

  useEffect(() => {
    if (steps.length > 6) {
      const el = document.getElementById('chat-container');
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }
  }, [steps.length]);

  return (
    <Screen>
      <Box
        direction="column"
        width={1}
        px={[SPACE.xSmall, SPACE.xLarge, '28%']}
        pt={SPACE.large}
        pb="320px"
        overflowX="hidden"
        overflowY="auto"
        height="95vh"
        id="chat-container"
        css={{
          scrollBehavior: 'smooth',
        }}
      >
        <Transition animateOnMount>{steps.slice()}</Transition>
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
