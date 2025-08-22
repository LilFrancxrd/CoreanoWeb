import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";

export default function Layout(){
    console.log("Layout renderizando")
    return(
        <>  
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col">
                        <NavBar/>
                    </div>
                </div>
            </div>

            <main className="container-lg-fluid">
                <Outlet/>
            </main>
        </>
    )
}