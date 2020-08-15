import navBar from './navbar';

const toDoList = JSON.parse(localStorage.getItem('todo-library-data')) || [];

const saveData = (arr) => {
  localStorage.setItem('todo-library-data', JSON.stringify(arr));
};

function ToDoConstructor(title, description, duedate, priority, projectId, status) {
  this.title = title;
  this.description = description;
  this.duedate = duedate;
  this.priority = priority;
  this.projectId = projectId;
  this.status = status;
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

    for (let i = 0; i < toDoList.length; i += 1) {
      if (value === toDoList[i].projectId) {
        const todoSection = document.createElement('div');
        todoSection.setAttribute('class', 'todo-section  ');
        const toDoParagraph = document.createElement('p');
        toDoParagraph.setAttribute('class', 'p-title');
        toDoParagraph.innerHTML = toDoList[i].title;
        const toDoDate = document.createElement('p');
        toDoDate.setAttribute('class', 'p-date');
        toDoDate.innerHTML = toDoList[i].duedate;

        const toDoStatus = document.createElement('p');
        toDoStatus.setAttribute('class', 'p-status');
        toDoStatus.innerHTML = toDoList[i].status;

        todoSection.appendChild(toDoParagraph);
        todoSection.appendChild(toDoDate);
        todoSection.appendChild(toDoStatus);

        if (toDoList[i].priority === 'High') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'high-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        } else if (toDoList[i].priority === 'Medium') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'medium-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        } else if (toDoList[i].priority === 'Low') {
          const toDoSectionPrority = document.createElement('p');
          toDoSectionPrority.setAttribute('class', 'low-priority');
          toDoSectionPrority.innerHTML = toDoList[i].priority;
          todoSection.appendChild(toDoSectionPrority);
        }

        const statusParagraph = document.createElement('p')


        const statusButton = document.createElement('button')
        statusButton.innerHTML = 'Change Status'
        statusButton.setAttribute('class', 'btn btn-info');
        todoSection.appendChild(statusButton)

        statusButton.addEventListener('click', ()=>{
          if(toDoList[i].status === 'Complete'){
            toDoList[i].status = 'Pending'



          saveData(toDoList);

          localStorage['todo-library-data'] = JSON.stringify(toDoList);

          const allContent = document.querySelector('.all-content');
          allContent.innerHTML = '';
          navBar();
          allContent.appendChild(displayToDo(name, value));


          }else if(toDoList[i].status === 'Pending'){
            toDoList[i].status = 'Complete'

          saveData(toDoList);

          localStorage['todo-library-data'] = JSON.stringify(toDoList);

          const allContent = document.querySelector('.all-content');
          allContent.innerHTML = '';
          navBar();
          allContent.appendChild(displayToDo(name, value));

          }
        })

        const toDoObject = toDoList[i];

        const editIcon = document.createElement('i');
        editIcon.setAttribute('class', 'fas fa-edit');

        editIcon.addEventListener('click', () => {
          editToDo(toDoList.indexOf(toDoObject));
        });

        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fas fa-trash-alt');

        deleteIcon.addEventListener('click', () => {
          deleteToDo(toDoList.indexOf(toDoObject));
        });

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


    const statusTitle = document.createElement('label');
    statusTitle.setAttribute('class', 'nameTxt');
    statusTitle.innerHTML = 'Status';


    const optionStatus = document.createElement('select');
    optionStatus.setAttribute('class', 'description-class');
    optionStatus.setAttribute('id', 'status-id');

    const statusComplete = document.createElement('option');
    statusComplete.setAttribute('value', '1');

    optionStatus.appendChild(statusComplete);
    statusComplete.innerHTML = 'Complete';
    const statusPending = document.createElement('option');
    statusPending.setAttribute('value', '2');
    optionStatus.appendChild(statusPending);
    statusPending.innerHTML = 'Pending';

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

    toDoForm.appendChild(statusTitle);
    toDoForm.appendChild(optionStatus);
    toDoForm.appendChild(priorityTitle);
    toDoForm.appendChild(priority);


    const submitToDoButton = document.createElement('button');
    submitToDoButton.setAttribute('class', 'btn btn-success todo-project-button hide-submit-button mt-2');
    submitToDoButton.innerHTML = 'Submit';

    toDoForm.appendChild(submitToDoButton);

    document.querySelector('.all-content').appendChild(toDoForm);

    submitToDoButton.addEventListener('click', () => {
      if (toDoList.indexOf(toDoList[name]) !== -1) {
        const newtoDoTitle = document.getElementById('title-id').value;
        const newtoDoDescription = document.getElementById('description-id').value;
        const newtoDoDueDate = document.getElementById('dueDate-id').value;
        const newtoDoPriority = document.getElementById('priority-id');

        const newUserPriority = newtoDoPriority.options[newtoDoPriority.selectedIndex].text;

        toDoList[name].title = newtoDoTitle;
        toDoList[name].description = newtoDoDescription;
        toDoList[name].duedate = newtoDoDueDate;
        toDoList[name].priority = newUserPriority;

        saveData(toDoList);

        localStorage['todo-library-data'] = JSON.stringify(toDoList);

        const allContent = document.querySelector('.all-content');
        allContent.innerHTML = '';
        navBar();
        allContent.appendChild(displayToDo(name, value));
      } else {
        document.getElementById('todoDoForm').classList.add('hide-toDo-form-first');
        document.querySelector('.main-todo-div').classList.add('hide-toDo-form-first');
        createToDoList(name, value);
      }
    });
  };


  const createToDoList = (name, value) => {
    const toDoTitle = document.getElementById('title-id').value;
    const toDoDescription = document.getElementById('description-id').value;
    const toDoDueDate = document.getElementById('dueDate-id').value;
    const toDoPriority = document.getElementById('priority-id');
    const toDoStatus = document.getElementById('status-id');

    const userPriority = toDoPriority.options[toDoPriority.selectedIndex].text;
    const userStatus = toDoStatus.options[toDoStatus.selectedIndex].text;

    const toDoConstructorInstance = new ToDoConstructor(toDoTitle, toDoDescription, toDoDueDate, userPriority, value, userStatus);

    toDoList.push(toDoConstructorInstance);

    saveData(toDoList);

    localStorage['todo-library-data'] = JSON.stringify(toDoList);

    const allContent = document.querySelector('.all-content');
    allContent.innerHTML = '';
    navBar();
    allContent.appendChild(displayToDo(name, value));
  };

  const editToDo = (x) => {
    displayToDoForm(x);

    document.getElementById('title-id').value = toDoList[x].title;
    document.getElementById('description-id').value = toDoList[x].description;
    document.getElementById('dueDate-id').value = toDoList[x].duedate;
  };

  const deleteToDo = (identity) => {
    toDoList.splice(identity, 1);
    localStorage['todo-library-data'] = JSON.stringify(toDoList);

    const allContent = document.querySelector('.all-content');
    allContent.innerHTML = '';
    navBar();
    allContent.appendChild(displayToDo());
  };

  return { displayToDo, displayToDoForm };
};


export default toDoPage;
