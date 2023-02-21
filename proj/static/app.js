
import { 
  add_text,
  button_handler, 
  DynamicGraphics, 
  Rope_,
} from "./Utility.js";


import { show_CV } from "./CV.js";
import {Plot} from "./Proj.js"

let app = new PIXI.Application({autoResize: true});




const back = new PIXI.Graphics();
back.beginFill(0x000A1A);
back.drawRect(0,0,2000,25000);
back.endFill();

app.stage.addChild(back);


let video = document.createElement("video");
video.src = "./static/Images/Background_vid.mp4";
video.loop = true;
video.style.width = "100%";
video.style.height = "100%";
video.style.objectFit = "cover";



document.addEventListener("click", function() {
  video.play();
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


//Cursor and Mouse Pointer trail------------------------------------------------------------------

// Get the texture for rope.
let trailTexture = PIXI.Texture.from('static/Images/white_dot.png');

// animation for trailing mouse
const rope = Rope_(app,trailTexture);

// Main APP functionalities*************************************************************
var spac = 150;

const text_style ={
  fontFamily: 'Verdana',
  fontSize: 100,
  fill:['#ffffff']
};


let CV_button = add_text("Curriculum Vitae",200,80,text_style,true);
let Projects_button = add_text("Projects",CV_button.x+CV_button.width+spac,80,text_style,true);

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

app.ticker.minFPS = 45;
app.ticker.maxFPS = 45;

// Add an event listener to the Pixi.js ticker to continuously update the renderer size
app.ticker.add(() => {
  // Check if the container's height has changed
  if (CV_container.height !== previousHeight) {
    // Resize the renderer
    resizeRenderer();
  }
});


let Projects_container = new DynamicGraphics(CV_button.x+CV_button.width+spac);

CV_container.name="cv_container_big";

//defining the behaviour of buttons
let CV=null;
let cv_params = [window.innerWidth-CV_button.x+150-CV_button.x,-50,CV_button.height+10]
async function CVButtonOnPointerUp() {
  CV = await button_handler(CV,show_CV,cv_params,CV_container);
    
}

CV_button.on("pointerup", CVButtonOnPointerUp);

let PJ = null;
async function ProjectsButtonOnPointerUp() {
  PJ = await button_handler(PJ,Plot,[],Projects_container);
    
}

Projects_button.on("pointerup", ProjectsButtonOnPointerUp);





//adding all the elements

app.stage.addChild(Projects_button);
app.stage.addChild(Projects_container);
app.stage.addChild(CV_button);
app.stage.addChild(CV_container);
app.stage.addChild(rope);


export {
  app
}



