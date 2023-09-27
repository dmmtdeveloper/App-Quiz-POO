export class Question {
  //propiedades
  /**
   *
   * @param {string} text texto de la pregunta
   * @param {string[]} choices pociones de pregunta
   * @param {string} answer respuesta de la pregunta
   */

  constructor(text, choices, answer) {
    this.Text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice  some text to guess
   * @returns {boolean} return true if the answer is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
};
