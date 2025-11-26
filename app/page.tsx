import ProfessionalPage from './professional/page';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <ProfessionalPage />
    </PageTransition>
  );
}
