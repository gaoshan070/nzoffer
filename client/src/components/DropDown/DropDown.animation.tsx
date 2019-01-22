import React from 'react';
import posed, { Transition } from 'react-pose';
import { theme } from '../../styles';

export const ListBox = posed.div({
  enter: {
    opacity: 1,
    scaleY: 1,
    originX: 0,
    originY: 0,
    transition: {
      ease: [0.53, 0.01, 0.36, 1.63],
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    originX: 0,
    originY: 0,
    transition: {
      ease: [0.53, 0.01, 0.36, 1.63],
    },
  },
});

const getListBoxStyle = (
  style?: React.CSSProperties,
  noOriginalStyle?: boolean,
) =>
  noOriginalStyle
    ? style
    : {
        width: '100%',
        position: 'absolute',
        top: '98%',
        flexDirection: 'column',
        border: `1px solid ${theme.colors.primary}`,
        maxHeight: '300px',
        boxSizing: 'border-box',
        backgroundColor: theme.colors.white1,
        zIndex: 99,
        overflowY: 'auto',
        boxShadow: theme.shadows[0],
        ...style,
      };

export const DropDownAnimation: React.FC<{
  isOpen: boolean;
  boxId?: string;
  noOriginalStyle?: boolean;
  style?: React.CSSProperties;
}> = ({
  isOpen,
  boxId,
  style,
  noOriginalStyle = false,
  children,
}) => (
  <Transition>
    {isOpen && (
      <ListBox
        id={boxId || ''}
        key="items"
        style={getListBoxStyle(style, noOriginalStyle)}
      >
        {children}
      </ListBox>
    )}
  </Transition>
);
