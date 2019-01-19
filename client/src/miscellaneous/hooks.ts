import React, { useState, useEffect } from 'react';

export function verticalScrollInToView(
  ref: React.RefObject<HTMLElement>,
  to: ScrollIntoViewOptions['block'] = 'start',
) {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: to,
      inline: 'start',
    });
  }
}

export function useScroll(callback: EventListener) {
  useEffect(() => {
    window.addEventListener('scroll', callback);

    return () => {
      window.removeEventListener('scroll', callback);
    };
  });
}

export function useScrollIntoView(
  domRef: React.RefObject<HTMLElement>,
  to: ScrollIntoViewOptions['block'] = 'start',
  timeout: number = 540,
) {
  useEffect(() => {
    setTimeout(() => {
      verticalScrollInToView(domRef, to);
    }, timeout);
  });

  return domRef;
}

export const useField = (
  defaultValue: string,
): [string, React.ReactEventHandler] => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (
    e: React.FormEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  return [value, onChange];
};

export const useClickOutside = (
  parentRef: React.RefObject<HTMLElement>,
  callback: (target: EventTarget | null) => void,
) => {
  const onMouseDown: (e: MouseEvent) => void = (
    e: MouseEvent,
  ) => {
    const { current } = parentRef;

    const isTouch = !!(
      'ontouchstart' in window ||
      // @ts-ignore
      (window.DocumentTouch &&
        // @ts-ignore
        document instanceof window.DocumentTouch)
    );

    if (
      !(e.type === 'click' && isTouch) &&
      !(current && current.contains(<Node>e.target))
    ) {
      callback(e.target);
    }
  };

  useEffect(() => {
    window.document.addEventListener(
      'mousedown',
      onMouseDown,
    );

    return () => {
      window.document.removeEventListener(
        'mousedown',
        onMouseDown,
      );
    };
  });
};
