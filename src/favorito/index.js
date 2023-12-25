
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import "./favorito.css"
import { toast } from "react-toastify"


export default function Favorito(){
    //Buscando items salvos
    const [filme,setFilme]=useState([])

    useEffect(()=>{
       const minhaLista=localStorage.getItem("@primeflix")
       setFilme(JSON.parse(minhaLista) || [])
    },[])
     //Excluindo filme
    function excluiFilme(id){
       let listFilme=filme.filter((item)=>{
          return(item.id!==id)
       })
       setFilme(listFilme)
       localStorage.setItem("@primeflix",JSON.stringify(listFilme))
       toast.success("Filme removido com sucesso")
    }

    return(
        <div className="filme">
            <h1>Meus filmes</h1>

             {filme.length === 0 && <span className="nfilm">Você não possui nenhum filme salvo</span> }
            <ul>
                {filme.map((item)=>{
                   return(
                     <li key={item.id}>
                        <span>{item.title}</span>

                        <div>
                           <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                           <button onClick={()=>excluiFilme(item.id)}>Excluir</button>
                        </div>
                     </li>
                   )
                })}
            </ul>
        </div>
    )
}