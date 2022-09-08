import { type } from "os";

export interface questions {
    id: number;
    askedBy: string;
    question: string;
  }

export type CreateQuestionData = Omit<questions, "id">