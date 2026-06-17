import Careers from '@/components/pages/CareersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Zonet AI',
  description: 'Join the team at Zonet AI. View our open positions and career opportunities.',
};

export default function Page() {
  return <Careers />;
}
