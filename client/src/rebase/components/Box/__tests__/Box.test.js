import 'jest-styled-components';
import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Box } from '../Box';
import {
  SPACES,
  theme,
  ThemeProvider,
  FONT_SIZE,
} from '../../../styles';

const getMediaQuery = num => `screen and (min-width:${num}px)`;

afterEach(cleanup);

describe('Test <Box />: justify-content', () => {
  test('should convert start to flex-start', () => {
    const { firstChild } = render(
      <Box justifyContent="start" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule(
      'justify-content',
      'flex-start',
    );
  });

  test('should convert end to flex-end', () => {
    const { firstChild } = render(
      <Box justifyContent="end" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('justify-content', 'flex-end');
  });

  test('should convert between to space-between', () => {
    const { firstChild } = render(
      <Box justifyContent="between" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule(
      'justify-content',
      'space-between',
    );
  });

  test('should convert around to space-around', () => {
    const { firstChild } = render(
      <Box justifyContent="around" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule(
      'justify-content',
      'space-around',
    );
  });
});

describe('Test <Box />: align-items', () => {
  test('should convert start to flex-start', () => {
    const { firstChild } = render(
      <Box alignItems="start" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-items', 'flex-start');
  });

  test('should convert end to flex-end', () => {
    const { firstChild } = render(<Box alignItems="end" />).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-items', 'flex-end');
  });
});

describe('Test <Box />: align-self', () => {
  test('should convert start to flex-start', () => {
    const { firstChild } = render(
      <Box alignSelf="start" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-self', 'flex-start');
  });

  test('should convert end to flex-end', () => {
    const { firstChild } = render(<Box alignSelf="end" />).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('align-self', 'flex-end');
  });
});

describe('Test <Box />: flex-direction', () => {
  test('should accept row', () => {
    const { firstChild } = render(<Box direction="row" />).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('flex-direction', 'row');
  });

  test('should accept column', () => {
    const { firstChild } = render(
      <Box direction="column" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('flex-direction', 'column');
  });
});

describe('Test <Box />: fill', () => {
  test('should support fill="horizontal"', () => {
    const { firstChild } = render(
      <Box fill="horizontal" />,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).not.toHaveStyleRule('height', '100%');
    expect(firstChild).toHaveStyleRule('width', '100%');
  });

  test('should support fill="vertical"', () => {
    const { firstChild } = render(<Box fill="vertical" />).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('height', '100%');
    expect(firstChild).not.toHaveStyleRule('width', '100%');
  });

  test('should support fill=true', () => {
    const { firstChild } = render(<Box fill />).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('height', '100%');
    expect(firstChild).toHaveStyleRule('width', '100%');
  });

  test('should support fill=false', () => {
    const { firstChild } = render(<Box fill={false} />).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).not.toHaveStyleRule('height', '100%');
    expect(firstChild).not.toHaveStyleRule('width', '100%');
  });
});

describe('Test <Box /> gap', () => {
  test('[no gap with children] it should not add gap between children', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box direction="row">
          <p>a</p>
          <p>b</p>
        </Box>
      </ThemeProvider>,
    ).container;
    // firstChild is <Box>
    const a = firstChild.children[0];
    const b = firstChild.children[1];

    expect(firstChild).toMatchSnapshot();

    // a + b = 2
    expect(firstChild.children.length).toEqual(2);
    expect(a.innerHTML).toEqual('a');
    expect(b.innerHTML).toEqual('b');
  });

  test('[direction=row] it should add gap between children', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box direction="row" gap="medium">
          <p>a</p>
          <p>b</p>
        </Box>
      </ThemeProvider>,
    ).container;
    // firstChild is <Box>
    const a = firstChild.children[0];
    const gapA = firstChild.children[1];
    const b = firstChild.children[2];

    expect(firstChild).toMatchSnapshot();

    // a + gapA + b = 3
    expect(firstChild.children.length).toEqual(3);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule(
      'width',
      `${theme.space[SPACES.medium]}px`,
    );
    expect(b.innerHTML).toEqual('b');
  });

  test('[direction=undefined] it should add gap between children', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box gap="xxsmall">
          <p>a</p>
          <p>b</p>
        </Box>
      </ThemeProvider>,
    ).container;
    // firstChild is <Box>
    const a = firstChild.children[0];
    const gapA = firstChild.children[1];
    const b = firstChild.children[2];

    expect(firstChild).toMatchSnapshot();

    // a + gapA + b = 3
    expect(firstChild.children.length).toEqual(3);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule(
      'width',
      `${theme.space[SPACES.xxsmall]}px`,
    );
    expect(b.innerHTML).toEqual('b');
  });

  test('[direction=column] it should add gap between children', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box direction="column" gap="xxlarge">
          <p>a</p>
          <p>b</p>
        </Box>
      </ThemeProvider>,
    ).container;
    // firstChild is <Box>
    const a = firstChild.children[0];
    const gapA = firstChild.children[1];
    const b = firstChild.children[2];

    expect(firstChild).toMatchSnapshot();

    // a + gapA + b = 3
    expect(firstChild.children.length).toEqual(3);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule(
      'height',
      `${theme.space[SPACES.xxlarge]}px`,
    );
    expect(b.innerHTML).toEqual('b');
  });

  test('[Multiple children] it should add gap between children', () => {
    const expectedLength = `${theme.space[SPACES.xlarge]}px`;
    const { firstChild } = render(
      <ThemeProvider>
        <Box direction={['row', 'column', 'row']} gap="xlarge">
          <p>a</p>
          <p>b</p>
          <p>c</p>
        </Box>
      </ThemeProvider>,
    ).container;
    // firstChild is <Box>
    const a = firstChild.children[0];
    const gapA = firstChild.children[1];
    const b = firstChild.children[2];
    const gapB = firstChild.children[3];
    const c = firstChild.children[4];

    expect(firstChild).toMatchSnapshot();

    // a + gapA + b + gapB + c = 5
    expect(firstChild.children.length).toEqual(5);
    expect(a.innerHTML).toEqual('a');
    expect(gapA.tagName).toEqual('DIV');
    expect(gapA).toHaveStyleRule('width', expectedLength);
    expect(gapA).toHaveStyleRule('width', expectedLength, {
      media: getMediaQuery(theme.breakpoints[0]),
    });
    expect(gapA).toHaveStyleRule('height', expectedLength, {
      media: getMediaQuery(theme.breakpoints[1]),
    });
    expect(b.innerHTML).toEqual('b');
    expect(gapB.tagName).toEqual('DIV');
    expect(gapB).toHaveStyleRule('width', expectedLength);
    expect(gapB).toHaveStyleRule('width', expectedLength, {
      media: getMediaQuery(theme.breakpoints[0]),
    });
    expect(gapB).toHaveStyleRule('height', expectedLength, {
      media: getMediaQuery(theme.breakpoints[1]),
    });
    expect(c.innerHTML).toEqual('c');
  });
});

