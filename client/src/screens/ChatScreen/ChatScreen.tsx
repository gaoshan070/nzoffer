import React, { useRef, useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-pose';
import { StoreContext } from '../../store/store.context';
import Screen from '../../components/Screen';
import { Box, SPACE } from '../../styles';

const ChatScreen: React.FC<RouteComponentProps> = () => {
  const { steps } = useContext(StoreContext).chatStore;

  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [steps.length]);

  return (
    <Screen>
      <Box
        direction="column"
        width={['90vw', '80vw', '55vw']}
        px={SPACE.xxxxSmall}
        pt={SPACE.large}
        pb="300px"
        overflowX="hidden"
        overflowY="auto"
      >
        <Transition animateOnMount>{steps.slice()}</Transition>
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
