import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'scss/variables/colors',
};

export default meta;
type Story = StoryObj;

const colors = [
  { tile: 'primary', patterns: [...Array(11)].map((_, i) => i) },
  { tile: 'secondary', patterns: [...Array(11)].map((_, i) => i) },
  { tile: 'red', patterns: [...Array(11)].map((_, i) => i) },
  { tile: 'orange', patterns: [...Array(11)].map((_, i) => i) },
  { tile: 'green', patterns: [...Array(11)].map((_, i) => i) },
  { tile: 'lightblue', patterns: [...Array(11)].map((_, i) => i) },
  { tile: 'gray', patterns: [...Array(5)].map((_, i) => i) },
];

// https://storybook.js.org/docs/react/api/csf
export const ColorPalettes: Story = {
  render: () => (
    <div className="">
      {colors.map((color) => (
        <div
          key={color.tile}
          style={{
            margin: '8px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: '1fr',
            gridColumnGap: '8px',
            gridRowGap: '8px',
          }}
        >
          <div
            key={`${color.tile}_title`}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100px',
              height: '100px',
              // color: `var(--swcom-vars--colors-palette--${color.tile})`,
            }}
          >
            {color.tile}
          </div>
          {color.patterns.map((pattern) => (
            <div
              key={`${color.tile}_${pattern}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100px',
                height: '100px',
                color: `var(--swcom-vars--colors-semantics--bg-base)`,
                backgroundColor: `var(--swcom-vars--colors-palette--${color.tile}${pattern})`,
              }}
            >
              {color.tile}
              {pattern}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
