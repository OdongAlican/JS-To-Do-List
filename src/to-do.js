import allProjects from './allProjects';
import navBar from './navbar';

const toDoList = JSON.parse(localStorage.getItem('todo-library-data')) || [];

const saveData = (arr) => {
  localStorage.setItem('todo-library-data', JSON.stringify(arr));
};

function ToDoConstructor(title, description, duedate, priority, projectId) {
  this.title = title;
  this.description = description;
  this.duedate = duedate;
  this.priority = priority;
  this.projectId = projectId;
}

const toDoPage = (name, value) => {
  const displayToDo = () => {
    const toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('class', 'main-todo-div');

    document.querySelector('.all-content').appendChild(toDoDiv);

    const projectTitle = document.createElement('h1');
    projectTitle.innerHTML = name;

    const addToDoButton = document.createElement('button');
    addToDoButton.innerHTML = 'Add ToDo';
    addToDoButton.setAttribute('class', 'btn btn-primary todo-project-button');

    toDoDiv.appendChild(projectTitle);
    toDoDiv.appendChild(addToDoButton);

    const toDoSectionMainDiv = document.createElement('div');
    toDoSectionMainDiv.setAttribute('class', 'todo-section-main-div ');

    toDoDiv.appendChild(toDoSectionMainDiv);

    for (var i = 0; i < toDoList.length; i++) {
      if (value == toDoList[i].projectId) {
        const todoSection = document.createElement('div');
        todoSection.setAttribute('class', 'todo-section  ');
        const toDoParagraph = document.createElement('p');
        toDoParagraph.innerHTML = toDoList[i].title;
        const toDoDate = document.createElement('p');
        toDoDate.innerHTML = toDoList[i].duedate;

        todoSection.appendChild(toDoParagraph);
        todoSection.appendChild(toDoDate);

        if (toDoList[i].priority == 'High') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'high-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        } else if (toDoList[i].priority == 'Medium') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'medium-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        } else if (toDoList[i].priority == 'Low') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'low-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        }

        const editIcon = document.createElement('i');
        editIcon.setAttribute('class', 'fas fa-edit');

        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fas fa-trash-alt');

        const testValue = toDoList[i]
        deleteIcon.addEventListener('click', () => {
          deleteToDo(toDoList.indexOf(testValue))
        })

        todoSection.appendChild(editIcon);
        todoSection.appendChild(deleteIcon);

        toDoDiv.appendChild(todoSection);

        toDoSectionMainDiv.appendChild(todoSection);
      }
    }


    addToDoButton.addEventListener('click', () => {
      displayToDoForm(name, value);
    });
  };

  const displayToDoForm = (name, value) => {
    const toDoForm = document.createElement('div');
    toDoForm.setAttribute('class', 'card project-module');
    toDoForm.setAttribute('id', 'todoDoForm');
    const title = document.createElement('label');
    title.setAttribute('class', 'nameTxt');
    toDoForm.appendChild(title);
    title.innerHTML = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title-id');
    titleInput.type = 'text';

    toDoForm.appendChild(titleInput);

    const description = document.createElement('label');
    description.setAttribute('class', 'nameTxt');
    description.innerHTML = 'Description';
    toDoForm.appendChild(description);
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('class', 'description-class');
    descriptionInput.setAttribute('id', 'description-id');
    descriptionInput.type = 'text';
    toDoForm.appendChild(descriptionInput);

    const dueDate = document.createElement('label');
    dueDate.setAttribute('class', 'nameTxt');
    dueDate.innerHTML = 'Due Date';
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('class', 'description-class');
    dueDateInput.setAttribute('id', 'dueDate-id');
    dueDateInput.type = 'date';
    toDoForm.appendChild(dueDate);
    toDoForm.appendChild(dueDateInput);

    const priorityTitle = document.createElement('label');
    priorityTitle.setAttribute('class', 'nameTxt');
    priorityTitle.innerHTML = 'Priority';

    toDoForm.appendChild(priorityTitle);

    const priority = document.createElement('select');
    priority.setAttribute('class', 'description-class');
    priority.setAttribute('id', 'priority-id');
    const priorityOptions = document.createElement('option');
    priorityOptions.setAttribute('value', '1');
    priority.appendChild(priorityOptions);
    priorityOptions.innerHTML = 'High';
    const priorityOptionTwo = document.createElement('option');
    priorityOptionTwo.setAttribute('value', '2');
    priority.appendChild(priorityOptionTwo);
    priorityOptionTwo.innerHTML = 'Medium';
    const priorityOptionThree = document.createElement('option');
    priorityOptionThree.setAttribute('value', '3');
    priority.appendChild(priorityOptionThree);
    priorityOptionThree.innerHTML = 'Low';

    toDoForm.appendChild(priority);

    const submitToDoButton = document.createElement('button');
    submitToDoButton.setAttribute('class', 'btn btn-success todo-project-button hide-submit-button mt-2');
    submitToDoButton.innerHTML = 'Submit';

    toDoForm.appendChild(submitToDoButton);

    document.querySelector('.all-content').appendChild(toDoForm);

    submitToDoButton.addEventListener('click', () => {
      document.getElementById('todoDoForm').classList.add('hide-toDo-form-first');
      document.querySelector('.main-todo-div').classList.add('hide-toDo-form-first');
      createToDoList(name, value);
    });
  };


  const createToDoList = (name, value) => {
    const toDoTitle = document.getElementById('title-id').value;
    const toDoDescription = document.getElementById('description-id').value;
    const toDoDueDate = document.getElementById('dueDate-id').value;
    const toDoPriority = document.getElementById('priority-id');

    const userPriority = toDoPriority.options[toDoPriority.selectedIndex].text;

    const toDoConstructorInstance = new ToDoConstructor(toDoTitle, toDoDescription, toDoDueDate, userPriority, value);

    toDoList.push(toDoConstructorInstance);

    saveData(toDoList);

    localStorage['todo-library-data'] = JSON.stringify(toDoList);

    const allContent = document.querySelector('.all-content');
    allContent.innerHTML = '';
    navBar();
    allContent.appendChild(displayToDo(name, value));
  };

  const editToDo = () => {


  };

  const deleteToDo = (identity) => {
    toDoList.splice(identity, 1)
    localStorage['todo-library-data'] = JSON.stringify(toDoList)

    const allContent = document.querySelector('.all-content');
    allContent.innerHTML = '';
    navBar();
    allContent.appendChild(displayToDo());

  };

  return { displayToDo, displayToDoForm };
};


export default toDoPage;
