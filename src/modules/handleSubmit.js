/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
import createList from './displayTasks.js';

const todoList = document.querySelector('.todo-list');
const form = document.querySelector('.form');
const addTask = document.getElementById('add-task');
const clear = document.querySelector('.clear');

const setData = (tasks) => {
  localStorage.setItem('inputData', JSON.stringify(tasks));
};

const handleSubmit = (tasks) => {
  if (localStorage.getItem('inputData')) {
    tasks = JSON.parse(localStorage.getItem('inputData'));
    createList(tasks);
  }
  form.onsubmit = () => {
    let index;
    if (tasks.length > 0) {
      index = tasks[tasks.length - 1].index + 1;
    } else {
      index = 0;
    }
    const task = addTask.value;
    tasks.push({
      description: task,
      completed: false,
      index,
    });
    createList(tasks);
    form.reset();
    setData(tasks);
  };

  todoList.onclick = (e) => {
    if (e.target.className === 'fa-solid fa-trash-can') {
      tasks = tasks.filter((item) => item.index !== parseInt(e.target.id, 10));
      tasks.map((task, i) => task.index = i);
      createList(tasks);
      setData(tasks);
    }
  };

  todoList.onchange = (e) => {
    if (e.target.className === 'task-text') {
      // eslint-disable-next-line array-callback-return
      tasks.map((task) => {
        if (parseInt(e.target.parentNode.id, 10) === task.index) {
          task.description = e.target.value;
        }
      });
      setData(tasks);
    }
  };

  clear.onclick = () => {
    tasks.splice(0, tasks.length);
    createList(tasks);
    setData(tasks);
  };
};

export default handleSubmit;