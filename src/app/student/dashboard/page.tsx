import HeroSection from '@/components/student/dashboard/hero-section';
import QuickStats from '@/components/student/dashboard/quick-stats';
import StemModules from '@/components/student/dashboard/stem-modules';
import Leaderboard from '@/components/student/dashboard/leaderboard';
import Achievements from '@/components/student/dashboard/achievements';

export default function StudentDashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-3">
        <HeroSection />
      </div>
      <div className="lg:col-span-3">
        <QuickStats />
      </div>
      <div className="lg:col-span-2">
        <StemModules />
      </div>
      <div className="lg:col-span-1 row-span-2">
        <Leaderboard />
      </div>
      <div className="lg:col-span-2">
        <Achievements />
      </div>
    </div>
  );
}
