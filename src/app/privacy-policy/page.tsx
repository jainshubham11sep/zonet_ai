import PrivacyPolicy from '@/components/pages/PrivacyPolicyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zonet AI',
  description: 'Learn about how Zonet AI collects, uses, and protects your personal data.',
};

export default function Page() {
  return <PrivacyPolicy />;
}
