
import { 
  add_text,
  button_handler, 
  DynamicGraphics, 
  Rope_,
} from "./Utility.js";


function calc_w(x){
  if(window.innerWidth > 450 && window.innerHeight > 250){

    return window.innerWidth*x;

  }
  else{
    return 450 * x
  }
}
function calc_h(x){
  if(window.innerWidth > 450 && window.innerHeight > 250){

    return window.innerHeight*x;

  }
  else{
    return 250 * x
  }
}

function get_rat_w(x){
  return (x/1030);
}
function get_rat_h(x){
  return (x/1800);
}

function gh(x){
  return calc_h(get_rat_h(x));
}

function gw(x){
  return calc_w(get_rat_w(x));
}

function ww(){
  if(window.innerWidth > 450 && window.innerHeight > 250){
    return window.innerWidth;
  }
  else{
    return 450;
  }
}

function wh(){
  if(window.innerWidth > 450 && window.innerHeight > 250){
    return window.innerHeight;
  }
  else{
    return 250;
  }
}


import { show_CV } from "./CV.js";  
import {Plot} from "./Proj.js"

let app = new PIXI.Application();

const back = new PIXI.Graphics();
back.beginFill(0x000A1A);
back.drawRect(0,0,2000,25000);
back.endFill();

let startX = null; // initialize start x position
let startY = null; // initialize start y position

// add event listeners to the relevant events
window.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', doDrag);
window.addEventListener('mouseup', endDrag);
window.addEventListener('touchstart', startDrag);
window.addEventListener('touchmove', doDrag);
window.addEventListener('touchend', endDrag);

function startDrag(e) {
  if (e.type === 'mousedown') {
    startX = e.clientX;
    startY = e.clientY;
  } else if (e.type === 'touchstart') {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }
}

function doDrag(e) {
  if (startX !== null && startY !== null) {
    const xDiff = e.type === 'mousemove' ? startX - e.clientX : startX - e.touches[0].clientX;
    const yDiff = e.type === 'mousemove' ? startY - e.clientY : startY - e.touches[0].clientY;
    if (Math.abs(xDiff) >= 50 || Math.abs(yDiff) >= 50) {
      window.scrollBy(xDiff, yDiff);
      startX -= xDiff;
      startY -= yDiff;
    }
  }
}

function endDrag(e) {
  startX = null;
  startY = null;
}





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
background.width = ww();
background.height = wh();

window.addEventListener("resize", function() {
  background.width = ww();
  background.height = wh();
});

app.stage.addChild(background);


app.renderer.resize(ww(),wh());


document.body.appendChild(app.view);


const text_style ={
  fontFamily: 'Verdana',
  fontSize: gh(150),
  fill:['#ffffff'],
  wordWrap: true,
  wordWrapWidth : gw(500)
};

// create a new Pixi.js container
const container = new PIXI.Container();
app.stage.addChild(container);

let up_butt = add_text("to top   ",gw(-300),gh(80),{...text_style, fontSize:gh(120),fontWeight:"bold",fill:['#FFFFFF']},true);

// update the position of the sprite whenever the window is scrolled
window.addEventListener("scroll", () => {
  up_butt.position.y = window.scrollY;
});


up_butt.on('pointerup', () => {
  window.scrollTo(0, 0);
});

// set the position of the sprite relative to the top and right edges of the window
up_butt.position.set(
  ww() - up_butt.width,
  window.scrollY
);

container.addChild(up_butt);



//Cursor and Mouse Pointer trail------------------------------------------------------------------

// Get the texture for rope.
let trailTexture = PIXI.Texture.from('static/Images/white_dot.png');

// animation for trailing mouse
const rope = Rope_(app,trailTexture);

// Main APP functionalities*************************************************************
var spac = gw(150);



let CV_button = add_text("Curriculum Vitae",gw(200),gh(80),text_style,true,true,gw(-25),gh(60),gw(25),gh(50),true);
// let Projects_button = add_text("Projects",CV_button.x+CV_button.width+spac,80,text_style,true,true,-55,27,55,55,true);

let CV_container = new DynamicGraphics(gw(200),gh(80));
// Store the previous height of the container
let previousHeight = CV_container.height;

// Define a function to resize the renderer
function resizeRenderer() {
  // Calculate the difference in height between the old and new bounds
  let newHeight = CV_container.height;
  let heightDifference = newHeight - previousHeight;

  // Resize the renderer to account for the change in height
  app.renderer.resize(ww(), app.renderer.view.height + heightDifference);

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

let hint = add_text("CLICK ON THE ARROWS '>' TO SHOW CONTENT",spac,gh(400),{...text_style, fontSize:gh(80),fontWeight:"bold",fill:['#FF0000']},true,true,gw(-25),gh(25),gw(25),gh(50),true);
app.stage.addChild(hint);

let rem_hint = true;

// let Projects_container = new DynamicGraphics(CV_button.x+CV_button.width+spac);

CV_container.name="cv_container_big";

//defining the behaviour of buttons
let CV=null;
let cv_params = [ww()*0.80,gw(-70),CV_button.height+gh(10)]
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
// app.stage.addChild(Projects_container);
app.stage.addChild(CV_button);
app.stage.addChild(CV_container);
app.stage.addChild(rope);


export {
  app,
  calc_h,
  calc_w,
  get_rat_h,
  get_rat_w,
  gh,
  gw,
  ww,
  wh
}



