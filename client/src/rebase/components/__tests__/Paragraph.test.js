import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Paragraph } from '../Paragraph';
import { ThemeProvider, fontSpecs, FONT_SIZE } from '../../styles';

afterEach(cleanup);

describe('Test <Paragraph />: ', () => {
  test('size props === heroHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Paragraph size="heroHeading" />
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
});
