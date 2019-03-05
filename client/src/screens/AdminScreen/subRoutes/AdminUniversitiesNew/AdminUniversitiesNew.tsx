import React, { useState, useEffect } from 'react';
import { AdminScreen } from '../components/AdminScreen';
import { RouteComponentProps } from 'react-router';
import { Box, Button, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { getRandomNumberStringInBigRange } from '../../../../shared/generateRandom';
import { useField, usePromise } from '../../../../miscellaneous/hooks';
import { UploadFile } from '../../../../components/UploadFile';
import { universityService } from '../../../../utils/feathers';
import Alert from 'react-s-alert';
import { ROUTES } from '../../../../routes/routesConfig';

export const AdminUniversitiesNew: React.FC<RouteComponentProps> = ({
  history,
}) => {
  const isEdit = false;
  const [nameCNState, nameCNStateOnChange] = useField('');
  const [nameENState, nameENStateOnChange] = useField('');
  const [logoURLState, setLogoURLState] = useState('');
  const [loadingStatus, result, error, getResult] = usePromise({
    asyncFunc: () =>
      universityService.create({
        nameCN: nameCNState,
        nameEN: nameENState,
        logoURL: logoURLState,
      }),
    afterLoaded: data => {
      history.replace(ROUTES.ADMIN_UNIVERSITIES);
    },
  });
  const isValid = nameCNState && nameENState && logoURLState;

  async function onSave() {
    if (isValid) {
      await getResult();
    } else {
      Alert.error('请好好输入哦');
    }
  }

  return (
    <AdminScreen title="新建大学">
      <Box direction="column" gap={SPACE.xSmall} minWidth="400px">
        <Input
          placeholder="输入学校中文名"
          value={nameCNState}
          onChange={nameCNStateOnChange}
        />
        <Input
          placeholder="输入学校英文名"
          value={nameENState}
          onChange={nameENStateOnChange}
        />
        <UploadFile
          label="学校LOGO"
          isPublicRead
          fileURL={logoURLState}
          fileName={isEdit ? 'isEdit' : getRandomNumberStringInBigRange()}
          getUploadedURL={url => setLogoURLState(url)}
        />
        <Box width={1} justifyContent="around" mt={SPACE.large}>
          <Button onClick={onSave}>保存</Button>
          <Button
            onClick={() => {
              history.goBack();
            }}
          >
            取消
          </Button>
        </Box>
      </Box>
    </AdminScreen>
  );
};
