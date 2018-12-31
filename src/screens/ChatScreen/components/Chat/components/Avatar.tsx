import React from 'react';
import Image from '../../../../../components/Image';
import robot from '../../../../../assets/robot.svg';

const Avatar = () => (
  <Image
    src={robot}
    height={50}
    mr={2}
    minWidth="50px"
  />
);

export default Avatar;
