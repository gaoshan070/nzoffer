import React from 'react';
import { useClickOutside } from '../../miscellaneous/hooks';

export function useDropDownClickOutside(
  boxRef: React.RefObject<HTMLElement>,
  DROPDOWN_LIST_BOX_ID: string,
  toggleOpen: Function,
) {
  useClickOutside(boxRef, target => {
    const targetID = (target as HTMLElement).id;
    if (targetID === 'dropdown-selected') {
      return;
    }
    if (targetID === DROPDOWN_LIST_BOX_ID) {
      return;
    }

    if (
      target &&
      (target as HTMLElement).parentElement &&
      (target as HTMLElement).parentElement!.id !==
        DROPDOWN_LIST_BOX_ID
    ) {
      toggleOpen((v: boolean) => (v ? false : v));
    }
  });
}
