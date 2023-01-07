import { Link } from "react-router-dom";
import '../css/NavBar.module.css'
import Busca from "./Busca";


function NavBar() {
  return (
    <div className="">
      <nav className="container">
        <ul className="containerul">

          
            <li><Link to="/">Home</Link></li>
            <li><Link to="/frases1">Frases 1</Link></li>
            <li><Link to="/frases2">Frases 2</Link></li>
            <li><Link to="/retornos">Retornos</Link></li>
            <li><Link to="/contatos">Contatos</Link></li>
            <li><Link to="/busca">Busca</Link></li>
           
           
          
           

            <Busca />
            

       
        </ul>
      </nav>

    </div>
  )
}
export default NavBar;