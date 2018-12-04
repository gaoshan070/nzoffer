import { useRef, useEffect } from 'react';

export function useScrollIntoView() {
  const domRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setTimeout(() => {
      if (domRef.current) {
        domRef.current.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
        });
      }
    }, 540);
  });

  return domRef;
}
