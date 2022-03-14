import React from 'react';
import { theme } from 'src/theme/CustomThemeProvider';
import { Typography } from '@common/components/typography';

export type Variant = 'success' | 'default';

interface Content {
  content: string;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
}

export default function InfoContent({ content, variant, size }: Content) {
  const color = (variant === 'success') ? theme.palette.success.main : theme.palette.primary.contrastText;
  const textVariant = size === 'lg' ? 'h4' : 'h6';
  return (
    <Typography
      variant={textVariant}
      color={color}
    >
      {content}
    </Typography>
  );
}
