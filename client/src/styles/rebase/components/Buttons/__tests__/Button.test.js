import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Button } from '../Button';
import { ThemeProvider, FONT_SIZE, theme } from '../../../styles';

afterEach(cleanup);

describe('Test <Button />: ', () => {
  test('fontSize should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Button fontSize={FONT_SIZE.mainHeading} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    // the new css is there
    expect(firstChild).toHaveStyleRule(
      'font-size',
      theme.fontSizes[FONT_SIZE.mainHeading],
    );
  });
});
