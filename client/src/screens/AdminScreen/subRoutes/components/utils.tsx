import { useHistory } from '../../../../miscellaneous/hooks';
import { INZStudyArea, IUniversity } from '../../../../store/AdminStore.type';

export function useIsEdit() {
  const history = useHistory();
  const pathName = history.location.pathname;

  const reg = new RegExp('/edit/.*');
  const found = reg.exec(pathName);
  const isFound = found && found.length > 0;

  return {
    isEdit: isFound,
    id: isFound ? found![0].replace('/edit/', '') : null,
    history,
  };
}

export const goBackIfRefreshInEditPage = (history: any, toCheck: any[]) => {
  if (!toCheck.length) {
    let newPath = window.location.pathname;
    if (newPath.includes('/edit/')) {
      newPath = newPath.replace(new RegExp('/edit/.+'), '');
      if (typeof history.replace === 'function') {
        history.replace(newPath);
      }
    }
  }
};

export const getNameCNFromId = (
  list: INZStudyArea[] | IUniversity[],
  idToFind: string,
) => {
  const found = list.find(i => i._id === idToFind);
  return found ? found.nameCN : '';
};
