import React, { useState } from 'react';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
import { css } from 'styled-components';
import Box from '../../components/Box/Box';
import Text from '../../components/Text/Text';
import Input, {
  useField,
} from '../../components/Input';
import { Button } from '../../components/Button/Button';
import Screen from '../../components/Screen';
import { ROUTES } from '../../routes/routes';
import { SchoolCard } from './components/SchoolCard/SchoolCard';
import autLogo from '../../assets/uniLogos/aut-logo.png';

const SelectSchoolScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  return (
    <Screen>
      <Box
        flexDirection="column"
        width={[1, '450px']}
        maxWidth="300px"
        bg="background"
        mx={4}
        mt={7}
        px={[7, 8]}
        py={[5, 5]}
        height={260}
      >
        恭喜Max
        Ma同学，你的最佳学校匹配正在生成中，请稍候.
        <SchoolCard
          logo={autLogo}
          uniNameCN="奥克兰科技大学"
          uniNameEN="AUT"
          paperNameCN="商科本科"
          paperNameEN="Bachelor of Commerce in Accounting"
          duration="3年"
          enroll="2019年7月"
          fee="NZ $27，750，00"
          difficulties={3}
          ielts="6.5"
          city="奥克兰"
        />
      </Box>
    </Screen>
  );
};

export default SelectSchoolScreen;
