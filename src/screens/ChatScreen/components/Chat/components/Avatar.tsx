import React from 'react';
import Image from '../../../../../components/Image';
import { css } from '../../../../../styles/styledLib';
import robot from '../../../../../assets/robot.svg';

const Avatar = () => (
  <Image
    src={robot}
    height={50}
    mr={2}
    css={css`
      min-width: 50px;
    `}
  />
);

export default Avatar;
