import React, {
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react';
import { RegStoreUpdateKeys } from '../store/RegStore';
import { StoreContext } from '../store/store.context';

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

export function usePrevious(value: unknown) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  // @ts-ignore
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
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

export function useRegStoreField(
  key: RegStoreUpdateKeys,
): [string, React.ReactEventHandler] {
  const { regStore } = useContext(StoreContext);

  const onChange: React.ReactEventHandler = e => {
    regStore.update(
      key,
      (e.currentTarget as HTMLInputElement).value,
    );
  };

  return [regStore[key], onChange];
}
