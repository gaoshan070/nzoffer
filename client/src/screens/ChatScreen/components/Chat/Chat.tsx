import React from 'react';
import { observer } from 'mobx-react-lite';
import Words, {
  IWordsProps,
} from './components/Words/Words';
import Avatar from './components/Avatar';
import { Box } from '../../../../styles';

const Chat: React.FC<IWordsProps> = ({
  text,
  callback,
}) => (
  <Box alignItems="center">
    <Avatar />
    <Words text={text} callback={callback} />
  </Box>
);

export default observer(Chat);
