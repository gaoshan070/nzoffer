import { IBaseBox } from '../components';
import { LOADING_STATUS } from '../../../utils/constants';
type NullOrUndefined = null | undefined;

export const is = {
  function: (v: unknown): v is Function => typeof v === 'function',
  number: (v: unknown): v is number => typeof v === 'number',
  notExist: (v: unknown): v is NullOrUndefined => v === undefined || v === null,
  initial: (v: LOADING_STATUS) => v === LOADING_STATUS.INITIAL,
  loading: (v: LOADING_STATUS) => v === LOADING_STATUS.LOADING,
  loaded: (v: LOADING_STATUS) => v === LOADING_STATUS.LOADED,
};

export const getRefProp = (takeRef?: IBaseBox['ref']) =>
  takeRef
    ? {
        ref: takeRef,
      }
    : {};
