import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Heading } from '../Heading';
import {
  ThemeProvider,
  fontSpecs,
  FONT_SIZE,
  theme,
} from '../../styles';
import { getMediaQueryStr } from './Text.test';

afterEach(cleanup);

describe('Test <Headings />: ', () => {
  test('size props === heroHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={FONT_SIZE.heroHeading} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H1');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.heroHeading].size,
    );
  });

  test('size props === bodyHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={FONT_SIZE.bodyHeading} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H5');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.bodyHeading].size,
    );
  });

  test('size props === [body, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={[FONT_SIZE.body, FONT_SIZE.sectionHeading]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H6');

    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.body].size,
    );
    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.body].lineHeight.toString(),
    );
    expect(firstChild).not.toHaveStyleRule();

    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.sectionHeading].size,
      {
        media: getMediaQueryStr(theme.breakpoints[0]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.sectionHeading].lineHeight.toString(),
      {
        media: getMediaQueryStr(theme.breakpoints[0]),
      },
    );

    expect(firstChild).not.toHaveStyleRule('max-width');
  });

  test('size props === [7px, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size={['7px', FONT_SIZE.sectionHeading]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H6');

    expect(firstChild).toHaveStyleRule('font-size', '7px');
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');

    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.sectionHeading].size,
      {
        media: getMediaQueryStr(theme.breakpoints[0]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.sectionHeading].lineHeight.toString(),
      {
        media: getMediaQueryStr(theme.breakpoints[0]),
      },
    );

    expect(firstChild).not.toHaveStyleRule('max-width');
  });
});
