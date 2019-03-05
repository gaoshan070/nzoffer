import { useHistory } from '../../../../miscellaneous/hooks';

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
