import React from 'react';
import Image from '../../../../../components/Image';
import { css } from '../../../../../styles/styledLib';
import backButton from '../../../../../assets/arrowBack.svg';

const Avatar = () => (
  <Image
    src={backButton}
    bg="primary"
    height={50}
    mr={2}
    css={css`
      min-width: 50px;
    `}
  />
);

export default Avatar;
