'use server';

/**
 * @fileOverview A personalized learning path generator.
 *
 * - generatePersonalizedLearningPath - A function that generates a personalized learning path.
 * - PersonalizedLearningPathInput - The input type for the generatePersonalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the generatePersonalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  performanceData: z
    .string()
    .describe(
      'A stringified JSON object containing the user performance data in quizzes and puzzles, including the topics, scores, and completion status.'
    ),
  subjectPreferences: z
    .string()
    .describe(
      'A stringified JSON array containing the user subject preferences list.'
    ),
  gradeLevel: z.number().describe('The grade level of the student.'),
});
export type PersonalizedLearningPathInput = z.infer<
  typeof PersonalizedLearningPathInputSchema
>;

const PersonalizedLearningPathOutputSchema = z.object({
  learningPath: z
    .string()
    .describe(
      'A personalized learning path as a stringified JSON object tailored to the user performance and preferences.'
    ),
});
export type PersonalizedLearningPathOutput = z.infer<
  typeof PersonalizedLearningPathOutputSchema
>;

export async function generatePersonalizedLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {
    schema: PersonalizedLearningPathInputSchema,
  },
  output: {
    schema: PersonalizedLearningPathOutputSchema,
  },
  prompt: `You are an expert learning path generator for students in grades 6-12.

  You will use the student's performance data, subject preferences and grade level to generate a personalized learning path, and return it as a stringified JSON object.

  Performance Data: {{{performanceData}}}
  Subject Preferences: {{{subjectPreferences}}}
  Grade Level: {{{gradeLevel}}}

  Based on the performance data, identify areas where the student needs the most improvement. Consider the student's subject preferences and create a learning path that focuses on those areas. Ensure that the learning path aligns with the student's grade level.
  The learning path should include specific topics, resources, and activities that will help the student improve their understanding and skills in the identified areas.
`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
