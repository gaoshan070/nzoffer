import React, { useContext } from 'react';
import { Flex } from 'rebass';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { PoseGroup } from 'react-pose';
import Header from '../../components/Header/Header';
import { Box } from '../../components/buildingBlocks';
import { AppStoreContext } from '../../store/store';

const HiddenBox: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div style={{ display: 'none' }}>{children}</div>
);

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(AppStoreContext);

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
        }}
        px={4}
        py={6}
        bg="background"
      >
        <PoseGroup animateOnMount>{steps}</PoseGroup>
        <HiddenBox>{steps.length}</HiddenBox>
      </Box>
    </Flex>
  );
};

export default observer(ChatScreen);
