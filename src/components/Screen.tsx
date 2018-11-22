import React from 'react';
import { Flex, Box } from 'rebass';
import Header from './/Header/Header';

interface IScreenProps {
  title?: string;
}

const boxStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflowY: 'auto',
  display: 'flex',
  justifyContent: 'center',
};

const Screen: React.FC<IScreenProps> = ({
  title,
  children,
}) => (
  <Flex width={1} flexDirection="column">
    <Header title={title || '我是空空的标题栏'} />
    <Box css={boxStyle} py={6} bg="background">
      {children}
    </Box>
  </Flex>
);

export default Screen;
