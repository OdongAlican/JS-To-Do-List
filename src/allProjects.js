/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */

import { toDoPage } from './to-do';

const projectList = JSON.parse(localStorage.getItem('project-library-data')) || [
  {
    name: 'First Project',
    value: '1',
  },
];

const saveData = (arr) => {
  localStorage.setItem('project-library-data', JSON.stringify(arr));
};

function Projects(name, value) {
  this.name = name;
  this.value = value;
}

const allProjects = () => {
  const createFunction = () => {
    const allProjectsDiv = document.createElement('div');
    allProjectsDiv.setAttribute('class', 'all-projects mr-3');

    for (let i = 0; i < projectList.length; i += 1) {
      const projectSection = document.createElement('div');
      projectSection.setAttribute('class', 'card p-3 mt-2');
      const projectName = document.createElement('p');
      projectName.setAttribute('class', 'project-text');
      projectName.innerHTML = projectList[i].name;
      const projectValue = document.createElement('p');
      projectValue.innerHTML = projectList[i].value;

      projectSection.appendChild(projectName);
      projectSection.appendChild(projectValue);
      allProjectsDiv.appendChild(projectSection);

      const detailsProjectButton = document.createElement('button');
      detailsProjectButton.innerHTML = 'View Details';
      detailsProjectButton.setAttribute('class', 'btn btn-primary project-button');

      projectSection.appendChild(detailsProjectButton);

      detailsProjectButton.addEventListener('click', () => {
        const toDoPageInstance = toDoPage();
        toDoPageInstance.displayToDo(projectList[i].name, projectList[i].value);
        document.querySelector('.all-projects').classList.add('hide-all-project');
      });
    }

    document.querySelector('.all-content').appendChild(allProjectsDiv);
  };

  const addProject = () => {
    const projectCard = document.createElement('div');
    projectCard.setAttribute('class', 'card project-module');

    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.setAttribute('placeholder', 'Add new project');
    projectInput.setAttribute('id', 'addProject');

    const submitProjectButton = document.createElement('button');
    submitProjectButton.setAttribute('class', 'btn btn-success');
    submitProjectButton.innerHTML = 'Submit';

    submitProjectButton.addEventListener('click', addToProjectList);

    projectCard.appendChild(projectInput);
    projectCard.appendChild(submitProjectButton);
    document.body.appendChild(projectCard);
  };

  const addToProjectList = () => {
    const newProjectName = document.querySelector('#addProject').value;
    const lastElement = projectList.length + 1;
    const projectInstance = new Projects(newProjectName, lastElement);

    projectList.push(projectInstance);

    saveData(projectList);
    localStorage['project-library-data'] = JSON.stringify(projectList);
    window.location.reload();
    createFunction();
  };

  return { addProject, createFunction };
};

export default allProjects;
