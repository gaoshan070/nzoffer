import React from 'react';
import { useHistory, usePromise } from '../../../../miscellaneous/hooks';
import { getIsEdit } from './utils';
import { AdminScreen } from './AdminScreen';
import { SaveAndCancel } from './SaveAndCancel';
import { Box, Button, SPACE } from '../../../../styles';
import Alert from 'react-s-alert';

export const CommonEditNewScreen: React.FC<{
  title: string;
  feathersService: object;
  dataToCreateOrUpdate: object;
  isValid: boolean;
}> = ({ title, dataToCreateOrUpdate, isValid, feathersService, children }) => {
  const history = useHistory();
  const { isEdit, id } = getIsEdit();

  const { getResult } = usePromise({
    asyncFunc: () => {
      if (isEdit) {
        // @ts-ignore
        return feathersService.update(id, dataToCreateOrUpdate);
      }

      // @ts-ignore
      return feathersService.create(dataToCreateOrUpdate);
    },
    afterLoaded: () => {
      history.goBack();
    },
  });

  async function onSave() {
    if (isValid) {
      await getResult();
    } else {
      Alert.error('请好好输入哦');
    }
  }

  return (
    <AdminScreen title={title}>
      <Box
        direction="column"
        gap={SPACE.xSmall}
        minWidth="400px"
        height="max-content"
      >
        {children}
        <SaveAndCancel onSave={onSave} />
      </Box>
    </AdminScreen>
  );
};
