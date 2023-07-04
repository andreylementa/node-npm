import readline from "readline-sync";
//readline.question("How are you?\n");

//let question;
//const tasks = [];
//function firstQuestion() {
//  question = readline.question(
//    "Task - Show tasks\n Add task - Add\n Remove task - Remove\n 0 - Quit\n"
//  );
//  return question;
//}

//function init() {
//  console.log("Hello, welcome to dayl");
//  firstQuestion();
//  while (question !== "0") {
//    firstQuestion();
//    if (question.toLowerCase() === "task") {
//      console.log(tasks);
//      firstQuestion();
//    }
//  }
//}

//init();

//class DailyApp {
//  constructor() {
//    this.tasks = [];
//    this.question = "";
//    this.started = false;
//    this.comands = [];
//  }
//  start() {
//    this.started = true;
//    this.question = readline.question(
//      "Task - Show tasks Add task - Add Remove task - Remove 0 - Quit\n"
//    );
//    while (this.question !== "0") {
//      this.askQuest();
//    }
//  }
//  askQuest() {
//    this.question = readline.question(
//      "Task - Show tasks Add task - Add Remove task - Remove 0 - Quit\n"
//    );
//    return this.question;
//  }
//}

class EvenGame {
  constructor() {
    this.name = "";
    this.counter = 0;
    this.randomNumber = Math.floor(Math.random() * 100);
    this.currentAnswer = this.randomNumber % 2 === 0 ? "yes" : "no";
    this.answer = this.currentAnswer;
  }
  getName() {
    this.name = readline.question(
      "Welcome to the Brain Games!\nMay I have your name?\n"
    );
    console.log(`Hello, ${this.name}`);
  }
  refreshValues() {
    this.randomNumber = Math.floor(Math.random() * 100);
    this.currentAnswer = this.randomNumber % 2 === 0 ? "yes" : "no";
  }
  play() {
    let firstAnswer = readline.question(
      `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${this.randomNumber}\n`
    );
    if (firstAnswer === this.currentAnswer) {
      console.log("Correct!");
      this.counter++;
      while (this.counter < 3 && this.answer === this.currentAnswer) {
        this.refreshValues();
        this.answer = readline.question(`Question: ${this.randomNumber}\n`);
        this.counter++;
        this.answer === this.currentAnswer
          ? console.log("Correct!")
          : console.log(
              `Correct answer was ${this.currentAnswer}. Let's try again, ${this.name}!`
            );
        this.counter === 3 && console.log(`Congratulations, ${this.name}`);
      }
    } else {
      console.log(
        `Correct answer was ${this.currentAnswer}. Let's try again, ${this.name}!`
      );
    }
  }
}
const Bill = new EvenGame();
Bill.getName();
Bill.play();
