import React from 'react';
import { Footer } from '@components/footer';
import { FinancialWellness, Investments, Overview } from '@containers/overview';

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
