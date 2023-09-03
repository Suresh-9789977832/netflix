import { useEffect, useState } from "react"
import "./Navbar.css"

function Nabvar() {

    const [show,setshow]=useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100)
                setshow(true)
            else
                setshow(false)
        })
    })
  return (
    <div className={`nav ${show && "nav_black"}`}>
          <img src="./images/img.jpg"
           className="img"/>
          
            <img className="img" src="/images/download.png"/>
          
    </div>
  )
}

export default Nabvar
