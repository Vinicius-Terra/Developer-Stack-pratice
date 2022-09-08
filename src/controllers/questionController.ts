import { Request, Response } from 'express';
import * as questionService from '../services/questionService'
import * as answerService from '../services/answerService'
import {questions, CreateQuestionData} from '../types/questionTypes'
import {answer, CreateAnswerData} from '../types/answerTypes'

export async function createQuestion(req: Request, res: Response) {

  const CreateQuestionData:CreateQuestionData = req.body;
  questionService.createQuestion(CreateQuestionData);
  res.sendStatus(200);
  
}

export async function createAnswer(req: Request, res: Response) {
  const CreateAnswerData:CreateAnswerData = req.body;
  answerService.createAnswers(CreateAnswerData);
  res.sendStatus(200);
}

export async function get(req: Request, res: Response) {
  const questions = questionService.getAllQuestions();
  res.send(questions).status(200);
}

export async function getById(req: Request, res: Response) {
  // TODO
}
