import Title from "./component/Title"
import NavBar from "./component/Navbar"
import InfoCard from "./component/InfoCard"
import ProjectsCard from "./component/ProjectsCard"
import ServicesCard from "./component/ServicesCard"
function App() {


  return (
    <>
    <div className="container-fluid bg-secondary">
      <div className="row bg-black bg-opacity-50">
        <NavBar />
      </div>
      <div className="row ms-4">
        <Title />
      </div>
      <div className="row p-4">
        <div className="col-5">
          <InfoCard />
        </div>
        
        <div className="col-7 text-center">
            <div className="row text-white">
              <h1>Nuestros Servicios</h1>
            </div>
            <div className="row">
              <div className="col d-flex">
                <div className="text-center">
                  <ProjectsCard />
                </div>
                <div className="text-center ">
                  <ServicesCard />
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default App
