import React, { useState } from 'react';
import { DropDownArrow } from '../../../components/DropDown/DropDownArrow';
import { DropDownAnimation } from '../../../components/DropDown/DropDown.animation';
import { Box, Text } from '../../../rebase/components';

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
      my="large"
      direction="column"
      justifyContent={isOpen ? 'start' : 'center'}
      bg="white1"
      width={['80vw', '40rem']}
      px={['medium', 'xlarge']}
      py={isOpen ? 'large' : 'medium'}
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
        justifyContent="between"
        cursor="pointer"
      >
        <Text
          color="primary"
          fontSize="sectionHeading"
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
          top: '6rem',
          left: 0,
          border: 'none',
          height: 'max-content',
          maxHeight: 'inherit',
          boxShadow: 'none',
          width: '100%',
        }}
      >
        <Box
          direction="column"
          justifyContent="between"
          px={['medium', 'large']}
        >
          {React.Children.map(
            children,
            (item, index) =>
              React.isValidElement(item) ? (
                <Box
                  mb={
                    index + 1 === childrenCount
                      ? 'none'
                      : 'xlarge'
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
