'use server';

export type GameQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Reward = {
  title: string;
  icon: string;
  effect: string;
};

export type LeaderboardPlayer = {
  rank: number;
  name: string;
  score: number;
  isCurrentUser?: boolean;
};

export async function getMathQuestions(): Promise<GameQuestion[]> {
  return [
    { id: 1, question: "What is 12 × 8?", options: ["84", "96", "102", "108"], correctAnswer: "96" },
    { id: 2, question: "Solve for x: 3x - 7 = 14", options: ["5", "6", "7", "8"], correctAnswer: "7" },
    { id: 3, question: "What is the area of a circle with a radius of 5?", options: ["25π", "10π", "5π", "50π"], correctAnswer: "25π" },
    { id: 4, question: "What is √144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
  ];
}

export async function getRewards(): Promise<Reward[]> {
  return [
    { title: "Hint", icon: "💡", effect: "Reveal one wrong option" },
    { title: "Skip", icon: "⏭️", effect: "Skip current question" },
    { title: "Double XP", icon: "⭐", effect: "Earn 2x XP for next correct answer" },
  ];
}

export async function getGameLeaderboard(): Promise<LeaderboardPlayer[]> {
  return [
    { rank: 1, name: "Priya S.", score: 1250 },
    { rank: 2, name: "You", score: 1100, isCurrentUser: true },
    { rank: 3, name: "Ravi K.", score: 1050 },
  ];
}
