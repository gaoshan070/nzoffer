import React from 'react';
import Screen from '../../components/Screen';
import { RouteComponentProps } from 'react-router';
import { HeaderSection } from './components/HeaderSection';
import { Programme } from './components/Programme';
import { LanguageSchool } from './components/LanguageSchool';
import { Progress } from './components/Progress';
import { Box, Button } from '../../rebase/components';
import { FileUpload } from './components/FileUpload';

export const PortalScreen: React.FC<
  RouteComponentProps
> = ({ history, ...rest }) => (
  <Screen>
    <Box
      width={1}
      pt="xsmall"
      direction="column"
      alignItems="center"
      height="max-content"
      bg="background"
    >
      <HeaderSection />
      <Box
        width={['95%', '70%', '60%']}
        direction="column"
        p="small"
        gap="xlarge"
      >
        <Programme />
        <LanguageSchool />
        <Progress />
        <FileUpload />
      </Box>
      <Button my="large">确认提交</Button>
    </Box>
  </Screen>
);
