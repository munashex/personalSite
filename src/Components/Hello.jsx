import '../App.css'
import {Button} from 'react-bootstrap'



const Hello = () => {


return (
    <div className="hello_container">
     
    <div className="inner_container">
     <h4 className="hi">Hi, my name is</h4> 
     <h1 className="my_name">Munashe Mugonda</h1> 
     <h1 className="builds">I Build things for the web.</h1>  
     <br/> 
     <h5 className="what_ido">I’m a software engineer specializing
         in building (and occasionally designing) 
         exceptional digital experiences. Currently, 
         I’m focused on building  <span>fullstack web application</span>
         </h5> 

     <div className="check_github">
        <a href="https://github.com/munashex" className="check_github">
        <Button variant="outline" className="btn">Check out my github</Button>
        </a>
     </div>
    </div> 

    
     
    </div>
)
}

export default Hello