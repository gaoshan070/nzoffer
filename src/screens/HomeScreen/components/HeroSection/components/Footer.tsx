import React from 'react';
import { Box } from '../../../../../components/Box/Box';
import { Button } from '../../../../../components/Button/Button';

const TextLink: React.FC<{
  mt?: number | number[];
  text: string;
}> = ({ mt, text }) => (
  <Button
    mt={mt}
    fontWeight={300}
    fontSize={0}
    text={text}
  />
);

const Links: React.FC = ({ children }) => (
  <Box
    width={['80%', '50%']}
    justifyContent="space-around"
  >
    {children}
  </Box>
);

export const Footer = () => (
  <Box
    width={1}
    flexDirection="column"
    bg="primary"
    color="white"
    justifyContent="center"
    alignItems="center"
    py={[5, 7]}
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
    <TextLink mt={[5, 7]} text="联系我们" />
  </Box>
);
