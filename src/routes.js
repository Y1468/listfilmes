
//Comfigurando rotas
import { BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./Home";
import Filme from "./Filme";
import Error from "./error";
import Favorito from "./favorito";
import Header from "./components/header";

export default function RouteApp(){
    return(
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Filme/>}/>
            <Route path="/favoritos" element={<Favorito/>}/>
            <Route path="/*"element={<Error/>}/>
          </Routes>
        </BrowserRouter>
    )
}

