import React from 'react';
import { Box, css, CSSType, SPACE, IBox, FlatButton } from '../styles';
import Header from './Header/Header';
import { ROUTES } from '../routes/routesConfig';
import { feathersApp } from '../utils/feathers';
import { useHistory } from '../miscellaneous/hooks';

const getBoxStyle = (merge?: CSSType) => css`
  display: flex;
  justify-content: center;
  ${merge ? merge : ''};
`;

interface IScreen {
  css?: CSSType;
  title?: string;
  headerBox?: () => React.ReactNode;
  hasExitButton?: boolean;
}

const ExitButton: React.FC = () => {
  const history = useHistory();
  return (
    <FlatButton
      fontSize="16px"
      fontWeight="900"
      color="lightBlue"
      onClick={() => {
        // @ts-ignore
        history.push(ROUTES.HOME);
        feathersApp.logout();
      }}
    >
      退 出
    </FlatButton>
  );
};

const getExitButton = () => <ExitButton />;

export const Screen: React.FC<IScreen & IBox> = ({
  title = '',
  hasExitButton,
  headerBox,
  children,
  css,
  ...rest
}) => (
  <Box width={1} direction="column" alignItems="center" {...rest}>
    <Header
      title={title}
      headerBox={hasExitButton ? getExitButton : headerBox}
    />
    <Box pt={SPACE.medium} width={1} css={getBoxStyle(css)}>
      {children}
    </Box>
  </Box>
);

export default Screen;
