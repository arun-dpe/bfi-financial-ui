import React from 'react';
import { Faq } from '@containers/faq';
import { Container } from '@common/components/container';
import AppHeader from '@common/components/header/AppHeader';

export default function Contributions() {
  return (
    <Container sx={{
      paddingX: {
        xs: 0, sm: 0, md: 0, xl: 0,
      },
    }}
    >
      <AppHeader title="Contributions" />
      <Faq />
    </Container>
  );
}
