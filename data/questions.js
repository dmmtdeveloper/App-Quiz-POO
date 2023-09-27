import { Question } from "../models/Question.js";
import { data } from "./data.js";

// recorrer arreglo y pasarlo a la clase
export const questions = data.map(question => new Question(question.question, question.choices, question.answer))
