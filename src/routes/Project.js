import React from 'react'
import Navbar from "../components/NavBar"
import "./Project.css"

const Project = () => {
  return (
    <div>
      <Navbar />
      <div class="container">
      <div class="container-fluid" id="project">
      <h4 class = "title"><small>PERSONAL PROJECTS</small></h4>
      <ul>
        <li><a id="projectlink" href="/project#snooker_project">object detection project</a></li>
        <li><a id="projectlink" href="/project#darts_project">dynamic programming project</a></li>
        
      </ul>
      <span id="snooker_project"></span>
      
        
        <div class="project" >
          
          <hr></hr>
          <h5 id="subtitle"><span class="glyphicon glyphicon-time" ></span> A snooker tool using machine learning object detection.</h5>
          
          <p>When practicing snooker, sometimes I like to recreate situations from professional matches to try out myself. The problem is that due to the perspective of where the camera is placed,
            it can be quite hard to tell where the balls actually are. It is much easier if a birds eye view of the table is provided,
            but it's rare that they show this angle on TV. This inspired me to write a program that takes images taken from professional snooker matches 
            and returns a birds eye view diagram of where the balls are. There were two main stages of this project: training an object detection model that could recognise the snooker balls and pockets,
            and implementing functionality to transform the positions of the balls from the camera's perspective to a 2-D, birds-eye view.
          </p>
          <p>I experimented using colour detection and edge detection to recognise the balls on the table, but with little success.
            I then decided to experiment with training a model using images I labelled. Due to only being on an Intel Macbook Air, I did the training
            using a GPU on Google Colab. The most time consuming part of this process was labelling images for training and testing. I
              labelled 96 images in total - which isn't really enough - I was more interested in creating a working version of this program than making it perfect.
              After testing the model on multiple images, the recognition of the pockets was consistently 6/6, and recognition of presence and correct colour of the balls was around 85% on average.
             
          </p>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <img id="snooker"src={require('../imgs/snooker_project/1_nolabel.png')} />

              </div>
              <div class="col-sm-6">
                <img id="snooker"src={require('../imgs/snooker_project/1_label.png')} />

              </div>
              {/* <div class="col-sm-4">
                <img id="tree"src={require('../imgs/snooker_project/1_result.png')} />

              </div> */}
              </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
                  <p id="snooker">
                    After I had a model that recognised the balls and pockets, using the coordinates of the boxes drawn by the model,
                    I used an open-cv library to apply a perspective transformation of the coordinates. I needed the positions of the pockets as the distances between them
                    is always proportional no matter the perspective, so they could be used as reference points in the perspective transformation.
                  </p>
                  <p id="snooker">
                    As you can see, the results aren't perfect, but I was fairly happy to get a working version of this project running. I'm confident that if I trained the model further with more labelled images the results would improve.

                  </p>

            </div>
            <div class="col-sm-6">
                <img id="snooker"src={require('../imgs/snooker_project/1_result.png')} />

            </div>

          </div>

        </div>
        
        <div class="project" >
          <span id="darts_project"></span>
          
          
          <hr></hr>
          <h5 id="subtitle"><span class="glyphicon glyphicon-time"></span>Using dynamic programming and the Coin Change algorithm to solve a Darts problem.</h5>
          
          <p>The holy grail in the game of Darts is to throw a 9 dart leg <a id="ninedartvid" target="_blank" href="https://www.youtube.com/watch?v=aYFU5acj2l4&t=143s&ab_channel=SkySportsDarts">(watch this video) </a>- reaching the score of 501 with the last dart being a double or bullseye,
            in only 9 darts. The most common way of achieving this is by throwing 60 (treble 20), 60, 60, 60, 60, 60, 60, 57 (treble 19), 24 (double 12). However, 
            whilst watching the Darts World Championships one year I heard one of the commentators mention there are 3944 different ways of throwing a 9 dart leg. 
            After hearing this, I started to think about how this number could be calculated. I initally thought it would be quite simple, but the more
            I thought about it the harder I realised it was going to be. After a lot of thinking, my initital solution was to implement a depth-first search using search trees.
            <img id="tree"src={require('../imgs/tree.jpg')} />

            As you can probably deduce, this solution is <i>incredibly</i> inefficient. For a few months, I stopped thinking about this problem,
             accepting that my solution was probably the best I could do. Then, in one of my modules at Uni I was introduced to dynamic programming, and more specifically the Change Making algorithm.
             This algorithm takes a value and selection of coins (with infinite supply), and returns the minimum number of coins required to make that value.
            For example, if you supplied this algorithm with a value of 22p and a selection of coins of 10p, 5p, 1p, the algorithm would return 4, as 4 coins are required to make 22p: 10 + 10 + 1 + 1.

          </p>

          <p>
              You can probably start to see how this algorithm can be modified to solve the Darts problem. The difference is that it needs to return all of the possible ways it can make the required score in the lowest number of darts.
              I found a similar solution on Stack Overflow which I was able to modify for this darts problem. 
          </p>
          <p>
              I'm not saying the code I wrote was particularly inventive, as it mainly was modifying code others had written to similar problems. However, I thought I'd include this 
              project on my website anyway as I found it very interesting and satisfying to apply dynamic programming to a real life problem that I had not known how to solve before. It also
              reinforced my knowledge of dynamic programming, and how it can be used to apply very efficient solutions.
          </p>
          <p>
          <script src="https://gist.github.com/thomasdavies2000/461cbd8709124eb7d609e2d1787fd703.js"></script>
          <iframe 
              width="100%"
              height="350"    
              src="data:text/html;charset=utf-8,
              <head><base target='_blank' /></head>
              <body><script src='https://gist.github.com/thomasdavies2000/461cbd8709124eb7d609e2d1787fd703.js'></script>
              </body>">
              
              
            </iframe>
          </p>
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Project
