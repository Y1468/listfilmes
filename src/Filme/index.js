import React from "react";
import { useState,useEffect } from "react";
import { useParams,useNavigate} from "react-router-dom";
import { api } from "../services/api";
import "./filme.css";
import { toast } from "react-toastify";


export default function Filme(){
  //Detalhes do filme
  const {id}=useParams()
  const navigate=useNavigate()

  const [filme,setFilme]=useState({})
  const [loading,setLoading]=useState(true)

useEffect(()=>{
    async function loadFilm(){
        await api.get(`/movie/${id}`,{
            params:{
                api_key:"6e8dc53a0fd6a3a0a7991a0e778c39dc",
                language:"pt-br"
            }
        })
        //Redirecionando paginas
        .then((response)=>{
           setFilme(response.data)
           setLoading(false)
           console.log(response.data)
        })

        .catch(()=>{
          console.log("FILME NÃO EMCONTRADO")
          //indo pra home
          navigate("/",{replace:true})
          return
        })
    }

    loadFilm()

    return()=>{
        console.log("Desmontado")
    }
},[navigate,id])

  function salvarFilme(){
    //Salvando filme no local storage
    const lista=localStorage.getItem("@primeflix")

    let filmesalvo=JSON.parse(lista) || []
    //Verificar se hà item no local storage
    const hasfilme=filmesalvo.some((film)=>film.id===filme.id)

    if(hasfilme){
      toast.warn("Esse filme ja esta na lista")
      return
    }

    filmesalvo.push(filme)
    localStorage.setItem("@primeflix",JSON.stringify(filmesalvo))
    toast.success("Filme salvo com sucesso")

  }
    
    if (loading) {
       return(
          <div className="detalhes">
            <h1>Carregando detalhes</h1>
          </div>
       )
    }
       return(
        <div className="filme">

         <h1>{filme.title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
         <h2>Sinopse</h2>
          <span>{filme.overview}</span>
          <strong>Avaliação {filme.vote_average}/10</strong>
          
          <div className="buton">
             <button onClick={salvarFilme}>Salvar</button>
             <button>
               <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
             </button>
          </div>
        </div>
    )
}