'use server';

import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export type StudentProfile = {
  username: string;
  level: number;
  xp: number;
  xpGoal: number;
  avatarUrl: string;
  grade: number;
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

export async function getStudentProfile(userId: string): Promise<StudentProfile | null> {
  const studentDocRef = doc(db, 'students', userId);
  const studentDoc = await getDoc(studentDocRef);

  if (studentDoc.exists()) {
    const studentData = studentDoc.data();
    return {
      username: studentData.fullName || 'Learner',
      level: 5, // Mock data
      xp: 12500, // Mock data
      xpGoal: 20000, // Mock data
      avatarUrl: `https://i.pravatar.cc/150?u=${userId}`,
      grade: studentData.grade,
    };
  }
  return null;
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
  // In a real app, you'd also fetch the current user's rank
  return [
    { rank: 1, name: 'User One', xp: 15200 },
    { rank: 2, name: 'User Two', xp: 14800 },
    { rank: 3, name: 'You', xp: 12500, isCurrentUser: true }, // This would be dynamic
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
