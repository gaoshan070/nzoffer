import { useHistory } from '../../../../miscellaneous/hooks';
import * as History from 'history';

export function getIsEdit() {
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
      history.replace(newPath);
    }
  }
};
