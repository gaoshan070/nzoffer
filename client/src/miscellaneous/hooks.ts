import React, { useState, useContext, useRef, useEffect } from 'react';
import { RegStoreUpdateKeys, RegStore } from '../store/RegStore';
import { StoreContext } from '../store/store.context';
import { LOADING_STATUS } from '../components/UploadFile';
import Alert from 'react-s-alert';
import { RouteComponentProps } from 'react-router';

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

export function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  // @ts-ignore
  const ref = useRef<T>();

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

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  return [value, onChange];
};

export const useClickOutside = (
  parentRef: React.RefObject<HTMLElement>,
  callback: (target: EventTarget | null) => void,
) => {
  const onMouseDown: (e: MouseEvent) => void = (e: MouseEvent) => {
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
    window.document.addEventListener('mousedown', onMouseDown);

    return () => {
      window.document.removeEventListener('mousedown', onMouseDown);
    };
  });
};

export function useRegStoreField<T>(
  key: RegStoreUpdateKeys,
): [T, React.ReactEventHandler] {
  const { regStore } = useContext(StoreContext);

  const onChange = (e: React.SyntheticEvent) => {
    regStore.update(key, (e.currentTarget as HTMLInputElement).value);
  };

  // @ts-ignore
  return [regStore[key], onChange];
}

export function useRegStoreDropDown<T>(
  key: RegStoreUpdateKeys,
): [T, (value: string) => void] {
  const { regStore } = useContext(StoreContext);

  const onChange = (value: string) => {
    regStore.update(key, value);
  };

  // @ts-ignore
  return [regStore[key], onChange];
}

export function usePromise<T>({
  asyncFunc,
  afterLoaded,
}: {
  asyncFunc: () => Promise<T>;
  afterLoaded?: (result: T) => void;
}): [LOADING_STATUS, T | null, Error | null, () => Promise<void>] {
  const [loadingStatus, setLoadingStatus] = useState(LOADING_STATUS.INITIAL);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getResult = async () => {
    setLoadingStatus(LOADING_STATUS.LOADING);
    setError(null);

    try {
      const response = await asyncFunc();
      setResult(response);
      setLoadingStatus(LOADING_STATUS.LOADED);
      if (typeof afterLoaded === 'function') {
        afterLoaded(response);
      }
    } catch (e) {
      setError(e);
      setLoadingStatus(LOADING_STATUS.FAILED);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.error(error.message);
    }
  }, [error]);

  return [loadingStatus, result, error, getResult];
}

export function useHistory(): RouteComponentProps['history'] {
  return useContext(StoreContext).history;
}

export function useComponentDidUpdate(func: () => Promise<any> | void) {
  useEffect(() => {
    (async function() {
      func();
    })();
  });
}
