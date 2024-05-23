import { useState} from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectetProjectId: undefined,
    projects:[]
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

  console.log('projectState', projectState)

  let content;

  if (projectState.selectetProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={ handleStartAddProject} />
  }
  else if (projectState.selectetProjectId === null) {
    content = <NewProject saveProject={handleAddProject} cancelProject={handleCancelAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projectList={projectState.projects } />
      {content}
    </main>
  );
}

export default App;
