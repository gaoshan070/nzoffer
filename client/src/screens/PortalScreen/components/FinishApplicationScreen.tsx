import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Screen from '../../../components/Screen';
import {
  Box,
  Text,
  Heading,
  SPACE,
  FONT_SIZE,
  FlatButton,
  COLORS,
} from '../../../styles';
import bg from '../../../assets/selection-ok.jpg';
import LinkButton from '../../../components/LinkButton';
import { ROUTES } from '../../../routes/routesConfig';
import { fullscreenCSS } from '../../../styles/constants';
import { feathersApp } from '../../../utils/feathers';
import { observer } from 'mobx-react-lite';

export const FinishApplicationScreen: React.FC<RouteComponentProps> = observer(
  ({ history }) => {
    return (
      <Screen hasExitButton>
        <Box
          direction="column"
          alignItems="center"
          justifyContent="center"
          width={1}
          px={SPACE.small}
          css={`
            background: url(${bg});
            background-size: cover;
            ${fullscreenCSS};
          `}
          height="100vh"
        >
          <Box
            bg="white"
            opacity={0.8}
            direction="column"
            alignItems="center"
            justifyContent="center"
            px={SPACE.small}
            py={SPACE.xxxSmall}
          >
            <Heading
              size={FONT_SIZE.pageHeading}
              color="primary"
              fontWeight={900}
            >
              祝贺你的<span style={{ fontWeight: 100 }}> offer申请 </span>
              成功递交
            </Heading>
            <Text size="18px">
              <span
                style={{
                  color: COLORS.primary,
                  marginRight: '4px',
                }}
              >
                offer111.com
              </span>
              会通过你所提供的邮箱通知你最新申请进展
            </Text>
            <Text size="18px" mt="16px" mb={SPACE.medium}>
              你也可以随时来到
              <LinkButton
                fontSize="20px"
                fontWeight={700}
                toRoute={ROUTES.PORTAL}
                isReplace
              >
                个人主页
              </LinkButton>
              查看或更新你的状态
            </Text>
          </Box>
        </Box>
      </Screen>
    );
  },
);
