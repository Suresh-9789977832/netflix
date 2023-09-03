import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';


function Row({ title, fetch, large }) {

    const [movies, setmoveis] = useState([])
    const [trailerurl,settrailerurl]=useState("")
    const baseurl='https://image.tmdb.org/t/p/original'
    
    useEffect(() => {
        async function getdata() {
            let res = await axios.get(fetch)
            setmoveis(res.data.results)
        }
        getdata()
    }, [fetch])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
           
            autoplay: 1,
        },
    }

    const handleclick = (movie) => {
        if (trailerurl) {
            settrailerurl('')
        } else {
            movieTrailer(movie?.title || movie?.original_name|| "")
                .then((url) => {
                    const urlparms = new URLSearchParams(new URL(url).search)
                    settrailerurl(urlparms.get("v"))
                
                })
                .catch((error)=>console.log(error))
            
        }
     
        
    }


    
    

    





    return <>
        <div className='row'>
            <div className='row_title'>
                <h1>{title}</h1>
            </div>

            <div className='row_posters'>
                {
                    movies.map((movie) => (
                        <img
                        onClick={()=>handleclick(movie)}
                            key={movie.id} src={`${baseurl}${large ? movie.poster_path : movie.backdrop_path}`}
                            className={`row_poster ${large && "large_row"}`}
                            />
                    ))
                }
            </div>

           {trailerurl && <YouTube videoId={trailerurl} opts={opts}/>}     
           
        </div>
    </>
}

export default Row
