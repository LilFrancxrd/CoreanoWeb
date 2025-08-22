import '../css/float.css';

export default function ProjectsCard(){
    return(
        <>  
            <div className="container-lg-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-10">
                        <button className="card shadow ms-5 float ">
                            <img src="/img/GalponCard.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center mt-2 mb-2">
                                <h5 className="card-title">Galpones Industriales</h5>
                                <p className="card-text">Desde la fabricacion al montaje, ofrecemos galpones adaptados a las necesidades de tu industria</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}