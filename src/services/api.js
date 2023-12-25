/*
curl --request GET \
     --url 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZThkYzUzYTBmZDZhM2EwYTc5OTFhMGU3NzhjMzlkYyIsInN1YiI6IjY1M2ZiOGE0Y2M5NjgzMDBjOWU1MjMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1MQxhQxDEGy5xIZ2NPhWJS8ev1MgA81u9JUrlUKs97I' \
     --header 'accept: application/json'
     //useEffect=Busca dados da api
    */
 import axios from "axios";

 export const api=axios.create({
    baseURL:"https://api.themoviedb.org/3/"
 })