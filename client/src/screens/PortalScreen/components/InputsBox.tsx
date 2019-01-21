import React, { useState } from 'react';
import { DropDownArrow } from '../../../components/DropDown/DropDownArrow';
import { DropDownAnimation } from '../../../components/DropDown/DropDown.animation';
import { Box, Text } from '../../../styles/';
import {
  FONT_SIZE,
  SPACE,
} from '../../../styles/rebase/styles';

export const InputsBox: React.FC<{
  label: string;
  height?: string;
  shouldOpen?: boolean;
}> = ({ label, height, shouldOpen, children }) => {
  const [isOpen, setIsOpen] = useState(
    shouldOpen || false,
  );

  function onClick(e: React.MouseEvent) {
    e.stopPropagation();
    setIsOpen(v => !v);
  }

  return (
    <Box
      my={SPACE.medium}
      direction="column"
      justifyContent={isOpen ? 'start' : 'center'}
      bg="white1"
      width={['80vw', '40rem']}
      px={[SPACE.medium, SPACE.large]}
      py={isOpen ? SPACE.large : SPACE.medium}
      border="primary"
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
        <Text
          color="primary"
          fontSize={FONT_SIZE.sectionHeading}
          fontWeight="bold"
          alignItems="center"
        >
          {label + '：'}
        </Text>
        <DropDownArrow isOpen={isOpen} />
      </Box>
      <DropDownAnimation
        noOriginalStyle
        isOpen={isOpen}
        style={{
          boxShadow: 'none',
        }}
      >
        <Box
          direction="column"
          mt={SPACE.small}
          gap={SPACE.medium}
        >
          {React.Children.map(
            children,
            (item, index) =>
              React.isValidElement(item) ? item : null,
          )}
        </Box>
      </DropDownAnimation>
    </Box>
  );
};
