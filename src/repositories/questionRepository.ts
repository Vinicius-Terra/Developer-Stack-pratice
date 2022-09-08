import { prisma } from "../config/database";
import { CreateQuestionData } from "../services/questionService";

async function getAllQuestions() {
    return prisma.questions.findMany();
}

async function createQuestion(CreateQuestionData:CreateQuestionData) {
    await prisma.questions.create({
        data: CreateQuestionData,
      });
}

export default {
    getAllQuestions,
    createQuestion
  };