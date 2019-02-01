import React, { memo } from 'react';
import {
  Box,
  Button,
  FONT_SIZE,
  Responsive,
  SPACE,
} from '../../../../../styles';

const TextLink: React.FC<{
  mt?: Responsive;
  text: string;
}> = ({ mt, text }) => {
  const mtP = { mt };
  if (!mt) delete mtP.mt;

  return (
    <Button
      {...mtP}
      fontWeight="regular"
      fontSize={FONT_SIZE.body}
      css={'box-shadow: none;'}
    >
      {text}
    </Button>
  );
};

const Links: React.FC = ({ children }) => (
  <Box width={['80%', '50%']} justifyContent="around">
    {children}
  </Box>
);

export const Footer = memo(() => {
  return (
    <>
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
          <TextLink text="关于我们" />
          <TextLink text="问答社区" />
          <TextLink text="线下活动" />
        </Links>
        <Links>
          <TextLink text="使用条款" />
          <TextLink text="隐私政策" />
          <TextLink text="投资合作" />
        </Links>
        <TextLink
          mt={[SPACE.xxxSmall, SPACE.xxSmall]}
          text="联系我们"
        />
      </Box>
      <Box
        width={1}
        p={SPACE.xxSmall}
        justifyContent="center"
        fontSize={FONT_SIZE.small}
        color="fontGrey"
      >
        浙ICP备19004647号 Offer111.com 版权所有
      </Box>
    </>
  );
});
