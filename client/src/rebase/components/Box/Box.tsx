import React, { Children } from 'react';
import { SpaceType } from '../../styles';
import { is } from '../../utils/utils';
import { BaseBox } from './BaseBox';
import { IBaseBox } from './BaseBox.type';
import { StyledGapBox } from './StyledGapBox';

interface IA11Y {
  a11yTitle?: string;
}

export interface IBox extends IBaseBox, IA11Y {
  fill?: 'horizontal' | 'vertical' | true | false;
  gap?: SpaceType;
}

type PlainObject = { [name: string]: unknown };

export const Box: React.FC<IBox> = ({
  fill,
  gap,
  direction,
  a11yTitle,
  children,
  ...rest
}) => {
  let fillProps: PlainObject = {};
  if (fill === true) {
    fillProps = {
      height: '100%',
      width: '100%',
    };
  } else if (fill === 'horizontal') {
    fillProps.width = '100%';
  } else if (fill === 'vertical') {
    fillProps.height = '100%';
  }

  let ariaTitle: PlainObject = {};
  if (a11yTitle) {
    ariaTitle = {
      'aria-label': a11yTitle,
    };
  }

  let cursor: PlainObject = {};
  if (is.function(rest.onClick)) {
    cursor = {
      cursor: 'pointer',
      role: 'button',
    };
  }

  const contents: React.ReactNode[] = [];
  if (gap) {
    let firstIndex: number;
    Children.forEach(children, (child, index) => {
      if (child) {
        if (firstIndex === undefined) {
          firstIndex = index;
        } else {
          contents.push(
            <StyledGapBox
              key={index}
              gap={gap}
              direction={direction || 'row'}
            />,
          );
        }
      }
      contents.push(child);
    });
  }

  return (
    <BaseBox
      display="flex"
      {...ariaTitle}
      {...rest}
      {...fillProps}
      {...cursor}
      direction={direction}
    >
      {contents.length > 0 ? contents : children}
    </BaseBox>
  );
};
