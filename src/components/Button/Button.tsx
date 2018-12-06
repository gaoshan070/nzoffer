import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
} from 'styled-system';
import { styled } from '../../styles/styledLib';
import { IBox } from '../Box/Box.type';
import Box from '../Box/Box';
import { ThemeInterface } from '../../styles/theme';

export const Button = styled(Box)<
  IBox<ThemeInterface>
>(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
);

//@ts-ignore
Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'grey',
  border: 0,
  borderRadius: 4,
};

export default Button;
