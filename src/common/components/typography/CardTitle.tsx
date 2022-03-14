import React from 'react';
import { Typography } from '@common/components/typography';

interface Header {
  title: String;
  variant: String;
}

export default function CardTitle({ title, variant }: Header) {
  const type = variant === 'title' ? 'h5' : 'body1';
  return (
    <Typography
      sx={{
        color: 'info.contrastText',
        fontWeight: 600,
      }}
      variant={type}
    >
      {title}
    </Typography>
  );
}
