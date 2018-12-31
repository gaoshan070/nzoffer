import { useState, useRef, useEffect } from 'react';
import { onChangeCallBackType } from '../components/Input';

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
  to: ScrollIntoViewOptions['block'] = 'start',
  timeout: number = 540,
) {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      verticalScrollInToView(domRef, to);
    }, timeout);
  });

  return domRef;
}

export const useField = (
  defaultValue: string,
): [string, onChangeCallBackType] => {
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
  callback: (target: EventTarget | null) => void,
): React.RefObject<HTMLElement> => {
  const parentRefForOutsideClick = useRef<HTMLElement>(
    null,
  );

  const onMouseDown: (e: MouseEvent) => void = (
    e: MouseEvent,
  ) => {
    const { current } = parentRefForOutsideClick;
    if (current && !current.contains(<Node>e.target)) {
      callback(e.target);
    }
  };

  useEffect(
    () => {
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
    },
    [parentRefForOutsideClick],
  );

  return parentRefForOutsideClick;
};
