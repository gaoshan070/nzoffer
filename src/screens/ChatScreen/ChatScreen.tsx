import React, { useContext } from 'react';
import { Box } from 'rebass';
import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { PoseGroup } from 'react-pose';
import { ChatScreenStoreContext } from '../../store/ChatScreenStore/ChatScreenStore.context';

const responsiveWidth = [0.05, 0.1, 0.2];
const WithSideColumn: React.FC = ({ children }) => (
  <>
    <Box width={responsiveWidth} />
    {children}
    <Box width={responsiveWidth} />
  </>
);

const ChatScreen: React.FC<
  RouteComponentProps
> = () => {
  const { steps } = useContext(ChatScreenStoreContext);

  const content = (
    <Box width={[0.9, 0.8, 0.6]}>
      <Box mb={10}>
        <PoseGroup animateOnMount>
          {steps.slice()}
        </PoseGroup>
      </Box>
    </Box>
  );

  return <WithSideColumn>{content}</WithSideColumn>;
};

export default observer(ChatScreen);
