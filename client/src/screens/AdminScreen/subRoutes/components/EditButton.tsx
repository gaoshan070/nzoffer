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
        maxHeight="none"
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
