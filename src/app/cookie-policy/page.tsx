import CookiePolicy from '@/components/pages/CookiePolicyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Zonet AI',
  description: 'Information about how Zonet AI uses cookies and similar technologies on our website.',
};

export default function Page() {
  return <CookiePolicy />;
}
