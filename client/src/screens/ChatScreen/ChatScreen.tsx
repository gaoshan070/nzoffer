// @ts-ignore
import scroll from 'scroll';
import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-pose';
import { StoreContext } from '../../store/store.context';
import Screen from '../../components/Screen';
import { Box, SPACE } from '../../styles';
import { usePrevious } from '../../miscellaneous/hooks';

const ChatScreen: React.FC<RouteComponentProps> = () => {
  const { chatStore } = useContext(StoreContext);
  const { steps } = chatStore;
  const prevStepsLength = usePrevious(steps.length) || 0;

  useEffect(() => {
    if (steps.length > 6 && steps.length > prevStepsLength) {
      console.log('scrolled');
      const el = document.getElementById('chat-container');

      if (el) {
        scroll.top(el, el.scrollHeight);
      }
    }
  }, [steps.length, prevStepsLength]);

  return (
    <Screen>
      <Box
        direction="column"
        width={1}
        px={[SPACE.xSmall, SPACE.xLarge, '28%']}
        pt={SPACE.large}
        pb="35vh"
        overflowX="hidden"
        overflowY="auto"
        height="95vh"
        id="chat-container"
        css={{
          scrollBehavior: 'smooth',
          '-webkit-overflow-scrolling': 'touch',
        }}
      >
        <Transition animateOnMount>{steps.slice()}</Transition>
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
