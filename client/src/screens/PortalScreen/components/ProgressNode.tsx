import React from 'react';
import { Box, Text, Image, FONT_SIZE } from '../../../styles';
import tick from '../../../assets/tick.svg';
import { observer } from 'mobx-react-lite';

export const ProgressNode: React.FC<{
  isFinished: boolean;
  text: string;
}> = observer(({ isFinished, text }) => {
  return (
    <Box
      direction="column"
      alignItems="center"
      justifyContent="center"
      zIndex={3}
      bg="transparent"
    >
      <Box
        width="38px"
        height="38px"
        alignItems="center"
        justifyContent="center"
        bg="white"
      >
        {isFinished ? (
          <Image zIndex={3} src={tick} width="38px" height="38px" bg="white" />
        ) : (
          <Box
            borderRadius="50%"
            border={1}
            borderColor="primary"
            width={'38px'}
            height={'38px'}
          />
        )}{' '}
      </Box>
      <Text fontWeight="light" size={FONT_SIZE.bodyHeading} mt="8px">
        {text}
      </Text>
    </Box>
  );
});
