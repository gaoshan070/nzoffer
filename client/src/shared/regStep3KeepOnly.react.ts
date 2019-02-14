import { uiState, getCaseNum } from './regStep3UIState';
import { RegStore } from '../store/RegStore';
import { runInAction } from 'mobx';

const arrDiff = (a1: string[], a2: string[]) => {
  const a: string[] = [];
  const diff: string[] = [];

  for (let i = 0; i < a1.length; i++) {
    // @ts-ignore
    a[a1[i]] = true;
  }

  for (let i1 = 0; i1 < a2.length; i1++) {
    // @ts-ignore
    if (a[a2[i1]]) {
      // @ts-ignore
      delete a[a2[i1]];
    } else {
      // @ts-ignore
      a[a2[i1]] = true;
    }
  }

  for (let k in a) {
    diff.push(k);
  }

  return diff;
};

export const keepCaseOnly = (regStore: RegStore) => {
  const caseToKeep = getCaseNum(
    regStore.isDegreeGetInChina,
    regStore.chinaDegree,
  ).toString();

  let allCases = [
    ...uiState.case1,
    ...uiState.case2,
    ...uiState.case3,
    ...uiState.case4,
    ...uiState.case5,
  ];
  // remove duplicates
  allCases = allCases.filter(
    (item, index, self) => self.indexOf(item) === index,
  );

  const diff = arrDiff(
    uiState[`case${caseToKeep}` as keyof typeof uiState],
    allCases,
  );

  diff.forEach(propName => {
    if (propName.startsWith('have') || propName.startsWith('is')) {
      runInAction(() => {
        regStore[propName as keyof RegStore] = false;
      });
    } else {
      runInAction(() => {
        regStore[propName as keyof RegStore] = '';
      });
    }
  });
};
