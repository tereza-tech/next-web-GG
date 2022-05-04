import React from 'react';
import { Global } from '@mantine/core';

export function WhichWay_font() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Atkinson Hyperlegible',
            src: `url(./fonts/AtkinsonHyperlegible-Regular.ttf) format('truetype')`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        }
      ]}
    />
  );
}