import React from 'react' 
import Header from '../navigation/Navbar'
import '../styles/About.css'
import Media from '../Components/Media'


const tech = [{name: "JavaScript"}, {name: "typeScript"}, {name: "graphQL"},
              {name: "Node"}, {name: "React Native"}, {name: "Gin"}
             ]


const About = () => {

    return (
        <>
        <Header/> 

        <div className="about_container"> 
        
        

        <div className="about_me">
         <h1>About me</h1> 
         <br/>

         <h5> 
         Hello! My name is Munashe and I 
         enjoy creating things that live on 
         the internet. My interest in web development 
         started back in 2019 when I decided to try 
         editing custom Tumblr themes — 
         turns out hacking together a custom reblog
          button taught me a lot about HTML & CSS!
         </h5>

         <br/>

         <h5>
          I also recently launched a course that
          covers everything you need to 
          build a web 
          with the Spotify API using Node & React.
         </h5>
          
          <br/>
          <h5>Here are a few technologies I’ve
             been working with recently:</h5>

            <p/>

            <div className="lists">
              {
              tech.map((item) => <h6 key={item.name}>{item.name}</h6>)
              }
            </div>
        </div> 

        <div className="img_container">
          <img src="mypic.jpg" alt="munashe" className="mypic"/> 
          <div className="image_box shadow shadow"></div>
        </div> 
    
        </div> 
       <Media/>
        </>
    )
}

export  default About