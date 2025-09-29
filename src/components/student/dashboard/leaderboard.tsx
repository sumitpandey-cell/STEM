import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const leaderboardData = [
  { rank: 1, name: 'User One', xp: 15200 },
  { rank: 2, name: 'User Two', xp: 14800 },
  { rank: 3, name: 'You', xp: 12500, isCurrentUser: true },
  { rank: 4, name: 'User Four', xp: 11900 },
  { rank: 5, name: 'User Five', xp: 11200 },
];

export default function Leaderboard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl font-bold">Leaderboard</CardTitle>
        <CardDescription className="font-raleway">See where you stand among peers</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">XP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((user) => (
              <TableRow
                key={user.rank}
                className={
                  user.isCurrentUser
                    ? 'bg-primary/10 hover:bg-primary/20'
                    : user.rank <= 3 
                    ? 'bg-muted/50' 
                    : ''
                }
              >
                <TableCell className={`font-medium ${user.rank <=3 ? 'text-lg' : ''}`}>
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-right">{user.xp.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
