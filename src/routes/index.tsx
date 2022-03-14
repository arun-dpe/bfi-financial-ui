import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '@layouts/index';
import Contributions from '@pages/Contributions';
import Documents from '@pages/Documents';
import Error from '@pages/Error';
import Home from '@pages/Home';
import Investments from '@pages/Investments';
import Loans from '@pages/Loans';
import Resources from '@pages/Resources';
import TransactionHistory from '@pages/TransactionHistory';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contributions" element={<Contributions />} />
        <Route path="investments" element={<Investments />} />
        <Route path="loans" element={<Loans />} />
        <Route path="transaction_history" element={<TransactionHistory />} />
        <Route path="documents" element={<Documents />} />
        <Route path="resources" element={<Resources />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
