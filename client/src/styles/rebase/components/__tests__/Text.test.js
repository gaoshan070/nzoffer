import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Text } from '../Text';
import {
  ThemeProvider,
  fontSpecs,
  FONT_SIZE,
  theme,
} from '../../styles';

export const getMediaQueryStr = num =>
  `screen and (min-width:${num}px)`;

afterEach(cleanup);

describe('Test <Text />: ', () => {
  test('size props === 7px works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text size="7px" />
      </ThemeProvider>,
    ).container;

    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toHaveStyleRule('font-size', '7px');

    // won't add line-height and max-width
    // because it's not included in fontSpecs
    // so we don't have predefined value for them
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');
  });

  test('size props === heroHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text size={FONT_SIZE.body} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.body].size,
    );
    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.body].lineHeight.toString(),
    );
    expect(firstChild).not.toHaveStyleRule(
      'max-width',
      fontSpecs[FONT_SIZE.body].maxWidth,
    );
  });

  test('size props === [heroHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text size={[FONT_SIZE.body]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.body].size,
    );
    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.body].lineHeight.toString(),
    );
    expect(firstChild).not.toHaveStyleRule(
      'max-width',
      fontSpecs[FONT_SIZE.body].maxWidth,
    );
  });

  test('size props === [body, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text size={[FONT_SIZE.body, FONT_SIZE.sectionHeading]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');

    // For FONT_SIZE.body style
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.body].size,
    );
    expect(firstChild).toHaveStyleRule(
      'line-height',
      fontSpecs[FONT_SIZE.body].lineHeight.toString(),
    );

    expect(firstChild).not.toHaveStyleRule('max-width');

    // For FONT_SIZE.sectionHeading style
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

  test('size props === [body, sectionHeading] with noDefaultLineHeight works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text
          noDefaultLineHeight
          size={[FONT_SIZE.body, FONT_SIZE.sectionHeading]}
        />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');

    // For FONT_SIZE.body style
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.body].size,
    );
    expect(firstChild).not.toHaveStyleRule('line-height');
    expect(firstChild).not.toHaveStyleRule('max-width');

    // For FONT_SIZE.sectionHeading style
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.sectionHeading].size,
      {
        media: getMediaQueryStr(theme.breakpoints[0]),
      },
    );

    expect(firstChild).not.toHaveStyleRule('line-height', undefined, {
      media: getMediaQueryStr(theme.breakpoints[0]),
    });
    expect(firstChild).not.toHaveStyleRule('max-width');
  });

  test('size props === [7px, sectionHeading] works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text size={['7px', FONT_SIZE.sectionHeading]} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('DIV');

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
  });
});
