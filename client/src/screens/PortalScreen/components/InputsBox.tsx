import React, { useState } from 'react';
import { DropDownArrow } from '../../../components/DropDown/DropDownArrow';
import { DropDownAnimation } from '../../../components/DropDown/DropDown.animation';
import { Box, Text, FONT_SIZE, SPACE } from '../../../styles/';

export const InputsBox: React.FC<{
  label: string;
  height?: string;
  shouldOpen?: boolean;
  hideOpenButton?: boolean;
}> = ({ label, height, hideOpenButton, shouldOpen, children }) => {
  const [isOpen, setIsOpen] = useState(shouldOpen || false);

  function onClick(e: React.MouseEvent) {
    if (!hideOpenButton) {
      e.stopPropagation();
      setIsOpen(v => !v);
    }
  }

  return (
    <Box
      my={SPACE.xxSmall}
      direction="column"
      justifyContent={isOpen ? 'start' : 'center'}
      bg="white1"
      width={['95%', '400px']}
      px={SPACE.xxSmall}
      py={isOpen ? SPACE.xxSmall : SPACE.xxxSmall}
      borderColor="primary"
      border={1}
      position="relative"
      boxShadow={0}
      cursor={isOpen ? 'auto' : 'pointer'}
      onClick={isOpen ? undefined : onClick}
    >
      <Box
        onClick={onClick}
        alignItems="center"
        justifyContent="between"
        cursor="pointer"
      >
        <Text color="primary" fontSize={'16px'} alignItems="center">
          {label + '：'}
        </Text>
        {!hideOpenButton && <DropDownArrow isOpen={isOpen} />}
      </Box>
      <DropDownAnimation
        noOriginalStyle
        isOpen={isOpen}
        style={{
          boxShadow: 'none',
        }}
      >
        <Box direction="column" mt={SPACE.small} gap={[SPACE.xSmall]}>
          {React.Children.map(children, (item, index) =>
            React.isValidElement(item) ? item : null,
          )}
        </Box>
      </DropDownAnimation>
    </Box>
  );
};
