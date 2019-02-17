import { arrDiff, uiState, getCaseNum } from './regStep3UIState';
import { RegStore } from '../store/RegStore';
import { runInAction } from 'mobx';

export const keepCaseOnly = (regStore: RegStore) => {
  const caseToKeep = getCaseNum(
    regStore.isDegreeGetInChina,
    regStore.chinaDegree,
  );

  if (!caseToKeep) return;

  let allCases = [
    ...uiState[1],
    ...uiState[2],
    ...uiState[3],
    ...uiState[4],
    ...uiState[5],
  ];
  debugger;
  // remove duplicates
  allCases = allCases.filter(
    (item, index, self) => self.indexOf(item) === index,
  );

  const diff = arrDiff(uiState[caseToKeep as keyof typeof uiState], allCases);

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
