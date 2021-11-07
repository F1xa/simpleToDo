// Сегодня напишем самый простой TODO лист без графического интерфейса.

// Хранилищем будет объект, а имена задач - ключами. 

// const list = {
//  "create a task": "In Progress",
//  "make a bed": "Done",
//  "write a post": "To Do",
// }

// Функция changeStatus - будет менять статус задачи 

// changeStatus("write a post", "Done")

// Функция addTask - добавляет новую задачу

// addTask('have a walk')

// Функция deleteTask - удаляет задачу

// deleteTask('have a walk')

// Функция showList будет выводить весь список дел в виде 

// Todo: 
//  "create a task",
//  "make a bed",
// In Progress: 
//  "write a post"
// Done:
//  -



const list = {
  "create a task": "In progress",
  "make a bed": "done",
  "write a post": "To Do",
 };


function changeStatus(task, status) {
  for (let key in list) {
    if (key === task) {
      list[task] = status;
      break;
    }
  }
};

changeStatus("make a bed", "To Do");



 function addTask(task) {
  return list[task] = null;
 };

 addTask("go to the gym");



function deleteTask(task) {
  for (let key in list) {
    if (key === task) {
      delete list[key];
      break;
    }
  }
};

deleteTask("go to the gym");


function showList() {
  let toDo,
      inProgress,
      Done;
  for (let key in list) {
    switch (list[key]) {
      case "To Do":
       toDo = `${key}`;
      case "In Progress":
        inProgress = `${key}`;
      case "Done":
        Done = `-`;
    }
  }
  return ` Todo: \n  "${toDo}"\n In Progress: \n  "${inProgress}"\n Done: \n  ${Done}`;
  
  
};

// Не успел доделать, скинул что есть:(


 console.log(showList());
