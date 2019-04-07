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
): React.CSSProperties | undefined =>
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
        overflowX: 'hidden',
        boxShadow: theme.shadows[0],
        paddingTop: '8px',
        paddingBottom: '8px',
        ...style,
      };

export const DropDownAnimation: React.FC<{
  isOpen: boolean;
  noOriginalStyle?: boolean;
  style?: React.CSSProperties;
}> = ({ isOpen, style, noOriginalStyle = false, children }) => (
  <Transition>
    {isOpen && (
      <ListBox key="items" style={getListBoxStyle(style, noOriginalStyle)}>
        {children}
      </ListBox>
    )}
  </Transition>
);
