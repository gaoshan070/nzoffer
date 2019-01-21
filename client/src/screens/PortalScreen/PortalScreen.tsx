import React from 'react';
import Screen from '../../components/Screen';
import { RouteComponentProps } from 'react-router';
import { HeaderSection } from './components/HeaderSection';
import { Programme } from './components/Programme';
import { LanguageSchool } from './components/LanguageSchool';
import { Progress } from './components/Progress';
import { Box, Button } from '../../styles';
import { FileUpload } from './components/FileUpload';
import { SPACE } from '../../styles/rebase/styles';

export const PortalScreen: React.FC<
  RouteComponentProps
> = ({ history, ...rest }) => (
  <Screen>
    <Box
      width={1}
      pt={SPACE.xSmall}
      direction="column"
      alignItems="center"
      height="max-content"
      bg="background"
    >
      <HeaderSection />
      <Box
        width={['95%', '70%', '60%']}
        direction="column"
        p={SPACE.small}
        gap={SPACE.xLarge}
      >
        <Programme />
        <LanguageSchool />
        <Progress />
        <FileUpload />
      </Box>
      <Button mt={SPACE.large} mb={SPACE.xxxLarge}>
        确认提交
      </Button>
    </Box>
  </Screen>
);
