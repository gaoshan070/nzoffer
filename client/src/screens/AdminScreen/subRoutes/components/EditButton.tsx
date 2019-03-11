import React from 'react';
import { useHistory } from '../../../../miscellaneous/hooks';
import { Box, Button } from '../../../../styles';

export const EditButton: React.FC<{
  width?: string | number;
  id: string;
  editURL: string;
}> = ({ id, editURL, width }) => {
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
        onClick={() => {
          history.push(editURL.replace(':id', id));
        }}
      >
        编辑
      </Button>
    </Box>
  );
};
