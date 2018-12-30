import React, { useState, useRef } from 'react';
import Image from '../../../../../components/Image';
import Box from '../../../../../components/Box/Box';
import doubleDownArrowSVG from '../../../../../assets/doubleDownArrow.svg';
import { verticalScroll } from '../../../../../miscellaneous/utils';
import { css } from '../../../../../styles/styledLib';

export const DownArrow: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const ref = useRef<HTMLElement>();

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
        transform-origin: 0% 0px 0px;
      `}
      onClick={() => {
        verticalScroll(ref, isTop ? 'start' : 'end');
        setIsTop(!isTop);
      }}
    />
  );
};
