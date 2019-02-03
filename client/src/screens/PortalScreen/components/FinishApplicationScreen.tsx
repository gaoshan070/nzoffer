import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Screen from '../../../components/Screen';
import {
  Box,
  Text,
  Heading,
  SPACE,
  FONT_SIZE,
} from '../../../styles';
import bg from '../../../assets/selection-ok.jpg';
import LinkButton from '../../../components/LinkButton';
import { ROUTES } from '../../../routes/routesConfig';
import { fullscreenCSS } from '../../../styles/constants';

export const FinishApplicationScreen: React.FC<
  RouteComponentProps
> = ({ history }) => {
  return (
    <Screen>
      <Box
        direction="column"
        justifyContent="center"
        alignItems="center"
        width={1}
        px={SPACE.small}
        css={`
          background: url(${bg});
          background-size: cover;
          ${fullscreenCSS};
        `}
      >
        <Box
          bg="white"
          opacity={0.8}
          direction="column"
          alignItems="center"
          px={SPACE.large}
          py={SPACE.large}
        >
          <Heading
            size={FONT_SIZE.mainHeading}
            color="primary"
            fontWeight="medium"
          >
            祝贺你的offer申请成功完成
          </Heading>
          <Text size={FONT_SIZE.bodyHeading}>
            Offer111.com会通过你所提供的邮箱通知你最新申请进展。
          </Text>
          <Text
            size={FONT_SIZE.bodyHeading}
            mb={SPACE.medium}
          >
            你也可以随时来
            <LinkButton
              toRoute={ROUTES.PORTAL}
              isReplace
            >
              个人主页
            </LinkButton>
            查看或更新你的状态哦 :)
          </Text>
        </Box>
      </Box>
    </Screen>
  );
};
