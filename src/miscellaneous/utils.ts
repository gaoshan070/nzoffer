import { useState, useRef, useEffect } from 'react';
import { onChangeCallBackType } from '../components/Input';

export function useScrollIntoView() {
  const domRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setTimeout(() => {
      if (domRef.current) {
        domRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 540);
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
  callback: Function,
): React.RefObject<HTMLElement> => {
  const parentRefForOutsideClick = useRef<
    HTMLElement
  >();

  const onMouseDown: (e: MouseEvent) => void = (
    e: MouseEvent,
  ) => {
    const { current } = parentRefForOutsideClick;
    if (current && !current.contains(<Node>e.target)) {
      callback();
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
