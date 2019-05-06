import React, { memo } from 'react';
import { ROUTES } from '../../../../../routes/routesConfig';
import { Box, Button, css, FONT_SIZE } from '../../../../../styles';
import { useHistory } from '../../../../../miscellaneous/hooks';

const HomePageButton: React.FC<{
  onClick?: React.ReactEventHandler;
}> = memo(({ onClick, children }) => (
  <Button
    onClick={onClick}
    width={['9rem', '11rem']}
    fontWeight="regular"
    fontSize={FONT_SIZE.bodyHeading}
    maxHeight="32px"
    minHeight="32px"
    noDefaultHoverCSS
    css={css`
      &:hover {
        color: #e75b41;
        background-color: white;
        transform: scale(1.1);
        text-shadow: none;
      }
    `}
    zIndex={2}
  >
    {children}
  </Button>
));

export const Buttons = memo(() => {
  const history = useHistory();
  return (
    <Box justifyContent="around" width={[0.8, 0.6, 0.4]}>
      <HomePageButton onClick={() => history.push(ROUTES.CHAT)}>
        我是新人
      </HomePageButton>
      <HomePageButton onClick={() => history.push(ROUTES.LOGIN)}>
        我已注册
      </HomePageButton>
    </Box>
  );
});
