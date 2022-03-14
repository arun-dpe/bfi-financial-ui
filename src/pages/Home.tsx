import React from 'react';
import { Footer } from '@components/footer';
import FinancialWellness from '@containers/overview/FinancialWellness';
import { Investments, Overview } from '@containers/overview';
import { Container } from '@common/components/container';

export default function Home() {
  return (
    <>
      <Overview />
      <FinancialWellness />
      <Investments />
      <Footer />
    </>
  );
}
