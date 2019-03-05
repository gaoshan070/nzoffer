import React from 'react';
import { Box, Button, SPACE } from '../../../../styles';
import { withRouter, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import { useHistory } from '../../../../miscellaneous/hooks';

export const SaveAndCancel: React.FC<{
  onSave: Function;
}> = observer(({ onSave }) => {
  const history = useHistory();

  return (
    <Box width={1} justifyContent="around" mt={SPACE.large}>
      <Button
        // @ts-ignore
        onClick={onSave}
      >
        保存
      </Button>
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        取消
      </Button>
    </Box>
  );
});
