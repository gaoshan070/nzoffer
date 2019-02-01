import React, { useState } from 'react';
import { Box, SPACE } from '../../../../../styles';
import { Input } from '../../../../../components/Input';
import { useField } from '../../../../../miscellaneous/hooks';

export const Passwords: React.FC = ({}) => {
  const [password1, onP1Change] = useField('');
  const [password2, onP2Change] = useField('');

  return (
    <Box direction="column" gap={SPACE.small}>
      <Input
        type="text"
        placeholder="请输入密码"
        value={password1}
        onChange={onP1Change}
        borderRadius="4px 0 0 4px"
      />
      <Input
        type="text"
        placeholder="请确认密码"
        value={password2}
        onChange={onP2Change}
        borderRadius="4px 0 0 4px"
      />
    </Box>
  );
};
