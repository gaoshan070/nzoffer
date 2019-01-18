import * as CSS from 'csstype';
import { SpaceType, ThemeType } from '../../styles';
import { styled } from '../../styles/styled';
import { getMediaQuery } from '../../styles/utils';
import { is } from '../../utils/utils';
import { SingleOrArray } from './BaseBox.type';

const getGapStyle = (
  direction: SingleOrArray<CSS.FlexDirectionProperty>,
  gap: SpaceType,
  theme: ThemeType,
) => {
  const styles = [];

  const space = `${theme.space[gap]}px`;

  if (direction === 'column') {
    styles.push(`
      height: ${space};
    `);
  } else if (direction === 'row') {
    styles.push(`
      width: ${space};
    `);
  } else if (Array.isArray(direction) && direction.length > 0) {
    direction.forEach((dir, index) => {
      if (!is.notExist(theme.breakpoints[index])) {
        const breakPoint = theme.breakpoints[index];
        const toAdd = getGapStyle(dir, gap, theme);
        const responsiveCSS = getMediaQuery(breakPoint, toAdd);

        styles.push(`
          ${index === 0 ? toAdd : ''};
          ${responsiveCSS};
        `);
      }
    });
  }

  return styles;
};

export const StyledGapBox = styled.div<{
  direction: SingleOrArray<CSS.FlexDirectionProperty>;
  gap: SpaceType;
}>`
  flex: 0 0 auto;
  ${props => {
    if (is.number(props.gap)) {
      return getGapStyle(props.direction, props.gap, props.theme);
    }
  }};
`;
