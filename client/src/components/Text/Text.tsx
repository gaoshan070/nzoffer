import {
  space,
  fontSize,
  color,
  textAlign,
  fontWeight,
} from 'styled-system';
import { styled } from '../../styles/styled';
import { IText } from '../Text/Text.type';
import { Box } from '../Box/Box';
import { IBox } from '../Box/Box.type';

interface IText2 extends IText, IBox {}

const Text = styled(Box)<IText2>`
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${fontSize}
`;

export default Text;
