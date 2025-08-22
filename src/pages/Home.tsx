import Title from "../component/Title";
import InfoCard from "../component/InfoCard";
import ProjectsCard from "../component/ProjectsCard";
import ServicesCard from "../component/ServicesCard";
import Contact from "../component/ContactCard";


function Home() {

  return (
    <>

      {/* PAGINA 1 */}

      <div className="container-fluid ">
        <div className="row justify-content-center py-4 bg-secondary">
          <div className="col-12 col-lg-10">
            <Title />
          </div>
        </div>
        <div className="row bg-secondary p-3 p-lg-4 g-4">
          <div className="col-12 col-lg-4">
            <InfoCard />
          </div>
          <div className="col-12 col-lg-8 justify-content-center text-center">
            <div className="row">
              <div className="col-12">
                <h2 className="text-white mb-4">Nuestros Servicios</h2>
              </div>
            </div>
            <div className="row g-3 justify-content-center">
              <div className="col-12 col-sm-8 col-md-12 col-lg-5 col-xl-5">
                <ProjectsCard />
              </div>
              <div className="col-12 col-sm-8 col-md-12 col-lg-5 col-xl-5">
                <ServicesCard />
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-secondary p-5"></div>
        <div className="row bg-secondary p-5"></div>
      </div>


      {/* PAGINA 2 */}

      <div className="container-fluid">
        <div className="row">
            <Contact />
        </div>
      </div>
      


    </>

  );
}

export default Home;