import { answers } from "@prisma/client";
import answersRepository from "../repositories/answerRepository";


export type CreateAnswersData = Omit<answers, "id">;
export async function createAnswers(CreateAnswersData:CreateAnswersData) {

    await answersRepository.createAnswers(CreateAnswersData);
}
