import React, { useContext } from 'react';
import Box from '../../components/Box/Box';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { PoseGroup } from 'react-pose';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(ChatScreenStoreContext);

  return (
    <Box
      flexDirection="column"
      width={[1, '700px']}
      px={[5, 0]}
      pt={5}
      pb={7}
      overflowX="hidden"
      overflowY="auto"
    >
      <PoseGroup animateOnMount>
        {steps.slice()}
      </PoseGroup>
    </Box>
  );
};

export default observer(ChatScreen);
