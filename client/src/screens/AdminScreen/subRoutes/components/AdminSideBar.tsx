import React from 'react';
import { RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Box, COLORS, SPACE, FONT_SIZE } from '../../../../styles';
import LinkButton from '../../../../components/LinkButton';
import { ROUTES } from '../../../../routes/routesConfig';

const RouteButton: React.FC<{
  history: RouteComponentProps['history'];
  toPath: string;
}> = ({ children, history, toPath }) => {
  const currentPath = history.location.pathname;
  const isMatch = currentPath === toPath;

  return (
    <LinkButton
      bg={COLORS.primary}
      color={COLORS.white1}
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '16px',
        paddingLeft: 0,
        paddingRight: 0,
      }}
      onClick={() => {
        history.push(toPath);
      }}
    >
      {isMatch ? `> ${children} <` : children}
    </LinkButton>
  );
};

export const AdminSideBar: React.FC<{
  history: RouteComponentProps['history'];
}> = observer(({ history }) => {
  return (
    <Box
      width={1}
      bg={COLORS.primary}
      direction="column"
      py={SPACE.medium}
      px={SPACE.large}
      gap={SPACE.large}
    >
      <RouteButton toPath={ROUTES.ADMIN_NZ_STUDY_AREA} history={history}>
        NZ专业列表
      </RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL} history={history}>
        NZ专业细分列表
      </RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_CN_STUDY_AREA} history={history}>
        国内对应专业列表
      </RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_UNIVERSITIES} history={history}>
        大学列表
      </RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_LANGUAGES} history={history}>
        语言列表
      </RouteButton>
    </Box>
  );
});
