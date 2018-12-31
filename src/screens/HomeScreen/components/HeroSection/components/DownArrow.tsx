import React, { useState, useRef } from 'react';
import Image from '../../../../../components/Image';
import doubleDownArrowSVG from '../../../../../assets/doubleDownArrow.svg';
import { css } from '../../../../../styles/styledLib';
import { useScroll } from '../../../../../miscellaneous/hooks';

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
  const ref = useRef<HTMLElement>(null);

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
      ref={ref}
      src={doubleDownArrowSVG}
      height="2rem"
      position="absolute"
      css={css`
        bottom: 1.5rem;
        cursor: pointer;

        transform: ${() =>
          isTop ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.3s ease;
      `}
      onClick={() => {
        window.scrollTo({
          top: isTop ? 999999 : 0,
          behavior: 'smooth',
        });

        setIsTop(!isTop);
      }}
    />
  );
};
