
import "./header.css";
import { Link } from "react-router-dom";

export default function Header(){
   return(
      <header>
         <Link className="logo" to="/">Prime flix</Link>
         <Link className="favorito" to="/favoritos">Meus filmes</Link>
      </header>
   )
}