import './styles/main.scss';

const todoList = document.querySelector('.todo-list');

const todo = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To Do project',
    completed: false,
    index: 0,
  },
];

const createList = () => {
  todo.forEach((el) => {
    const li = document.createElement('li');
    li.innerText = el.description;
    todoList.appendChild(li);
  });
};

createList();