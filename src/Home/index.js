import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import "./home.css";


export default function Home(){

  const [filmes,setFilmes]=useState([])
  const [loading,setLoading]=useState(true)


  //Consumindo api
   useEffect(()=>{
      async function loadFilmes(){

         const response=await api.get("discover/movie",{
            params:{
              api_key:"6e8dc53a0fd6a3a0a7991a0e778c39dc",
              language:"pt-br",
              page:1
            }
         })
          
         setFilmes(response.data.results.slice(0,10))
         setLoading(false)
         console.log(response.data)
      }

      loadFilmes()
   },[])

   if(loading){
      return(
        <div className="loading">
          <h1>Carregando</h1>
        </div>
      )
   }

    return(
        //Listando filmes
        <div className="container">
            <div className="lista">

               {filmes.map((filme)=>{
                  return(
                    <article key={filme.id}>
                      <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                     </article>
                  )
               })}
            </div>
        </div>
    )
}