// An object to keep track of each task's state and methods
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logState: function() {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
};

// DRIVER CODE CHANGES BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");

task1.logState();
task1.markCompleted();
task1.logState();

task2.logState();
task2.markCompleted();
task2.logState();
