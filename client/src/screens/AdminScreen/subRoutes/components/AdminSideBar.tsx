import React from 'react';
import { RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Box, COLORS, SPACE, FONT_SIZE } from '../../../../styles';
import LinkButton from '../../../../components/LinkButton';
import { ROUTES } from '../../../../routes/routesConfig';
import { useHistory } from '../../../../miscellaneous/hooks';

const RouteButton: React.FC<{
  toPath: string;
}> = ({ children, toPath }) => {
  const history = useHistory();
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

export const AdminSideBar: React.FC = observer(() => {
  return (
    <Box
      width={1}
      bg={COLORS.primary}
      direction="column"
      py={SPACE.medium}
      px={SPACE.large}
      gap={SPACE.large}
    >
      <RouteButton toPath={ROUTES.ADMIN_NZ_STUDY_AREA}>
        NZ学习领域列表
      </RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_NZ_STUDY_AREA_DETAIL}>
        NZ学习领域细分列表
      </RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_CN_STUDY_AREA}>
        国内对应专业列表
      </RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_UNIVERSITIES}>大学列表</RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_LANGUAGES}>语言列表</RouteButton>
    </Box>
  );
});
