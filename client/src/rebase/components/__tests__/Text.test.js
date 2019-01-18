import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Text } from '../Text';
import { ThemeProvider, fontSpecs, FONT_SIZE } from '../../styles';

afterEach(cleanup);

describe('Test <Text />: ', () => {
  test('size props === heroHeading works', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Text size="body" />
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
});
