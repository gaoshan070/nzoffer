import React from 'react';
import robot from '../../../../../assets/robot.svg';
import { Image } from '../../../../../styles';

const Avatar = () => (
  <Image
    src={robot}
    height={50}
    mr="small"
    minWidth="50px"
  />
);

export default Avatar;
