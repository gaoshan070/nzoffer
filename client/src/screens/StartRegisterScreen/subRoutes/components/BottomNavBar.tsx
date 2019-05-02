import React from 'react';
import {
  Button as BaseButton,
  IButton as IBaseButton,
  Box,
} from '../../../../styles/rebase/components';
import { SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';
import { useHistory } from '../../../../miscellaneous/hooks';

interface IButton extends IBaseButton {
  hasBG: boolean;
}

const Button: React.FC<IButton> = ({ hasBG, children, ...rest }) => (
  <BaseButton
    bg={hasBG ? 'lightBlue' : 'white'}
    borderColor={'lightBlue'}
    border={1}
    color={hasBG ? 'white' : 'lightBlue'}
    {...rest}
  >
    {children}
  </BaseButton>
);

export interface IBottomNavBar {
  noContinueButton?: boolean;
  continueOnClick?: React.ReactEventHandler;
}

export const BottomNavBar: React.FC<IBottomNavBar> = ({
  noContinueButton,
  continueOnClick,
}) => {
  const history = useHistory();
  const isNotFirstStep =
    // @ts-ignore
    history.location.pathname.toLowerCase() !== ROUTES.BASIC_INFO.toLowerCase();

  return (
    <Box
      width={[0.9, 0.8, 0.45]}
      position="fixed"
      bottom="0px"
      borderColor="greyLine"
      pb={'12px'}
      justifyContent="between"
      zIndex={2}
    >
      {isNotFirstStep ? (
        <Button
          hasBG
          onClick={() => {
            history.go(-1);
          }}
          minHeight="32px"
          maxHeight="32px"
        >
          返回
        </Button>
      ) : (
        <Box />
      )}
      <Box gap={SPACE.medium}>
        {!noContinueButton && (
          <Button
            minHeight="32px"
            maxHeight="32px"
            onClick={continueOnClick}
            hasBG={false}
          >
            继续
          </Button>
        )}
      </Box>
    </Box>
  );
};
