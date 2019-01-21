import React from 'react';
import {
  Box,
  Text,
  Image,
  Paragraph,
  Heading,
  Input,
  SIZE,
} from '../../../styles';
import tick from '../../../assets/tick.svg';
import { FONT_SIZE } from '../../../styles/rebase/styles';

export const ProgressNode: React.FC<{
  isFinished: boolean;
  text: string;
}> = ({ isFinished, text }) => (
  <Box direction="column" alignItems="center">
    {isFinished ? (
      <Image
        src={tick}
        width={SIZE.medium}
        height={SIZE.medium}
      />
    ) : (
      <Box
        width={SIZE.medium}
        alignItems="center"
        justifyContent="center"
        height={SIZE.medium}
      >
        <Box
          borderRadius="50%"
          border={1}
          borderColor="primary"
          width={'46px'}
          height={'46px'}
        />
      </Box>
    )}
    <Text
      fontWeight="light"
      size={FONT_SIZE.bodyHeading}
    >
      {text}
    </Text>
  </Box>
);
