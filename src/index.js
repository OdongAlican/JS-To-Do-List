import './main.css';
import navBar from './navbar'
import allProjects from './allProjects'

const displayPages = () => {

   navBar()
   const test = allProjects()
   test.createFunction()

}

document.querySelector('.all-content').appendChild(displayPages())
