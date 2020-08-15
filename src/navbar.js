import allProjects from './allProjects';

const navBar = () => {
  const navDiv = document.createElement('div');
  navDiv.setAttribute('class', 'navigation border d-flex p-3');

  const viewProjectButton = document.createElement('button');
  viewProjectButton.innerHTML = 'All Projects';
  navDiv.appendChild(viewProjectButton);
  viewProjectButton.setAttribute('class', 'navigation-button btn btn-info');

  const navButton = document.createElement('button');
  navDiv.appendChild(navButton);
  navButton.setAttribute('class', 'navigation-button btn btn-info ml-auto mr-4');

  const navI = document.createElement('i');
  navI.setAttribute('class', 'fas fa-plus');


  navButton.addEventListener('click', () => {
    const createProject = allProjects();
    createProject.addProject();
  });

  viewProjectButton.addEventListener('click', () => {
    window.location.reload();
  });


  navButton.appendChild(navI);

  document.querySelector('.all-content').appendChild(navDiv);
};

export default navBar;
