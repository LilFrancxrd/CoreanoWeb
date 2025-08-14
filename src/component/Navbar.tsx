
export default function NavBar(){
    return(
        <>  

            
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white bi bi-house d-flex justify-content-center" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">Inicio</span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Proyectos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Clientes</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link  text-white" href="#">Contacto</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        
        </>
    )
}