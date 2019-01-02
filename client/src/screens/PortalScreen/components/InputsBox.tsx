import React, { useState } from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import { DropDownArrow } from '../../../components/DropDown/DropDownArrow';
import { DropDownAnimation } from '../../../components/DropDown/DropDown.animation';
import theme from '../../../styles/theme';

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

  const childrenCount = React.Children.count(children);

  return (
    <Box
      my={5}
      flexDirection="column"
      justifyContent={isOpen ? 'flex-start' : 'center'}
      bg="white1"
      width={[1, '40rem']}
      px={7}
      py={isOpen ? 6 : 5}
      height={isOpen ? height : 'auto'}
      border="primary"
      position="relative"
      boxShadow={0}
      cursor={isOpen ? 'auto' : 'pointer'}
      onClick={isOpen ? undefined : onClick}
    >
      <Box
        onClick={onClick}
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Text
          color="primary"
          fontSize="2"
          fontWeight="bold"
          alignItems="center"
        >
          {label + '：'}
        </Text>
        <DropDownArrow isOpen={isOpen} />
      </Box>
      <DropDownAnimation
        isOpen={isOpen}
        style={{
          paddingLeft: theme.space[7],
          paddingRight: theme.space[7],
          top: '6rem',
          left: 0,
          border: 'none',
          height: 'max-content',
          maxHeight: 'inherit',
          boxShadow: 'none',
        }}
      >
        <Box
          flexDirection="column"
          justifyContent="space-between"
        >
          {React.Children.map(
            children,
            (item, index) =>
              React.isValidElement(item) ? (
                <Box
                  mb={
                    index + 1 === childrenCount ? 0 : 7
                  }
                >
                  {item}
                </Box>
              ) : null,
          )}
        </Box>
      </DropDownAnimation>
    </Box>
  );
};
