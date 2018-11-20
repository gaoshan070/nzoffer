import React, { useContext } from 'react';
import { Flex, Box } from 'rebass';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { PoseGroup } from 'react-pose';
import Header from '../../components/Header/Header';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';

const HiddenBox: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div style={{ display: 'none' }}>{children}</div>
);

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(ChatScreenStoreContext);

  return (
    <Flex width={1} flexDirection="column">
      <Header title="我是空空的标题栏" />
      <Box
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        py={6}
        bg="background"
      >
        <Box width={[0.05, 0.1, 0.2]}> </Box>

        <Box width={[0.9, 0.8, 0.6]}>
          <PoseGroup animateOnMount>{steps}</PoseGroup>
          <HiddenBox>{steps.length}</HiddenBox>
        </Box>

        <Box width={[0.05, 0.1, 0.2]}> </Box>
      </Box>
    </Flex>
  );
};

export default observer(ChatScreen);
