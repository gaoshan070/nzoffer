import React, { useContext } from 'react';
import {
  Box,
  Text,
  SPACE,
  FONT_SIZE,
} from '../../../../../styles';
import { Input } from '../../../../../components/Input';
import { useField } from '../../../../../miscellaneous/hooks';
import { StoreContext } from '../../../../../store/store.context';

export const Passwords: React.FC = ({}) => {
  const store = useContext(StoreContext).chatStore;
  const [password1, onP1Change] = useField('');
  const [password2, onP2Change] = useField('');

  const arePwdSame = password1 === password2;
  const borderColorStyle = arePwdSame
    ? {}
    : { borderColor: 'red' };

  store.password =
    arePwdSame && password2 !== '' ? password1 : '';

  return (
    <Box direction="column" gap={SPACE.small}>
      <Input
        type="text"
        placeholder="请输入密码"
        value={password1}
        onChange={onP1Change}
        borderRadius="4px 0 0 4px"
      />
      <Box direction="column">
        <Input
          type="text"
          placeholder="请确认密码"
          value={password2}
          onChange={onP2Change}
          borderRadius="4px 0 0 4px"
          {...borderColorStyle}
        />
        {!arePwdSame && (
          <Text
            size={FONT_SIZE.small}
            color="red"
            mt={SPACE.xxxSmall}
          >
            两次密码不一样,要检查仔细哦
          </Text>
        )}
      </Box>
    </Box>
  );
};
