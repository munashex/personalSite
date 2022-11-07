import  React from 'react' 
import Header from '../navigation/Navbar'
import '../styles/Projects.css'
import data from '../data/projects'
import {Card, Button} from 'react-bootstrap'




const Projects = () => {

  const [open, setOpen] = React.useState(false)
   
  
    return (
        <>
            <Header/> 
            
            <div className="projects_container">
                
              {
                data.map((item) => {
                    return (
                           <a href={item.link} style={{textDecoration: "none", color: "black"}}> 
                             <Card className="shadow shadow card_container">
                              <Card.Img src={item.img} className="project_image"/> 
                              <Card.Body>
                                <Card.Title className="name">{item.name}</Card.Title> 
                               <Card.Subtitle>{item.detail}</Card.Subtitle>
                              </Card.Body>
                            </Card>  
                        
                           </a>
                    )
                })
              }
               
            </div>
          <div style={{display: "flex", justifyContent: "center", marginBottom: 20}}>
            <a href="https://github.com/munashex">
              <Button variant="outline">More Projects</Button>
            </a>
          </div>
        </>
    )
}

export default Projects 