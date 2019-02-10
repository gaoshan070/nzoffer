import React from 'react';
import Screen from '../../components/Screen';
import { RouteComponentProps } from 'react-router';
import { HeaderSection } from './components/HeaderSection';
import { Programme } from './components/Programme';
import { LanguageSchool } from './components/LanguageSchool';
import { Progress } from './components/Progress';
import { Box, Button, SPACE } from '../../styles';
import { FileUpload } from './components/FileUpload';
import { ROUTES } from '../../routes/routesConfig';

export const PortalScreen: React.FC<RouteComponentProps> = ({
  history,
  ...rest
}) => (
  <Screen>
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
        width={['95%', '70%', '60%']}
        direction="column"
        p={SPACE.xxSmall}
        gap={SPACE.large}
      >
        <Programme />
        <LanguageSchool />
        <Progress />
        <FileUpload />
      </Box>
      <Button
        mt={SPACE.large}
        mb={SPACE.xLarge}
        onClick={() => {
          history.push(ROUTES.FINISH_APPLICATION);
        }}
      >
        确认提交
      </Button>
    </Box>
  </Screen>
);
