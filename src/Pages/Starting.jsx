import React from 'react'
import { Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import  '../App.css'



const Starting = () => { 
    //styles in App.css
   let navigate = useNavigate() 
   const [show, setShow] = React.useState(true)

    let imageUrl = 'munashe_dev.png'

    React.useEffect(() => { 
       if(show) {
        setTimeout(() => {
          navigate('/home')
          setShow(false)
        }, [2000]) 
       }
     
    }, [])


    return (
    <div className="munashe_container">
      <img 
      alt="munashe_dev" src={imageUrl} className="munashe_image"/>
     </div> 
    )
}

export default Starting