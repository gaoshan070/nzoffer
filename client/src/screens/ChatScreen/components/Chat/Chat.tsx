import React from 'react';
import { observer } from 'mobx-react-lite';
import Words, { IWordsProps } from './components/Words/Words';
import Avatar from './components/Avatar';
import { Box } from '../../../../styles';

const Chat: React.FC<IWordsProps> = ({ text, index, callback }) => (
  <Box alignItems="center">
    <Avatar />
    <Words index={index} text={text} callback={callback} />
  </Box>
);

export default observer(Chat);
