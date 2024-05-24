import { useState} from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectetProjectId: undefined,
    projects: [],
    tasks:[]
  })

  const handleStartAddProject = () => { 
    setProjectState((preState) => { 
      return {
        ...preState,
        selectetProjectId: null
      }
    })
  }

  const handleAddProject = (projectData) => { 
    setProjectState((preState) => { 
      const newProject = {
        ...projectData,
        id: Math.random()
              }
      return {
        ...preState,
        selectetProjectId: undefined,
        projects: [...preState.projects, newProject]
      }
    })
  }

  const handleCancelAddProject = () => { 
    setProjectState((preState) => { 
      return {
        ...preState,
        selectetProjectId: undefined
      }
    })
  }
  const handleSelectProject = (id) => { 
    setProjectState((preState) => { 
      return {
        ...preState,
        selectetProjectId: id
      }
    })
  }

  const handleDeleteProject = () => { 
    setProjectState((preState) => { 
      return {
        ...preState,
        selectetProjectId: undefined,
        projects: projectState.projects.filter((project) => project.id !== projectState.selectetProjectId)
      }
    })
  }

  const handleAddTask = (text) => {    
    setProjectState(preState => { 
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: preState.selectetProjectId,
        id: taskId
      }
      return {
        ...preState,
        tasks: [...preState.tasks, newTask]
      }
    })
  }
  const handleDeleteTask = (id) => { 
    setProjectState((preState) => { 
      return {
        ...preState,
        tasks: projectState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectetProjectId )
  let content =
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />;

  if (projectState.selectetProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={ handleStartAddProject} />
  }
  else if (projectState.selectetProjectId === null) {
    content = <NewProject saveProject={handleAddProject} cancelProject={handleCancelAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projectList={projectState.projects}
        onSelectProject={ handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
