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
import { Box } from '../Box/Box';
import { IBox } from '../Box/Box.type';

interface IText2
  extends IText<ThemeInterface>,
    IBox<ThemeInterface> {}

const Text = styled(Box)<IText2>`
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${fontSize}
  ${prop('css', '')};
`;

export default Text;
