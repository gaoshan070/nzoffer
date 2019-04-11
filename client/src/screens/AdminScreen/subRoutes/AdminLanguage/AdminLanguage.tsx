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
import { getNameCNFromId } from '../components/utils';

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
      university,
      requiredIELTSScore,
    }: ILanguageProgramme,
    index: number,
  ) => (
    <Box key={_id} alignItems="center" gap="12px">
      <Text width={0.05}>{index + 1}.</Text>
      <Text width={0.1}>{getNameCNFromId(universities, university)}</Text>
      <Text width={0.1}>{requiredIELTSScore}</Text>
      <Box display="inline-flex" direction="column" width={0.5}>
        <Text>{nameEN}</Text>
        <Text>{nameCN}</Text>
      </Box>
      <Text width={0.1}>${tuitionFeeInNZD}</Text>
      <Text width={0.1}>{lengthInWeeks} weeks</Text>
      <Text width={0.1}>{startMonth.map(i => i + '月').toLocaleString()}</Text>
      <EditButton width={0.1} editURL={ROUTES.ADMIN_LANGUAGES_EDIT} id={_id} />
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
