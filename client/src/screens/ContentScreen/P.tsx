import React from 'react';
import { observer } from 'mobx-react-lite';
import { Paragraph, IText } from '../../styles';

export const P: React.FC<IText> = observer(({ children, ...rest }) => (
  <Paragraph
    css={{
      lineHeight: 1.7,
    }}
    {...rest}
  >
    {children}
  </Paragraph>
));
