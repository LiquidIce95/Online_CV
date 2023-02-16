
import { 
    button_handler, 
    FETCH,
    clipInput,
    getTangent,
    cubicInterpolation,
    cust_style, 
    Rope_,
    ad_img
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
background.re
document.body.appendChild(app.view);


//Cursor and Mouse Pointer trail------------------------------------------------------------------

// Get the texture for rope.
let trailTexture = PIXI.Texture.from('static/Images/black_dot.png');

// animation for trailing mouse
const rope = Rope_(app,trailTexture);

// Main APP functionalities*************************************************************
var spac = 300;

//Buttons
let CV_button = new PIXI.Graphics();
let Projects_button = new PIXI.Graphics();


CV_button.interactive = true;
CV_button.buttonMode = true;
Projects_button.interactive = true;
Projects_button.buttonMode = true;

// Labels
let CV_label = new PIXI.Text("Curriculum Vitae", cust_style(CV_button.width,'Verdana',50,'normal','normal',['#ffffff']));
let Projects_label = new PIXI.Text("Projects",cust_style(Projects_button.width,'Verdana',50,'normal','normal',['#ffffff']));

CV_label.x = 200;
CV_label.y = 80;

Projects_label.x = CV_label.x+CV_label.width+spac;
Projects_label.y = 80;

CV_button.addChild(CV_label);
Projects_button.addChild(Projects_label);


//defining the behaviour of buttons
let CV=null;

async function CVButtonOnPointerUp() {
    CV = await button_handler(app,0,CV,show_CV,[app,window.innerWidth-CV_label.x+150-CV_label.x,CV_label.x-75,CV_label.y+CV_label.height],null,app);
    
}

CV_button.on("pointerup", CVButtonOnPointerUp);

let PJ = null;
// var purge = false;
async function ProjectsButtonOnPointerUp() {
    PJ = await button_handler(app,0,PJ,Plot,[],null,app);
    
}

Projects_button.on("pointerup", ProjectsButtonOnPointerUp);





//adding all the elements

app.stage.addChild(Projects_button);
app.stage.addChild(CV_button);
app.stage.addChild(rope);


export {
  app
}



