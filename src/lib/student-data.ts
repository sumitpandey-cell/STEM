
import { db, auth } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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

export type Game = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type StemModule = {
  title: string;
  iconName: string;
  games: Game[];
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

export async function getStemModules(): Promise<StemModule[]> {
  return [
    {
      title: "Physics",
      iconName: "Zap",
      games: [
        {
          title: 'Electron Adventure',
          description: 'Navigate an electron through atoms and circuits.',
          cta: 'Play Now',
          href: '/student/electron-adventure',
        },
        {
          title: 'Physics Puzzle',
          description: 'Solve motion & force challenges to test your knowledge.',
          cta: 'Play Now',
          href: '#', // Will point to a future physics game
        },
      ]
    },
    {
      title: "Mathematics",
      iconName: "Brain",
      games: [
         {
          title: 'Balloon Pop',
          description: 'A fun way to test your math calculation skills!',
          cta: 'Start',
          href: '/student/balloon-pop',
        },
      ]
    }
  ];
}

export async function getStudentProfile(userId: string): Promise<StudentProfile | null> {
  try {
    const studentDocRef = doc(db, 'students', userId);
    const studentDoc = await getDoc(studentDocRef);

    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      return {
        username: studentData.fullName || 'Learner',
        level: studentData.level || 1,
        xp: studentData.xp || 0,
        xpGoal: studentData.xpGoal || 1000,
        avatarUrl: `https://i.pravatar.cc/150?u=${userId}`,
        grade: studentData.grade || 10,
      };
    }
    
    // If no document exists, create a default profile for the user
    const defaultProfile = {
      username: auth?.currentUser?.displayName || 'Learner',
      level: 1,
      xp: 0,
      xpGoal: 1000,
      avatarUrl: `https://i.pravatar.cc/150?u=${userId}`,
      grade: 10,
    };

    // Create the document in Firestore
    const defaultStudentData = {
      fullName: auth?.currentUser?.displayName || 'Learner',
      email: auth?.currentUser?.email || '',
      grade: 10,
      level: 1,
      xp: 0,
      xpGoal: 1000,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
    };

    await setDoc(studentDocRef, defaultStudentData);
    
    return defaultProfile;
  } catch (error) {
    console.error('Error fetching student profile:', error);
    // Return mock data on error
    return {
      username: auth?.currentUser?.displayName || 'Learner',
      level: 1,
      xp: 0,
      xpGoal: 1000,
      avatarUrl: `https://i.pravatar.cc/150?u=${userId}`,
      grade: 10,
    };
  }
}

export async function getQuickStats(): Promise<QuickStat[]> {
  return [
    { title: 'Total XP', iconName: 'Zap', value: '12,500' },
    { title: 'Badges Earned', iconName: 'Ruler', value: '15' },
    { title: 'Quizzes Completed', iconName: 'Beaker', value: '32' },
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

// Function to update student XP and level
export async function updateStudentXP(userId: string, xpToAdd: number): Promise<void> {
  try {
    const studentDocRef = doc(db, 'students', userId);
    const studentDoc = await getDoc(studentDocRef);
    
    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      const currentXP = studentData.xp || 0;
      const currentLevel = studentData.level || 1;
      const newXP = currentXP + xpToAdd;
      
      // Calculate new level (every 1000 XP = 1 level)
      const newLevel = Math.floor(newXP / 1000) + 1;
      const newXPGoal = newLevel * 1000;
      
      await setDoc(studentDocRef, {
        ...studentData,
        xp: newXP,
        level: newLevel,
        xpGoal: newXPGoal,
        lastActive: new Date().toISOString(),
      }, { merge: true });
    }
  } catch (error) {
    console.error('Error updating student XP:', error);
  }
}

// Function to update student profile information
export async function updateStudentProfile(userId: string, updates: Partial<{
  fullName: string;
  grade: number;
  level: number;
  xp: number;
  xpGoal: number;
} >): Promise<void> {
  try {
    const studentDocRef = doc(db, 'students', userId);
    await setDoc(studentDocRef, {
      ...updates,
      lastActive: new Date().toISOString(),
    }, { merge: true });
  } catch (error) {
    console.error('Error updating student profile:', error);
  }
}

// Function to get student's real-time stats based on their actual data
export async function getStudentQuickStats(userId: string): Promise<QuickStat[]> {
  try {
    const studentDocRef = doc(db, 'students', userId);
    const studentDoc = await getDoc(studentDocRef);
    
    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      const xp = studentData.xp || 0;
      const level = studentData.level || 1;
      
      // Calculate badges based on level (assuming 2 badges per level)
      const badges = level * 2;
      
      // Calculate quizzes completed based on XP (assuming 100 XP per quiz)
      const quizzesCompleted = Math.floor(xp / 100);
      
      return [
        { title: 'Total XP', iconName: 'Zap', value: xp.toLocaleString() },
        { title: 'Badges Earned', iconName: 'Medal', value: badges.toString() },
        { title: 'Quizzes Completed', iconName: 'Brain', value: quizzesCompleted.toString() },
      ];
    }
  } catch (error) {
    console.error('Error fetching student stats:', error);
  }
  
  // Return default stats if error or no data
  return getQuickStats();
}

// Function to ensure student profile exists and is complete
export async function ensureStudentProfile(userId: string, userEmail?: string, displayName?: string): Promise<void> {
  try {
    const studentDocRef = doc(db, 'students', userId);
    const studentDoc = await getDoc(studentDocRef);
    
    if (!studentDoc.exists()) {
      // Create a new profile with default values
      const defaultStudentData = {
        fullName: displayName || 'Learner',
        email: userEmail || '',
        grade: 10,
        level: 1,
        xp: 0,
        xpGoal: 1000,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        badges: [],
        completedQuizzes: [],
        achievements: [],
      };
      
      await setDoc(studentDocRef, defaultStudentData);
    } else {
      // Update last active time for existing users
      await setDoc(studentDocRef, {
        lastActive: new Date().toISOString(),
      }, { merge: true });
    }
  } catch (error) {
    console.error('Error ensuring student profile:', error);
  }
}

// Test function to simulate earning XP (can be called from components for testing)
export async function simulateQuizCompletion(userId: string, quizName: string, xpEarned: number = 100): Promise<void> {
  try {
    await updateStudentXP(userId, xpEarned);
    
    // Also update the quiz completion record
    const studentDocRef = doc(db, 'students', userId);
    const studentDoc = await getDoc(studentDocRef);
    
    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      const completedQuizzes = studentData.completedQuizzes || [];
      
      await setDoc(studentDocRef, {
        completedQuizzes: [...completedQuizzes, {
          quizName,
          completedAt: new Date().toISOString(),
          xpEarned,
        }]
      }, { merge: true });
    }
  } catch (error) {
    console.error('Error simulating quiz completion:', error);
  }
}
