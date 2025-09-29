import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { ChartConfig } from '@/components/ui/chart';

export type TeacherProfile = {
  name: string;
  role: string;
  school: string;
  avatarUrl: string;
};

export type QuickStat = {
  title: string;
  iconName: string;
  value: string;
  delay: number;
};

export type ClassOverviewData = {
  class: string;
  students: number;
  avgXp: number;
  badges: number;
  topPerformer: {
    name: string;
    avatar: string;
  };
};

export type StudentProgressData = {
  name: string;
  xp: number;
  progress: number;
  activity: string;
  avatar: string;
};

export type AssignmentAction = {
  title: string;
  iconName: string;
  delay: number;
};

export async function getTeacherProfile(userId: string): Promise<TeacherProfile | null> {
  try {
    const teacherDocRef = doc(db, 'teachers', userId);
    const teacherDoc = await getDoc(teacherDocRef);

    if (teacherDoc.exists()) {
      const teacherData = teacherDoc.data();
      return {
        name: teacherData.fullName || 'Teacher',
        role: 'STEM Educator',
        school: teacherData.schoolName || 'Your School',
        avatarUrl: `https://i.pravatar.cc/150?u=${userId}`,
      };
    }
    
    // Return mock data if no document exists
    return {
      name: 'Teacher',
      role: 'STEM Educator',
      school: 'Your School',
      avatarUrl: `https://i.pravatar.cc/150?u=${userId}`,
    };
  } catch (error) {
    console.error('Error fetching teacher profile:', error);
    // Return mock data on error
    return {
      name: 'Teacher',
      role: 'STEM Educator',
      school: 'Your School',
      avatarUrl: `https://i.pravatar.cc/150?u=${userId}`,
    };
  }
}

export async function getTeacherQuickStats(): Promise<QuickStat[]> {
  return [
    { title: 'Total Students', iconName: 'Users', value: '150', delay: 150 },
    { title: 'Active Classes', iconName: 'School', value: '5', delay: 300 },
    { title: 'Assignments Given', iconName: 'FileText', value: '25', delay: 450 },
    { title: 'Modules Completed', iconName: 'BookOpenCheck', value: '1,200', delay: 600 },
  ];
}

export async function getClassOverview(): Promise<ClassOverviewData[]> {
    return [
        {
            class: "Grade 9 - Physics",
            students: 32,
            avgXp: 8250,
            badges: 120,
            topPerformer: { name: "Ravi Kumar", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a" }
        },
        {
            class: "Grade 10 - Math",
            students: 28,
            avgXp: 9100,
            badges: 150,
            topPerformer: { name: "Priya Sharma", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }
        },
        {
            class: "Grade 8 - Chemistry",
            students: 35,
            avgXp: 7800,
            badges: 110,
            topPerformer: { name: "Amit Singh", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e" }
        },
    ];
}


export async function getStudentProgress(): Promise<StudentProgressData[]> {
    return [
        { name: "Anita Desai", xp: 14500, progress: 85, activity: "Completed Physics Quiz 3", avatar: "https://i.pravatar.cc/150?u=student1" },
        { name: "Vikram Seth", xp: 13200, progress: 78, activity: "Earned 'Algebra Ace' badge", avatar: "https://i.pravatar.cc/150?u=student2" },
        { name: "Kiran Desai", xp: 15100, progress: 92, activity: "Top of the leaderboard", avatar: "https://i.pravatar.cc/150?u=student3" },
    ];
}


export async function getAnalyticsData() {
    const barChartData = [
      { class: "Grade 6", xp: 4500 },
      { class: "Grade 7", xp: 5200 },
      { class: "Grade 8", xp: 6100 },
      { class: "Grade 9", xp: 5800 },
      { class: "Grade 10", xp: 7300 },
    ]

    const lineChartData = [
      { week: "Week 1", engagement: 350 },
      { week: "Week 2", engagement: 420 },
      { week: "Week 3", engagement: 500 },
      { week: "Week 4", engagement: 480 },
      { week: "Week 5", engagement: 600 },
    ]

    const pieChartData = [
      { name: "Physics", value: 400, fill: "hsl(var(--chart-1))" },
      { name: "Math", value: 300, fill: "hsl(var(--chart-2))" },
      { name: "Chemistry", value: 300, fill: "hsl(var(--chart-3))" },
      { name: "Biology", value: 200, fill: "hsl(var(--chart-4))" },
    ];
    
    const chartConfig = {
      xp: {
        label: "XP",
        color: "hsl(var(--primary))",
      },
      engagement: {
        label: "Engagement",
        color: "hsl(var(--secondary))",
      },
      Physics: { label: "Physics", color: "hsl(var(--chart-1))" },
      Math: { label: "Math", color: "hsl(var(--chart-2))" },
      Chemistry: { label: "Chemistry", color: "hsl(var(--chart-3))" },
      Biology: { label: "Biology", color: "hsl(var(--chart-4))" },
    } satisfies ChartConfig;

    return { barChartData, lineChartData, pieChartData, chartConfig };
}

export async function getAssignmentActions(): Promise<AssignmentAction[]> {
    return [
        { title: "Create Assignment", iconName: "FileText", delay: 200 },
        { title: "Assign Quiz", iconName: "Send", delay: 400 },
        { title: "Review Submissions", iconName: "BookOpenCheck", delay: 600 },
    ];
}
