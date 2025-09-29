import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getRewards } from '@/lib/math-quest-data';

export default async function RewardsSection() {
  const rewards = await getRewards();
  return (
    <Card className="animate-in fade-in-0 delay-300 duration-1000">
      <CardHeader>
        <CardTitle className="font-raleway text-xl">Rewards & Power-ups</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-2">
        {rewards.map((reward) => (
          <Button
            key={reward.title}
            variant="outline"
            className="flex flex-col h-24 p-2 items-center justify-center gap-1 text-center transform transition-transform hover:scale-110 hover:bg-accent/20"
            title={reward.effect}
          >
            <span className="text-3xl">{reward.icon}</span>
            <span className="text-xs">{reward.title}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