describe('Test <Box />: multiple props', () => {
  test('should accept boxShadow', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box boxShadow={5} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule(
      'box-shadow',
      theme.shadows[5],
    );
  });

  test('should accept fontSize', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box fontSize="body" />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule(
      'font-size',
      theme.fontSpecs[FONT_SIZE['body']].size,
    );
  });

  test('should accept mx', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box mx="small" />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule(
      'margin-left',
      theme.space[SPACES['small']] + 'px',
    );
    expect(firstChild).toHaveStyleRule(
      'margin-right',
      theme.space[SPACES['small']] + 'px',
    );
  });

  test('should accept py', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box py="large" />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule(
      'padding-top',
      theme.space[SPACES['large']] + 'px',
    );
    expect(firstChild).toHaveStyleRule(
      'padding-bottom',
      theme.space[SPACES['large']] + 'px',
    );
  });

  test('should accept p[]', () => {
    const getSpace = key => theme.space[SPACES[key]] + 'px';
    const { firstChild } = render(
      <ThemeProvider>
        <Box px={['small', 'large', 'xlarge']} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();

    expect(firstChild).toHaveStyleRule(
      'padding-left',
      getSpace('large'),
      {
        media: getMediaQuery(theme.breakpoints[0]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'padding-right',
      getSpace('large'),
      {
        media: getMediaQuery(theme.breakpoints[0]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'padding-left',
      getSpace('xlarge'),
      {
        media: getMediaQuery(theme.breakpoints[1]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'padding-right',
      getSpace('xlarge'),
      {
        media: getMediaQuery(theme.breakpoints[1]),
      },
    );

    expect(firstChild).toHaveStyleRule(
      'padding-left',
      theme.space[SPACES['small']] + 'px',
    );
    expect(firstChild).toHaveStyleRule(
      'padding-right',
      theme.space[SPACES['small']] + 'px',
    );
  });

  test('should accept a11yTitle', () => {
    const a11attr = 'aria-label';
    const a11text = 'accessibility test';

    const { firstChild } = render(
      <ThemeProvider>
        <Box a11yTitle={a11text} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveAttribute(a11attr);
    expect(firstChild.getAttribute(a11attr)).toEqual(a11text);
  });
});

describe('Test <Box css={}/>: ', () => {
  test('css prop should be added', () => {
    const { firstChild } = render(
      <ThemeProvider>
        <Box css={'background-color: black;'} />
      </ThemeProvider>,
    ).container;
    expect(firstChild).toMatchSnapshot();
    expect(firstChild).toHaveStyleRule('background-color', 'black');
  });
});
