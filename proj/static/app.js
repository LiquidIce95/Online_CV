
import { 
  add_text,
  button_handler, 
  DynamicGraphics, 
  Rope_,
} from "./Utility.js";


const text_style ={
  fontFamily: 'Verdana',
  fontSize: 100,
  fill:['#ffffff']
};


import { show_CV } from "./CV.js";  
import {Plot} from "./Proj.js"

let app = new PIXI.Application({autoResize: true});

// add your content to the container

let startY = null; // initialize start y position

// add event listeners to the relevant events
window.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', doDrag);
window.addEventListener('mouseup', endDrag);

function startDrag(e) {
  startY = e.clientY; // save the initial y position
}

function doDrag(e) {
  if (startY !== null) {
    const yDiff = e.clientY - startY; // calculate the distance dragged
    if (Math.abs(yDiff) >= 50) { // check if the distance is greater than or equal to 50 pixels
      window.scrollTo(0, window.pageYOffset - yDiff); // scroll the window by the distance
      startY = e.clientY; // update the initial y position
    }
  }
}

function endDrag(e) {
  startY = null; // reset the initial y position
}

let startY2 = null; // initialize start y position

// add event listeners to the relevant touch events
window.addEventListener('touchstart', startDrag2);
window.addEventListener('touchmove', doDrag2);
window.addEventListener('touchend', endDrag2);

function startDrag2(e) {
  startY2 = e.touches[0].clientY; // save the initial y position
}

function doDrag2(e) {
  if (startY2 !== null) {
    const yDiff = e.touches[0].clientY - startY2; // calculate the distance dragged
    if (Math.abs(yDiff) >= 50) { // check if the distance is greater than or equal to 50 pixels
      window.scrollTo(0, window.pageYOffset - yDiff); // scroll the window by the distance
      startY2 = e.touches[0].clientY; // update the initial y position
    }
  }
}

function endDrag2(e) {
  startY2 = null; // reset the initial y position
}



const back = new PIXI.Graphics();
back.beginFill(0x000A1A);
back.drawRect(0,0,2000,25000);
back.endFill();

app.stage.addChild(back);

let clicked = false;



let video = document.createElement("video");


document.addEventListener("click", function() {
  if(clicked == false){
    video.src = "./static/Images/Background_vid.mp4";
    video.loop = true;
    video.autoPlay = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.play();
  }
  clicked = true;
  
});

const texture = PIXI.Texture.from(video);
const background = new PIXI.Sprite(texture);
background.width = window.innerWidth;
background.height = window.innerHeight;

window.addEventListener("resize", function() {
  background.width = window.innerWidth;
  background.height = window.innerHeight;
});

app.stage.addChild(background);


app.renderer.resize(window.innerWidth,window.innerHeight);


document.body.appendChild(app.view);

// create a new Pixi.js container
const container = new PIXI.Container();
app.stage.addChild(container);

let up_butt = add_text("to top   ",-300,50,{...text_style, fontSize:40,fontWeight:"bold",fill:['#FFFFFF']},true);

// update the position of the sprite whenever the window is scrolled
window.addEventListener("scroll", () => {
  up_butt.position.y = window.scrollY;
});


up_butt.on('pointerup', () => {
  window.scrollTo(0, 0);
});

// set the position of the sprite relative to the top and right edges of the window
up_butt.position.set(
  window.innerWidth - up_butt.width,
  window.scrollY
);

container.addChild(up_butt);



//Cursor and Mouse Pointer trail------------------------------------------------------------------

// Get the texture for rope.
let trailTexture = PIXI.Texture.from('static/Images/white_dot.png');

// animation for trailing mouse
const rope = Rope_(app,trailTexture);

// Main APP functionalities*************************************************************
var spac = 150;



let CV_button = add_text("Curriculum Vitae",200,80,text_style,true,true,-55,27,55,55,true);
// let Projects_button = add_text("Projects",CV_button.x+CV_button.width+spac,80,text_style,true,true,-55,27,55,55,true);

let CV_container = new DynamicGraphics(200,80);
// Store the previous height of the container
let previousHeight = CV_container.height;

// Define a function to resize the renderer
function resizeRenderer() {
  // Calculate the difference in height between the old and new bounds
  let newHeight = CV_container.height;
  let heightDifference = newHeight - previousHeight;

  // Resize the renderer to account for the change in height
  app.renderer.resize(window.innerWidth, app.renderer.view.height + heightDifference);

  // Update the previous height to the new height
  previousHeight = newHeight;
}


// Add an event listener to the Pixi.js ticker to continuously update the renderer size
app.ticker.add(() => {
  // Check if the container's height has changed
  if (CV_container.height !== previousHeight) {
    // Resize the renderer
    resizeRenderer();
  }
});

let hint = add_text("CLICK ON THE ARROWS TO SHOW CONTENT",spac*3,200,{...text_style, fontSize:40,fontWeight:"bold",fill:['#FF0000']});
app.stage.addChild(hint);

let rem_hint = true;

let Projects_container = new DynamicGraphics(CV_button.x+CV_button.width+spac);

CV_container.name="cv_container_big";

//defining the behaviour of buttons
let CV=null;
let cv_params = [window.innerWidth*0.80,-50,CV_button.height+10]
async function CVButtonOnPointerUp() {
  CV = await button_handler(CV,show_CV,cv_params,CV_container);

  if(rem_hint){
    app.stage.removeChild(hint);
  }
    
}

CV_button.on("pointerup", CVButtonOnPointerUp);

// let PJ = null;
// async function ProjectsButtonOnPointerUp() {
//   PJ = await button_handler(PJ,Plot,[],Projects_container);
//   if(rem_hint){
//     app.stage.removeChild(hint);
//   }
    
// }

// Projects_button.on("pointerup", ProjectsButtonOnPointerUp);





//adding all the elements

// app.stage.addChild(Projects_button);
app.stage.addChild(Projects_container);
app.stage.addChild(CV_button);
app.stage.addChild(CV_container);
app.stage.addChild(rope);


export {
  app
}



