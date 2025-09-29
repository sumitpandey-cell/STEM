'use server';

export type BalloonQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  level: number;
};

const questions: BalloonQuestion[] = [
    // Level 1: Addition & Subtraction
    { id: 1, question: "15 + 23 = ?", options: ["38", "36", "48", "37"], correctAnswer: "38", level: 1 },
    { id: 2, question: "45 - 19 = ?", options: ["25", "26", "36", "34"], correctAnswer: "26", level: 1 },
    { id: 3, question: "100 - 52 = ?", options: ["48", "58", "42", "52"], correctAnswer: "48", level: 1 },

    // Level 2: Multiplication & Division
    { id: 4, question: "12 × 7 = ?", options: ["88", "94", "84", "74"], correctAnswer: "84", level: 2 },
    { id: 5, question: "144 ÷ 12 = ?", options: ["10", "11", "12", "13"], correctAnswer: "12", level: 2 },
    { id: 6, question: "9 × 9 = ?", options: ["81", "99", "72", "91"], correctAnswer: "81", level: 2 },

    // Level 3: Algebraic Expressions
    { id: 7, question: "If x=5, what is 3x + 2?", options: ["17", "15", "19", "21"], correctAnswer: "17", level: 3 },
    { id: 8, question: "If y=10, what is y/2 - 3?", options: ["2", "5", "7", "1"], correctAnswer: "2", level: 3 },
    { id: 9, question: "If z=4, what is z² + 4?", options: ["16", "20", "12", "8"], correctAnswer: "20", level: 3 },
];

export async function getBalloonPopQuestions(): Promise<BalloonQuestion[]> {
  // In a real app, you might fetch these from a database
  // and filter by level.
  return Promise.resolve(questions);
}
