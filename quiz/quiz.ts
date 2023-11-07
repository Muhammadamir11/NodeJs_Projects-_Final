import inquirer from 'inquirer';

interface Question {
  question: string;
  choices: string[];
  answer: string;
}

class Quiz {
  private questions: Question[] = [];
  private currentQuestionIndex = 0;
  private correctAnswers = 0;

  constructor() {
    this.initializeQuestions();
  }

  initializeQuestions() {
    // Define your quiz questions here.
    this.questions = [
      {
        question: 'What is capital of Pakistan',
        choices: ['Sukkur', 'Karachi', 'Islamabad', 'Lahore'],
        answer: 'Islamabad',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars',
      },
    ];
  }

  async start() {
    console.log('Welcome to the Quiz!');

    for (const question of this.questions) {
      await this.askQuestion(question);
    }

    this.showResult();
  }

  async askQuestion(question: Question) {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'userAnswer',
      message: question.question,
      choices: question.choices,
    });

    if (answer.userAnswer === question.answer) {
      console.log('Correct!\n');
      this.correctAnswers++;
    } else {
      console.log(`Incorrect. The correct answer is: ${question.answer}\n`);
    }

    this.currentQuestionIndex++;
  }

  showResult() {
    console.log(`Quiz completed! You answered ${this.correctAnswers} out of ${this.questions.length} questions correctly.`);
  }
}

const quiz = new Quiz();
quiz.start();
