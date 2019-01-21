import React, { useState, useRef } from 'react';
import doubleDownArrowSVG from '../../../../../assets/doubleDownArrow.svg';
import { useScroll } from '../../../../../miscellaneous/hooks';
import { Image } from '../../../../../styles';

function isHalfInViewport(el: HTMLElement | null) {
  if (!el) return false;

  const bounding = el.getBoundingClientRect();
  const innerHeight =
    window.innerHeight ||
    document.documentElement.clientHeight;

  return (
    bounding.top >= 0 &&
    bounding.bottom - innerHeight <=
      bounding.height / 2
  );
}

export const DownArrow: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useScroll(() => {
    const footer = document.getElementById(
      'homepage-footer',
    );

    if (isHalfInViewport(footer)) {
      if (isTop) setIsTop(false);
    } else {
      if (!isTop) setIsTop(true);
    }
  });

  return (
    <Image
      src={doubleDownArrowSVG}
      height="2rem"
      position="absolute"
      transform={
        isTop ? 'rotate(0deg)' : 'rotate(180deg)'
      }
      css={`
        bottom: 1.5rem;
        cursor: pointer;
      `}
      onClick={() => {
        window.scrollTo({
          top: isTop ? window.innerHeight : 0,
          left: 0,
          behavior: 'smooth',
        });

        setIsTop(!isTop);
      }}
    />
  );
};
