const form = document.querySelector('.form');
const addTask = document.getElementById('add-task');

const handleSubmit = (list) => {
  form.onsubmit = () => {
    let index = 0;
    if (list.length > 0) {
      index = list[list.length - 1].index + 1;
    }
    const task = addTask.value;
    list.push({
      description: task,
      completed: false,
      index,
    });
    console.log(list);
    form.reset();
  };
};

export default handleSubmit;