import { arrDiff, uiState, getCaseNum } from './regStep3UIState';
import { RegStore } from '../store/RegStore';
import { runInAction } from 'mobx';

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
