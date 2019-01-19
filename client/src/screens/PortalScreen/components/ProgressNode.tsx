import React from 'react';
import {
  Box,
  Text,
  Image,
  Paragraph,
  Heading,
  Input,
} from '../../../rebase/components';
import { SIZES } from '../../../rebase/styles';
import tick from '../../../assets/tick.svg';

export const ProgressNode: React.FC<{
  isFinished: boolean;
  text: string;
}> = ({ isFinished, text }) => (
  <Box direction="column" alignItems="center">
    {isFinished ? (
      <Image
        src={tick}
        width={SIZES.medium}
        height={SIZES.medium}
      />
    ) : (
      <Box
        width={SIZES.medium}
        alignItems="center"
        justifyContent="center"
        height={SIZES.medium}
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
    <Text fontWeight="light" size="bodyHeading">
      {text}
    </Text>
  </Box>
);
