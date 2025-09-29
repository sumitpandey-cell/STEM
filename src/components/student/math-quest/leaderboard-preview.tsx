import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getGameLeaderboard } from '@/lib/math-quest-data';

export default async function LeaderboardPreview() {
  const leaderboard = await getGameLeaderboard();

  return (
    <Card className="animate-in fade-in-0 delay-500 duration-1000">
      <CardHeader>
        <CardTitle className="font-raleway text-xl">Current Top Players</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((player) => (
              <TableRow key={player.rank} className={player.isCurrentUser ? 'bg-primary/20' : ''}>
                <TableCell className="font-bold">{player.rank <= 3 ? ['🥇', '🥈', '🥉'][player.rank-1] : player.rank}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell className="text-right font-mono">{player.score.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
