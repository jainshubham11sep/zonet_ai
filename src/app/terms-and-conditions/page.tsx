import TermsAndConditions from '@/components/pages/TermsAndConditionsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Zonet AI',
  description: 'Read the terms and conditions for using Zonet AI services and website.',
};

export default function Page() {
  return <TermsAndConditions />;
}
