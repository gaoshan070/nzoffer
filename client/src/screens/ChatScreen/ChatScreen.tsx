import React, {
  useRef,
  useEffect,
  useContext,
} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Transition } from 'react-pose';
import { StoreContext } from '../../store/store.context';
import Screen from '../../components/Screen';
import { Box, SPACE } from '../../styles';

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(StoreContext);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [steps.length]);

  return (
    <Screen>
      <Box
        direction="column"
        width={['90vw', '80vw', '55vw']}
        px={SPACE.xxxxSmall}
        pt={SPACE.large}
        pb={SPACE.xxxLarge}
        overflowX="hidden"
        overflowY="auto"
      >
        <Transition animateOnMount>
          {steps.slice()}
        </Transition>
        <div ref={boxRef} />
      </Box>
    </Screen>
  );
};

export default observer(ChatScreen);
