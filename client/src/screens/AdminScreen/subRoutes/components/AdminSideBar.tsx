import React from 'react';
import { RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Box, COLORS, SPACE, FONT_SIZE } from '../../../../styles';
import LinkButton from '../../../../components/LinkButton';
import { ROUTES } from '../../../../routes/routesConfig';
import { useHistory } from '../../../../miscellaneous/hooks';
import { scale } from 'style-value-types';

const RouteButton: React.FC<{
  toPath: string;
}> = ({ children, toPath }) => {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const isMatch =
    currentPath === toPath ||
    currentPath === toPath + '/new' ||
    currentPath.startsWith(toPath + '/edit');

  return (
    <LinkButton
      bg={COLORS.primary}
      color={COLORS.white1}
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: '16px',
        paddingLeft: 0,
        paddingRight: 0,
        fontStyle: isMatch ? 'italic' : 'none',
        fontWeight: isMatch ? 900 : 100,
        transform: isMatch ? 'scale(1.0)' : 'scale(1)',

        '&:active': {
          transform: `scale(1) translate(1px, 1px)`,
        },
      }}
      onClick={() => {
        history.push(toPath);
      }}
    >
      {isMatch ? `[${children}]` : children}
    </LinkButton>
  );
};

export const AdminSideBar: React.FC = observer(() => {
  return (
    <Box
      width={1}
      bg={COLORS.primary}
      direction="column"
      alignItems="center"
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
      <RouteButton toPath={ROUTES.ADMIN_PROGRAMME}>专业课列表</RouteButton>
      <RouteButton toPath={ROUTES.ADMIN_LANGUAGES}>语言课列表</RouteButton>
    </Box>
  );
});
