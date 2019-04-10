import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Button as BaseButton,
  IButton as IBaseButton,
  Box,
} from '../../../../styles/rebase/components';
import { SPACE } from '../../../../styles';
import { ROUTES } from '../../../../routes/routesConfig';

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

export const BottomNavBar: React.FC<{
  noContinueButton?: boolean;
  noSaveButton?: boolean;
  continueOnClick: React.ReactEventHandler;
  saveOnClick?: React.ReactEventHandler;
  history: RouteComponentProps['history'];
}> = ({
  noContinueButton,
  history,
  noSaveButton,
  continueOnClick,
  saveOnClick,
}) => {
  const isNotFirstStep =
    // @ts-ignore
    history.location.pathname !== ROUTES.BASIC_INFO;

  return (
    <Box
      width={[0.9, 0.8, 0.4]}
      position="fixed"
      bottom={0}
      // borderTop="2px solid"
      borderColor="greyLine"
      py={'12px'}
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
        {/*{!noSaveButton && (*/}
        {/*<Button*/}
        {/*minHeight="32px"*/}
        {/*maxHeight="32px"*/}
        {/*hasBG={false}*/}
        {/*onClick={saveOnClick || (() => 0)}*/}
        {/*>*/}
        {/*保存*/}
        {/*</Button>*/}
        {/*)}*/}
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
