import {
  space,
  fontSize,
  color,
  textAlign,
  fontWeight,
} from 'styled-system';
import { styled, prop } from '../../styles/styledLib';
import { IText } from '../Text/Text.type';
import { ThemeInterface } from '../../styles/theme';

const Text = styled.div<IText<ThemeInterface>>`
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${fontSize}
  ${prop('css', '')};
`;

export default Text;
