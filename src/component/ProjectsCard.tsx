import '../css/float.css';

export default function ProjectsCard(){
    return(
        <>
            <button className="card shadow ms-5 float">
                <img src="/img/GalponCard.jpg" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Galpones Industriales</h5>
                    <p className="card-text">Desde la fabricacion al montaje, ofrecemos galpones adaptados a las necesidades de tu industria</p>
                </div>
            </button>

        </>
    )
}