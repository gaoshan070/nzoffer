import React from 'react';
import posed, { Transition } from 'react-pose';
import { theme } from '../../styles';

export const ListBox = posed.div({
  enter: {
    opacity: 1,
    scaleY: 1,
    originX: 0,
    originY: 0,
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    originX: 0,
    originY: 0,
  },
});

export const ListBoxToTop = posed.div({
  enter: {
    opacity: 1,
    scaleY: 1,
    originX: '100%',
    originY: '100%',
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    originX: '100%',
    originY: '100%',
  },
});

const getPosition = (isOpenToTop?: boolean) =>
  isOpenToTop ? { bottom: '100%' } : { top: '100%' };

const getListBoxStyle = (
  style?: React.CSSProperties,
  noOriginalStyle?: boolean,
  isOpenToTop?: boolean,
): React.CSSProperties | undefined =>
  noOriginalStyle
    ? style
    : {
        width: '100%',
        position: 'absolute',
        ...getPosition(isOpenToTop),
        left: 0,
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
  isOpenToTop?: boolean;
}> = ({ isOpen, style, noOriginalStyle = false, children, isOpenToTop }) => {
  const LB = isOpenToTop ? ListBoxToTop : ListBox;

  return (
    <Transition>
      {isOpen && (
        <LB
          key="items"
          style={getListBoxStyle(style, noOriginalStyle, isOpenToTop)}
        >
          {children}
        </LB>
      )}
    </Transition>
  );
};
