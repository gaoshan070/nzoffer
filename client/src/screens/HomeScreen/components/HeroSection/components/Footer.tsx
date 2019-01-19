import React from 'react';
import {
  Box,
  Button,
  MarginPaddingType,
} from '../../../../../rebase/components';

const TextLink: React.FC<{
  mt?: MarginPaddingType;
  text: string;
}> = ({ mt, text }) => (
  <Button
    mt={mt}
    fontWeight="regular"
    fontSize="body"
    css={'box-shadow: none;'}
  >
    {text}
  </Button>
);

const Links: React.FC = ({ children }) => (
  <Box width={['80%', '50%']} justifyContent="around">
    {children}
  </Box>
);

export const Footer = () => (
  <Box
    id="homepage-footer"
    width={1}
    direction="column"
    bg="primary"
    color="white1"
    justifyContent="center"
    alignItems="center"
    py={['small', 'medium']}
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
      mt={['small', 'medium']}
      text="联系我们"
    />
  </Box>
);
