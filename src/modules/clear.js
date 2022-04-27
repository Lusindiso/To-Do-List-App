import createList from './displayTasks.js';

const clear = document.querySelector('.clear');

const clearTask = (list) => {
  clear.onclick = () => {
    list.splice(0, list.length);
    createList(list);
  };
};

export default clearTask;