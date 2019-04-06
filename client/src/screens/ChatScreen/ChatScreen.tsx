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
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [steps.length]);

  return (
    <Screen>
      <Box
        direction="column"
        width={['90vw', '80vw', '70vw']}
        px={SPACE.xLarge}
        pt={SPACE.large}
        pb="300px"
        overflowX="hidden"
        overflowY="hidden"
      >
        <Transition animateOnMount>{steps.slice()}</Transition>
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
