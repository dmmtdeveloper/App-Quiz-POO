//ts-check
import { questions } from "./Question.js";

export class Quiz{

  questionIndex = 0
  score = 0

  /**
   * 
   * @param {Questions[]} questions 
   */
  constructor(questions) {
    this.choices = choices
  }

  getQuestionIndex(){
    return this.questions[this.questionIndex]
  }

  guess(answer){

    if(this.getQuestionIndex().correctAnswer())


    this.questionIndex++
  }
}