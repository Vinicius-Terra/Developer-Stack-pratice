export interface answer {
    id: number;
    answeredBy: string;
    answer: string;
    questionId : number;
  }

export type CreateAnswerData = Omit<answer, "id">