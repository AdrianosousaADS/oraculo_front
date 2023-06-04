import { Link } from "react-router-dom";
import './style.css'; 
function header(){
    return(
        <header>
            <h1> Oraculo automotivo</h1>
            <div>
                <Link to= "/">Home</Link>;
                <Link to= "/veiculos">Veiculos</Link>;
                <Link to= "/sobre">Sobre</Link>;
                <Link to= "/Login">Login</Link>;
            </div>
        </header>
    )
}
export default header;