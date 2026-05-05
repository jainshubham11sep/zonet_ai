import Disclaimer from '@/components/pages/DisclaimerPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Zonet AI',
  description: 'Legal disclaimer for information and services provided by Zonet AI.',
};

export default function Page() {
  return <Disclaimer />;
}
