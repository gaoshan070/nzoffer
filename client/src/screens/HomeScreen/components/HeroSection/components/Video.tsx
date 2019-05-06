import React, { memo } from 'react';
// @ts-ignore
import video from '../../../../../assets/bgvideo.mp4';
import bg from '../../../../../assets/homepage-bg.png';

export const Video: React.FC = memo(() => (
  <video
    autoPlay
    playsInline
    loop
    muted
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
));
