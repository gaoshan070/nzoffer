import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Paragraph } from '../Paragraph';
import {
  ThemeProvider,
  fontSpecs,
  FONT_SIZE,
  theme,
} from '../../styles';
import { getMediaQueryStr } from './Text.test';

afterEach(cleanup);

describe('Test <Paragraph />: ', () => {
  test('size props === heroHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Paragraph size={FONT_SIZE.heroHeading} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('P');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.heroHeading].size,
    );
    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.heroHeading].lineHeight.toString(),
    );
    expect(firstChild).toHaveStyleRule(
      'max-width',
      fontSpecs[FONT_SIZE.heroHeading].maxWidth,
    );
  });

  test('size props === [body, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Paragraph
          size={[FONT_SIZE.body, FONT_SIZE.sectionHeading]}
        />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('P');

    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.body].size,
    );
    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.body].lineHeight.toString(),
    );
    expect(firstChild).toHaveStyleRule(
      'max-width',
      fontSpecs[FONT_SIZE.body].maxWidth,
    );

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

    expect(firstChild).toHaveStyleRule(
      'max-width',
      fontSpecs[FONT_SIZE.sectionHeading].maxWidth,
      {
        media: getMediaQueryStr(theme.breakpoints[0]),
      },
    );
  });

  test('size props === [7px, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Paragraph size={['7px', FONT_SIZE.sectionHeading]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('P');

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

    expect(firstChild).toHaveStyleRule(
      'max-width',
      fontSpecs[FONT_SIZE.sectionHeading].maxWidth,
      {
        media: getMediaQueryStr(theme.breakpoints[0]),
      },
    );
  });
});
