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

class DailyApp {
  constructor() {
    this.tasks = [];
    this.question = "";
    this.started = false;
    this.comands = [];
  }
  start() {
    this.started = true;
    this.question = readline.question(
      "Task - Show tasks Add task - Add Remove task - Remove 0 - Quit\n"
    );
    while (this.question !== "0") {
      this.askQuest();
    }
  }
  askQuest() {
    this.question = readline.question(
      "Task - Show tasks Add task - Add Remove task - Remove 0 - Quit\n"
    );
    return this.question;
  }
}
