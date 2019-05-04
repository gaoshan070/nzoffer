import React from 'react';
import { Box, SPACE, Heading, FONT_SIZE } from '../../styles';
import Screen from '../../components/Screen';
import { observer } from 'mobx-react-lite';

export const ContentScreenWrapper: React.FC<{ pageTitle: string }> = observer(
  ({ pageTitle, children }) => (
    <Screen>
      <Box
        pt="2rem"
        pb="64px"
        width={1}
        px={[SPACE.xSmall, SPACE.xLarge, '28%']}
        direction="column"
        overflowY="auto"
        height="96vh"
        css={{
          lineHeight: 1.05,
        }}
      >
        <Heading textAlign="center" width={1} size={FONT_SIZE.pageHeading}>
          {pageTitle}
        </Heading>
        {children}
      </Box>
    </Screen>
  ),
);
