import React from 'react';
import robot from '../../../../../assets/robot.svg';
import { Image, SPACE } from '../../../../../styles';

const Avatar = () => (
  <Image src={robot} height={50} mr={SPACE.xxSmall} minWidth="50px" />
);

export default Avatar;
