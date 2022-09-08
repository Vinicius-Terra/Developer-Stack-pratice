import { questions } from "@prisma/client";
import questionsRepository from "../repositories/questionRepository";

export async function getAllQuestions() {
  const questions = await questionsRepository.getAllQuestions();
  return questions;
}

export type CreateQuestionData = Omit<questions, "id">;
export async function createQuestion(CreateQuestionData:CreateQuestionData) {

    await questionsRepository.createQuestion(CreateQuestionData);
}