import React, { useState, useEffect } from 'react';
import Screen from '../../components/Screen';
import { RouteComponentProps } from 'react-router';
import { HeaderSection } from './components/HeaderSection';
import { Programme } from './components/Programme';
import { DIY_IELTS_WORDS, LanguageSchool } from './components/LanguageSchool';
import { Progress } from './components/Progress';
import { Box, Button, FlatButton, SPACE } from '../../styles';
import { FileUpload } from './components/FileUpload';
import { ROUTES } from '../../routes/routesConfig';
import { feathersApp } from '../../utils/feathers';
import { useComponentDidMount } from '../../miscellaneous/hooks';
import { useRegStore } from '../../store/store.context';
import { observer } from 'mobx-react-lite';
import { isDegreeHighSchool } from '../StartRegisterScreen/subRoutes/components/utils';
import { HighSchool } from './components/HighSchool';
import { InfoConfirm } from './components/InfoConfirm';
import Alert from 'react-s-alert';
import { is } from '../../styles/rebase/utils/utils';

export const PortalScreen: React.FC<RouteComponentProps> = observer(
  ({ history, ...rest }) => {
    const {
      chinaDegree,
      fetchUser,
      fetchLanguageProgrammesSelection,
      languageProgrammePoolLoadingStatus,
      isHighSchoolCase,
    } = useRegStore();

    useComponentDidMount(() => {
      fetchUser();
      fetchLanguageProgrammesSelection();
    });

    const [languageSelect, setLanguageSelect] = useState('');

    const isLanguageSelected =
      !!languageSelect && languageSelect !== DIY_IELTS_WORDS;

    return (
      <Screen css={{ height: '100vh', overflowY: 'auto' }} hasExitButton>
        <Box
          width={1}
          pt={SPACE.xxSmall}
          direction="column"
          alignItems="center"
          height="max-content"
          bg="background"
        >
          <HeaderSection />
          <Box
            width={['95%', '70%', '40%']}
            direction="column"
            p={SPACE.xxxxSmall}
            gap={SPACE.xxSmall}
          >
            {isHighSchoolCase() ? <HighSchool /> : <Programme />}

            {!is.loaded(languageProgrammePoolLoadingStatus) ? null : (
              <>
                <LanguageSchool
                  languageSelect={languageSelect}
                  setLanguageSelect={setLanguageSelect}
                />
                <InfoConfirm isLanguageSelected={isLanguageSelected} />
              </>
            )}

            <Progress />
            <FileUpload />
          </Box>
          <Button
            mt={SPACE.small}
            mb={SPACE.xLarge}
            minHeight="30px"
            maxHeight="30px"
            onClick={() => {
              if (!languageSelect) {
                Alert.error('请选择语言课');
                return;
              }

              history.push(ROUTES.FINISH_APPLICATION);
            }}
          >
            确认提交
          </Button>
        </Box>
      </Screen>
    );
  },
);
