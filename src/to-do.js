  const toDoPage = () => {
    const displayToDo = (value) => {
      const toDoDiv = document.createElement('div')
      toDoDiv.setAttribute('class', 'main-todo-div')

      document.querySelector('.all-content').appendChild(toDoDiv)

      const projectTitle = document.createElement('h1')
      projectTitle.innerHTML = value

      const addToDoButton = document.createElement('button')
      addToDoButton.innerHTML = 'Add ToDo'
      addToDoButton.setAttribute('class', 'btn btn-primary todo-project-button')

      toDoDiv.appendChild(projectTitle)
      toDoDiv.appendChild(addToDoButton)

      addToDoButton.addEventListener('click', displayToDoForm)
    }

    const displayToDoForm = () => {
      const toDoForm = document.createElement('div')
      toDoForm.setAttribute('class', 'card project-module');

      const title = document.createElement('label');
      title.setAttribute('class', 'nameTxt');
      toDoForm.appendChild(title);
      title.innerHTML = 'Title';
      const titleInput = document.createElement('input');
      titleInput.type = 'text';

      toDoForm.appendChild(titleInput)

      const description = document.createElement('label')
      description.setAttribute('class', 'nameTxt');
      description.innerHTML = 'Description'
      toDoForm.appendChild(description)
      const descriptionInput = document.createElement('input');
      descriptionInput.setAttribute('class','description-class');
      descriptionInput.type = 'text';
      toDoForm.appendChild(descriptionInput);

      const dueDate = document.createElement('label');
      dueDate.setAttribute('class', 'nameTxt');
      dueDate.innerHTML = 'Due Date'
      const dueDateInput = document.createElement('input');
      dueDateInput.setAttribute('class','description-class');
      dueDateInput.type = 'date'
      toDoForm.appendChild(dueDate);
      toDoForm.appendChild(dueDateInput);

      const priorityTitle = document.createElement('label')
      priorityTitle.setAttribute('class', 'nameTxt');
      priorityTitle.innerHTML = 'Priority'

      toDoForm.appendChild(priorityTitle);

      const priority = document.createElement('select');
      priority.setAttribute('class','description-class');
      const priorityOptions = document.createElement('option');
      priority.appendChild(priorityOptions)
      priorityOptions.innerHTML = 'High'
      const priorityOptionTwo = document.createElement('option');
      priority.appendChild(priorityOptionTwo)
      priorityOptionTwo.innerHTML = 'Medium'
      const priorityOptionThree = document.createElement('option');
      priority.appendChild(priorityOptionThree)
      priorityOptionThree.innerHTML = 'Low'

      toDoForm.appendChild(priority)

      const submitToDoButton = document.createElement('button')
      submitToDoButton.setAttribute('class', 'btn btn-success todo-project-button mt-2')
      submitToDoButton.innerHTML = 'Submit'

      toDoForm.appendChild(submitToDoButton)


      document.querySelector('.all-content').appendChild(toDoForm)

    }

    return {displayToDo, displayToDoForm}

  }


  export default toDoPage
