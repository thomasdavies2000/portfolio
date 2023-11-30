import React from 'react'
import NavBar from "../components/NavBar"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <NavBar/>
      <div class="container-fluid" id="home">

        <div>
          <h4 id="hello">Hello</h4>
        <hr></hr>
        <div class="row">
        <div class="col-sm-7">
          <h5 id="subtitle">I'm Tom, a 23 year old Computer Science graduate. Currently working as a Data Engineer for the
                            UK Defence Solutions Centre.
  
            
          </h5>
          <p>
            I started coding after finishing my A-levels, and quickly developed a passion that would lead me to go on to 
            study Computer Science at the University of Sheffield.
          </p>
          <hr></hr>

          <br></br>
          <br></br>

        </div>
          <div class="col-sm-5"><img id="me"src={require('../imgs/me.jpg')} /></div>
      </div>
      <hr></hr>
      <div>
      <div class="col-sm-7">
      <p>
            <h6 id="subtitle">Through uni work and my own learning I have gained experience with the following technologies:</h6>
            <ul class="home-list">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>HTML and CSS</li>
              <li>React (used to build this website)</li>
              <li>Frameworks such as Ruby-on-Rails and Django</li>
              <li>SQL</li>
              <li>Git</li>
            </ul>
          </p>
      </div>
      </div>

          
        </div>
        

      </div>
      
    </div>
    

  )
}

export default Home
