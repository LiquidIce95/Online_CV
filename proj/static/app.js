
import { 
  add_text,
  button_handler, 
  Rope_,
} from "./Utility.js";


import { show_CV } from "./CV.js";
import {Plot} from "./Proj.js"

let app = new PIXI.Application();


const back = new PIXI.Graphics();
back.beginFill(0x000A1A);
back.drawRect(0,0,2000,6000);
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
let trailTexture = PIXI.Texture.from('static/Images/black_dot.png');

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



//defining the behaviour of buttons
let CV=null;
let cv_params = [window.innerWidth-CV_button.x+150-CV_button.x,CV_button.x-75,CV_button.y+CV_button.height]
async function CVButtonOnPointerUp() {
  CV = await button_handler(CV,show_CV,cv_params,app.stage);
    
}

CV_button.on("pointerup", CVButtonOnPointerUp);

let PJ = null;
// var purge = false;
async function ProjectsButtonOnPointerUp() {
  PJ = await button_handler(PJ,Plot,[],app.stage);
    
}

Projects_button.on("pointerup", ProjectsButtonOnPointerUp);





//adding all the elements

app.stage.addChild(Projects_button);
app.stage.addChild(CV_button);
app.stage.addChild(rope);


export {
  app
}



