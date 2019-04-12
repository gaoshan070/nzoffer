import React from 'react';
import Screen from '../../components/Screen';
import { RouteComponentProps } from 'react-router';
import { HeaderSection } from './components/HeaderSection';
import { Programme } from './components/Programme';
import { LanguageSchool } from './components/LanguageSchool';
import { Progress } from './components/Progress';
import { Box, Button, FlatButton, SPACE } from '../../styles';
import { FileUpload } from './components/FileUpload';
import { ROUTES } from '../../routes/routesConfig';
import { feathersApp } from '../../utils/feathers';

export const PortalScreen: React.FC<RouteComponentProps> = ({
  history,
  ...rest
}) => (
  <Screen
    css={{ height: '100vh', overflowY: 'auto' }}
    headerBox={() => {
      return (
        <FlatButton
          fontSize="16px"
          fontWeight="900"
          color="lightBlue"
          onClick={() => {
            history.push(ROUTES.HOME);
            feathersApp.logout();
          }}
        >
          退 出
        </FlatButton>
      );
    }}
  >
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
        gap={SPACE.small}
      >
        <Programme />
        <LanguageSchool />
        <Progress />
        <FileUpload />
      </Box>
      <Button
        mt={SPACE.small}
        mb={SPACE.xLarge}
        minHeight={'30px'}
        maxHeight={'30px'}
        onClick={() => {
          history.push(ROUTES.FINISH_APPLICATION);
        }}
      >
        确认提交
      </Button>
    </Box>
  </Screen>
);
