import React  from 'react' 
import {Button} from 'react-bootstrap'
import '../styles/Media.css'
import {FiGithub, FiInstagram, FiTwitter} from 'react-icons/fi'


const Media = () => {

    return (
        <div className="media_container">
      <h1 style={{color: "white"}}>Get In Touch</h1> 
      <h5 className="sayhi">
      Although I’m not currently looking for any new 
       opportunities,
       my inbox is always open. Whether you have a question
       or just want to say hi, I’ll try my best to
        get back to you! 
      </h5> 
       
       <a href="mailto:email@munashemugondaa@gmail.com">
       <Button variant="outline" className="say_hi_btn">say Hello</Button>
       </a>

       <div className="social_links">
        <a href="https://github.com/munashex"><FiGithub color="white" size={28}/></a>
        <a href="https://instagram.com/muna_codes"><FiInstagram color="white" size={28}/></a>
        <a href="https://twitter.com/munashe8"><FiTwitter color="white" size={28}/></a>
       </div>

       <small className="built-by"> 
       Designed & Built by Munashe Mugonda 
       </small>

        </div>
    )
}

export default Media