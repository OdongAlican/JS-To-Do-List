let projectList = [{
  name: 'Project One',
  value: '1'
},
{
  name: 'Project Two',
  value: '2'
},
{
  name: 'Project Three',
  value: '3'
}
]

const allProjects = () => {
  const createFunction = () => {
    const allProjectsDiv = document.createElement('div')
    allProjectsDiv.setAttribute('class', 'all-projects mr-3')

    for (let i = 0; i < projectList.length; i++) {
      const projectSection = document.createElement('div')
      projectSection.setAttribute('class', 'card p-3 mt-2')
      const projectName = document.createElement('p')
      projectName.setAttribute('class', 'project-text')
      projectName.innerHTML = projectList[i].name
      const projectValue = document.createElement('p')
      projectValue.innerHTML = projectList[i].value

      projectSection.appendChild(projectName)
      projectSection.appendChild(projectValue)
      allProjectsDiv.appendChild(projectSection)
    }

    document.querySelector('.all-content').appendChild(allProjectsDiv)
  }

  const addProject = () => {
    const projectCard = document.createElement('div')
    projectCard.setAttribute('class', 'card')

    const projectInput = document.createElement('input')
    projectInput.type = 'text'
    projectInput.setAttribute('placeholder', 'Add new project')

    const submitProjectButton = document.createElement('button')
    submitProjectButton.setAttribute('class', 'btn btn-success')

    projectCard.appendChild(projectInput)
    projectCard.appendChild(submitProjectButton)


    // const projectTitle = document.createElement('')

    console.log('random')
  }

  return {addProject, createFunction}

}

export default allProjects
