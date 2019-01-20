import React from 'react';
// @ts-ignore
import video from '../../../../../assets/video.mp4';
import bg from '../../../../../assets/homepage-bg.jpg';

export const Video: React.FC = () => (
  // @ts-ignore
  <video
    autoPlay
    playsInline
    loop
    muted
    src={video}
    poster={bg}
    style={{
      position: 'absolute',
      right: 0,
      bottom: 0,
      minWidth: '100%',
      minHeight: '100%',
      zIndex: 0,
      backgroundSize: '100% 100%',
      objectFit: 'cover',
    }}
  >
    <source src={video} type="video/mp4" />
  </video>
);
