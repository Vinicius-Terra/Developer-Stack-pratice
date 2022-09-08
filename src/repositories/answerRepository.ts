import { prisma } from "../config/database";
import { CreateAnswersData } from "../services/answerService";

async function createAnswers(CreateCreateAnswersData:CreateAnswersData) {
    await prisma.answers.create({
        data: CreateCreateAnswersData,
      });
}

export default {
    createAnswers
  };