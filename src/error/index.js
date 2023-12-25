import { Link } from "react-router-dom";
import "./erro.css"

//Pagina erro
export default function Error(){
   return(
     <div className="error">
       <h1>404</h1>
       <h2>Pagina não emcontrada</h2>
       <Link to="/">Veja todos os filmes</Link>
     </div>
   )
}