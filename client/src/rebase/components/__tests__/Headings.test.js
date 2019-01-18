import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Heading } from '../Heading';
import { ThemeProvider, fontSpecs, FONT_SIZE } from '../../styles';

afterEach(cleanup);

describe('Test <Headings />: ', () => {
  test('size props === heroHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Heading size="heroHeading" />
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
        <Heading size="bodyHeading" />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild.tagName).toEqual('H5');
    expect(firstChild).toHaveStyleRule(
      'font-size',
      fontSpecs[FONT_SIZE.bodyHeading].size,
    );
  });
});
