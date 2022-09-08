import React from 'react'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>
    <NavBar/>
    <div class="container-fluid" id="home">

      <div>
        <h4 id="hello">About me</h4>
      <hr></hr>
      <div class="row">
      <div class="col-sm-7">
        
        <p>
          I grew up in Sydney, Australia, and moved to Winchester, England when I was 14. 
        </p>
        <p>
          Outside of programming, my two other main interests are music and sport. I've played guitar since I was 4 years old, and 
          still get a lot of satisfaction out of playing today. I'm a keen football, darts and snooker fan. I've played for the University of Sheffield
          Snooker team in tournaments against other universities, and will help run the society in the 2022-2023 year. I also love running and cooking.
        </p>
        <p>
          
          
        </p>
      </div>
        <div class="col-sm-5"><img id="me"src={require('../imgs/guitar.jpg')} /></div>
    </div>

        
      </div>
      

    </div>
    
  </div>
      
        


  )
}

export default About
