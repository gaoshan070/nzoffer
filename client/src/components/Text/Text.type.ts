import * as CSS from 'csstype';
import { NumberOrString } from '../Box/Box.type';
import {
  ThemeInterface,
  TColors,
} from '../../styles/theme';

export interface ITextProps {
  color?: CSS.ColorProperty | TColors;
  textAlign?: CSS.TextAlignProperty;
  fontWeight?: keyof ThemeInterface['fontWeights'];
  fontSize?: NumberOrString | NumberOrString[];
}

export interface IText extends ITextProps {}
