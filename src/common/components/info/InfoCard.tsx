import React from 'react';
import { Container } from '@mui/material';
import InfoTitle from './InfoTitle';
import InfoContent, { Variant } from './InfoContent';

interface Info {
  title: string;
  content: string;
  variant?: Variant;
}

export default function InfoCard({
  title,
  content,
  variant,
}: Info) {
  return (
    <Container sx={{ marginRight: 1, textAlign: 'left' }}>
      <InfoTitle title={title} />
      <InfoContent content={content} variant={variant} />
    </Container>
  );
}
