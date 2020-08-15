import navBar from './navbar';
import allProjects from './allProjects';
import './main.css';

const displayPages = () => {
  navBar();
  const test = allProjects();
  test.createFunction();
};

document.querySelector('.all-content').appendChild(displayPages());
