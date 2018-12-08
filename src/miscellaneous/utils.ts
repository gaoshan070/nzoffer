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
