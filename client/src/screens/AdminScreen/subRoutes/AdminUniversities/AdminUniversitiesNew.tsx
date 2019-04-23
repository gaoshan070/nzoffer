import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Box, Text, SPACE } from '../../../../styles';
import { Input } from '../../../../components/Input';
import { getRandomNumberStringInBigRange } from '../../../../shared/generateRandom';
import { useField } from '../../../../miscellaneous/hooks';
import { UploadFile } from '../../../../components/UploadFile';
import { universityService } from '../../../../utils/feathers';
import { CountriesDropDown } from './CountriesDropDown';
import { useIsEdit, goBackIfRefreshInEditPage } from '../components/utils';
import { useAdminStore } from '../../../../store/store.context';
import { IUniversity } from '../../../../store/AdminStore.type';
import { CommonEditNewScreen } from '../components/CommonEditNewScreen';

const AdminUniversitiesNew: React.FC<RouteComponentProps> = ({ history }) => {
  const { universities } = useAdminStore();
  goBackIfRefreshInEditPage(history, universities);
  const { isEdit, id } = useIsEdit();
  const itemToEdit = isEdit
    ? universities.find(item => item._id === id)
    : ({} as IUniversity);

  const [nameCNState, nameCNStateOnChange] = useField(
    isEdit ? itemToEdit!.nameCN : '',
  );
  const [nameENState, nameENStateOnChange] = useField(
    isEdit ? itemToEdit!.nameEN : '',
  );
  const [country, setCountry] = useState(isEdit ? itemToEdit!.country : '');
  const [logoURLState, setLogoURLState] = useState(
    isEdit ? itemToEdit!.logoURL : '',
  );

  const isValid = !!nameCNState && !!nameENState && !!logoURLState && !!country;

  return (
    <CommonEditNewScreen
      title="大学"
      feathersService={universityService}
      dataToCreateOrUpdate={{
        nameCN: nameCNState,
        nameEN: nameENState,
        logoURL: logoURLState,
        country,
      }}
      isValid={isValid}
    >
      <Box direction="column" gap={SPACE.xSmall} minWidth="400px">
        <Input
          label="输入学校中文名"
          placeholder="输入学校中文名"
          value={nameCNState}
          onChange={nameCNStateOnChange}
        />
        <Input
          label="输入学校英文名"
          placeholder="输入学校英文名"
          value={nameENState}
          onChange={nameENStateOnChange}
        />
        <Box alignItems="center">
          <Text>国家：</Text>
          <CountriesDropDown
            selectedCountry={country}
            whenSelected={setCountry}
          />
        </Box>
        <UploadFile
          label="学校LOGO"
          isPublicRead
          fileURL={logoURLState}
          fileName={isEdit ? logoURLState : getRandomNumberStringInBigRange()}
          getUploadedURL={url => setLogoURLState(url)}
        />
      </Box>
    </CommonEditNewScreen>
  );
};

export default AdminUniversitiesNew;
