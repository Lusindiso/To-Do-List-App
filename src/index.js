import handleSubmit from './functionality.js';
import './styles/main.scss';

const todoList = document.querySelector('.todo-list');

const task = [];
handleSubmit(task);

const createList = () => {
  task.forEach((el) => {
    const li = document.createElement('li');
    li.innerHTML = `<span><i class="fa-regular fa-square"></i> ${el.description}</span><i class="fa-solid fa-ellipsis-vertical"></i>`;
    todoList.appendChild(li);
  });
};

createList();