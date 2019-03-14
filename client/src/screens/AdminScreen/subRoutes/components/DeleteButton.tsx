import React from 'react';
import { useHistory } from '../../../../miscellaneous/hooks';
import { Box, Button } from '../../../../styles';
import Alert from 'react-s-alert';

export const DeleteButton: React.FC<{
  feathersService: object;
  width?: string | number;
  id: string;
}> = ({ feathersService, id, width }) => {
  const history = useHistory();
  const props = width ? { width } : {};

  return (
    <Box {...props}>
      <Button
        fontSize="14px"
        px={2}
        py={1}
        border={1}
        borderColor="primary"
        bg="white"
        maxHeight="none"
        color="primary"
        minHeight={0}
        onClick={async () => {
          try {
            // @ts-ignore
            await feathersService.remove(id);
            history.go(0);
          } catch {
            Alert.error('网络链接问题，请稍候或刷新后重试');
          }
        }}
      >
        删除
      </Button>
    </Box>
  );
};
