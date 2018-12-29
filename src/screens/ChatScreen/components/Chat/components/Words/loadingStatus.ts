import { useState } from 'react';

export const WORDS_LOADING_STATUS = {
  NORMAL: 0,
  WRITING: 1,
  TYPING: 2,
};

export const useLoadingStatus = (): number => {
  const [loadingStatus, setLoadingStatus] = useState(
    WORDS_LOADING_STATUS.NORMAL,
  );

  if (loadingStatus === WORDS_LOADING_STATUS.NORMAL) {
    setLoadingStatus(WORDS_LOADING_STATUS.WRITING);
    setTimeout(
      () =>
        setLoadingStatus(WORDS_LOADING_STATUS.TYPING),
      1800,
    );
  }

  return loadingStatus;
};
