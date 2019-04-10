import React from 'react';
import {
  Box,
  Text,
  Image,
  Paragraph,
  Heading,
  Input,
  SIZE,
  FONT_SIZE,
} from '../../../styles';
import tick from '../../../assets/tick.svg';

export const ProgressNode: React.FC<{
  isFinished: boolean;
  text: string;
}> = ({ isFinished, text }) => (
  <Box direction="column" alignItems="center" zIndex={3} bg="transparent">
    <Box
      width={SIZE.small}
      alignItems="center"
      justifyContent="center"
      height={SIZE.medium}
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
    <Text fontWeight="light" size={FONT_SIZE.bodyHeading}>
      {text}
    </Text>
  </Box>
);
