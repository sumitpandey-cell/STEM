import GameArea from '@/components/student/math-quest/game-area';
import GameStatusBar from '@/components/student/math-quest/game-status-bar';
import LeaderboardPreview from '@/components/student/math-quest/leaderboard-preview';
import RewardsSection from '@/components/student/math-quest/rewards-section';

export default function MathQuestPage() {
  return (
    <div className="flex flex-col gap-8">
      <GameStatusBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <GameArea />
        </div>
        <div className="space-y-8">
          <RewardsSection />
          <LeaderboardPreview />
        </div>
      </div>
    </div>
  );
}
