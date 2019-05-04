import React, { memo } from 'react';
import {
  Box,
  Button,
  FONT_SIZE,
  Responsive,
  SPACE,
} from '../../../../../styles';
import { useHistory } from '../../../../../miscellaneous/hooks';
import { ROUTES } from '../../../../../routes/routesConfig';

const TextLink: React.FC<{
  mt?: Responsive;
  text: string;
  route?: string;
}> = ({ mt, text, route }) => {
  const history = useHistory();
  const mtP = { mt };
  if (!mt) delete mtP.mt;

  const onClick = route
    ? () => {
        history.push(route);
      }
    : (x: unknown) => x;

  return (
    <Button
      {...mtP}
      fontWeight="regular"
      fontSize={FONT_SIZE.body}
      css={'box-shadow: none;'}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

const Links: React.FC = ({ children }) => (
  <Box width={['100%', '50%']} justifyContent="around">
    {children}
  </Box>
);

export const Footer = memo(() => {
  return (
    <Box direction="column">
      <Box
        id="homepage-footer"
        width={1}
        direction="column"
        bg="primary"
        color="white1"
        justifyContent="center"
        alignItems="center"
        gap={SPACE.xxxxSmall}
        py={[SPACE.small, SPACE.small]}
      >
        <Links>
          <TextLink text="关于我们" route={ROUTES.ABOUT_US} />
          <TextLink text="问答社区" />
          <TextLink text="线下活动" />
        </Links>
        <Links>
          <TextLink text="使用条款" />
          <TextLink text="隐私政策" />
          <TextLink text="投资合作" />
        </Links>
        <TextLink mt={[SPACE.xxxSmall, SPACE.xxSmall]} text="联系我们" />
      </Box>
      <Box
        width={1}
        p={SPACE.xxSmall}
        justifyContent="center"
        fontSize={FONT_SIZE.small}
        color="fontGrey"
      >
        浙ICP备19004647号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;offer111.com&nbsp;&nbsp;版权所有
      </Box>
    </Box>
  );
});
