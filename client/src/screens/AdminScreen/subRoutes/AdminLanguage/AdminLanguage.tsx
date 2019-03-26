import React from 'react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Box, Text } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { ILanguageProgramme } from '../../../../store/AdminStore.type';
import {
  programmeService,
  languageProgrammeService,
} from '../../../../utils/feathers';
import { CommonListScreen } from '../components/CommonListScreen';
import { EditButton } from '../components/EditButton';
import { useComponentDidMount } from '../../../../miscellaneous/hooks';
import { useAdminStore } from '../../../../store/store.context';

export const AdminLanguage: React.FC<RouteComponentProps> = observer(() => {
  const { fetchUniversities, universities } = useAdminStore();

  useComponentDidMount(async () => {
    if (!universities.length) {
      await fetchUniversities();
    }
  });

  const renderItem = (
    {
      _id,
      nameEN,
      nameCN,
      lengthInWeeks,
      tuitionFeeInNZD,
      startMonth,
    }: ILanguageProgramme,
    index: number,
  ) => (
    <Box key={_id} alignItems="center" gap="50px">
      <Text width={0.05}>{index + 1}.</Text>
      <Box display="inline-flex" direction="column">
        <Text>{nameEN}</Text>
        <Text>{nameCN}</Text>
      </Box>
      <Text>${tuitionFeeInNZD}</Text>
      <Text>{lengthInWeeks} weeks</Text>
      <Text>{startMonth}</Text>
      <EditButton width={0.2} editURL={ROUTES.ADMIN_LANGUAGES_EDIT} id={_id} />
    </Box>
  );

  return (
    <CommonListScreen
      title="语言课列表"
      dataKeyName="languageProgrammes"
      routeForNew={ROUTES.ADMIN_LANGUAGES_NEW}
      feathersService={languageProgrammeService}
      renderItem={renderItem}
    />
  );
});
