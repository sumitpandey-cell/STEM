'use server';

export type StudentProfile = {
  username: string;
  level: number;
  xp: number;
  xpGoal: number;
  avatarUrl: string;
};

export type QuickStat = {
  title: string;
  iconName: string;
  value: string;
};

export type ActiveModule = {
  title: string;
  description: string;
  cta: string;
  iconName: string;
};

export type LeaderboardUser = {
  rank: number;
  name: string;
  xp: number;
  isCurrentUser?: boolean;
};

export type Achievement = {
  name: string;
  icon: string;
};

export async function getStudentProfile(): Promise<StudentProfile> {
  return {
    username: 'Learner',
    level: 5,
    xp: 12500,
    xpGoal: 20000,
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  };
}

export async function getQuickStats(): Promise<QuickStat[]> {
  return [
    { title: 'Total XP', iconName: 'Zap', value: '12,500' },
    { title: 'Badges Earned', iconName: 'Ruler', value: '15' },
    { title: 'Quizzes Completed', iconName: 'Beaker', value: '32' },
  ];
}

export async function getActiveModules(): Promise<ActiveModule[]> {
  return [
    {
      title: 'Physics Puzzle',
      description: 'Solve motion & force challenges',
      cta: 'Resume',
      iconName: 'Zap',
    },
    {
      title: 'Math Quest',
      description: 'Algebra & geometry adventures',
      cta: 'Play',
      iconName: 'Ruler',
    },
    {
      title: 'Chemistry Lab',
      description: 'Elements & reactions as fun games',
      cta: 'Start',
      iconName: 'Beaker',
    },
  ];
}

export async function getLeaderboardData(): Promise<LeaderboardUser[]> {
  return [
    { rank: 1, name: 'User One', xp: 15200 },
    { rank: 2, name: 'User Two', xp: 14800 },
    { rank: 3, name: 'You', xp: 12500, isCurrentUser: true },
    { rank: 4, name: 'User Four', xp: 11900 },
    { rank: 5, name: 'User Five', xp: 11200 },
  ];
}

export async function getAchievements(): Promise<Achievement[]> {
  return [
    { name: 'Fast Learner', icon: '🏅' },
    { name: 'Math Master', icon: '🏅' },
    { name: 'Science Explorer', icon: '🏅' },
    { name: 'Puzzle Pro', icon: '🏅' },
    { name: 'Quiz Whiz', icon: '🏅' },
    { name: 'Physics Phan', icon: '🏅' },
    { name: 'Chemistry King', icon: '🏅' },
  ];
}
