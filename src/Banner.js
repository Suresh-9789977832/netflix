import React, { useEffect, useState } from 'react'
import axios from './axios'
import "./Banner.css"
import send from './send'

function Banner() {

    const [random, setrandom] = useState([])
    const baseurl='https://image.tmdb.org/t/p/original'


    useEffect(() => {
        async function getdata() {
            let res = await axios.get(send.fetchNetflixOriginals)
            setrandom(
                res.data.results[Math.floor(Math.random()*res.data.results.length-1)]
            )
        }
        getdata()
    },[])

  return (
      <div className='banner_back'
        style={{backgroundImage:`url(${baseurl}${random?.backdrop_path})`}}>
          <div className='banner_title'>
              <h1>{random?.name || random?.original_title}</h1>
          
          <div className='banner_buttons'>
              <button className='btn'>Play</button>
              <button className='btn'>My List</button>
              </div>
          </div>
          <div className='banner_fade'/>
    </div>
  )
}

export default Banner
