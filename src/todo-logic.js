/* eslint-disable import/no-cycle */

import {
  saveData, ToDoConstructor, toDoList, toDoPage,
} from './to-do';

const todoLogic = () => {
  const createToDoList = (name, value) => {
    const toDoTitle = document.getElementById('title-id').value;
    const toDoDescription = document.getElementById('description-id').value;
    const toDoDueDate = document.getElementById('dueDate-id').value;
    const toDoPriority = document.getElementById('priority-id');
    const toDoStatus = document.getElementById('status-id');


    const userPriority = toDoPriority.options[toDoPriority.selectedIndex].text;
    const userStatus = toDoStatus.options[toDoStatus.selectedIndex].text;

    if (toDoTitle && toDoDescription && toDoDueDate) {
      const toDoConstructorInstance = new ToDoConstructor(toDoTitle, toDoDescription, toDoDueDate,
        userPriority, value, userStatus);
      toDoList.push(toDoConstructorInstance);
    }

    saveData(toDoList);

    localStorage['todo-library-data'] = JSON.stringify(toDoList);
    const testMethodInstance = toDoPage();
    testMethodInstance.testMethod(name, value);
  };

  const editToDo = (x, name, value) => {
    const displayToDoFormInstance = toDoPage();
    displayToDoFormInstance.displayToDoForm(name, value, x);

    document.getElementById('title-id').value = toDoList[x].title;
    document.getElementById('description-id').value = toDoList[x].description;
    document.getElementById('dueDate-id').value = toDoList[x].duedate;
  };

  const deleteToDo = (identity, name, value) => {
    toDoList.splice(identity, 1);
    localStorage['todo-library-data'] = JSON.stringify(toDoList);

    const testMethodInstance = toDoPage();
    testMethodInstance.testMethod(name, value);
  };

  const changeStatus = (i, name, value) => {
    if (toDoList[i].status === 'Complete') {
      toDoList[i].status = 'Pending';
      saveData(toDoList);

      localStorage['todo-library-data'] = JSON.stringify(toDoList);

      const testMethodInstance = toDoPage();
      testMethodInstance.testMethod(name, value);
    } else if (toDoList[i].status === 'Pending') {
      toDoList[i].status = 'Complete';

      saveData(toDoList);

      localStorage['todo-library-data'] = JSON.stringify(toDoList);

      const testMethodInstance = toDoPage();
      testMethodInstance.testMethod(name, value);
    }
  };

  return {
    createToDoList, editToDo, deleteToDo, changeStatus,
  };
};

export default todoLogic;
