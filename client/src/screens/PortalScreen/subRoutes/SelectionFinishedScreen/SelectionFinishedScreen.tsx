import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Screen from '../../../../components/Screen';
import { schools } from '../SelectSchoolScreen/SelectSchoolScreen';
import {
  Box,
  Text,
  Heading,
} from '../../../../rebase/components';
import bg from '../../../../assets/selection-ok.jpg';
import LinkButton from '../../../../components/LinkButton';
import { ROUTES } from '../../../../routes/routesConfig';

const otago = schools[2];

export const SelectionFinishedScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  return (
    <Screen>
      <Box
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={1}
        px="small"
        css={{
          background: `url(${bg})`,
          backgroundSize: 'cover',
        }}
      >
        <Box
          bg="white"
          opacity={0.8}
          direction="column"
          alignItems="center"
          px="xlarge"
          py="large"
        >
          <Heading
            size="mainHeading"
            color="primary"
            fontWeight="medium"
          >
            祝贺你的offer申请成功完成
          </Heading>
          <Text size="bodyHeading">
            Offer111.com会通过你所提供的邮箱通知你最新申请进展。
          </Text>
          <Text size="bodyHeading" mb="medium">
            你也可以随时来
            <LinkButton toRoute={ROUTES.PORTAL}>
              个人主页
            </LinkButton>
            查看或更新你的状态哦 :)
          </Text>
        </Box>
      </Box>
    </Screen>
  );
};
