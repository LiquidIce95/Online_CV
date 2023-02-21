// for moving objects that cannot be integrated in pixi.js
// pxobj are pixi objects and hobj are html objects
import { app} from "./app.js"

// TODO : make dynamicgraphics class such that graphics get shifted vertically if a child gets added
// or removed, then calls shift_vertical on sll paretns and redraw rectangle , st attribute (drawing) to true
//  if rectangle should be drawn
class DynamicGraphics extends PIXI.Graphics{
    constructor(x=0,y=0,width=0,height=0,draw=false,name = "def"){
        super();
        super.x=x;
        super.y=y;
        this._h = height;
        this._w = width;
        this._draw = draw;
        this.name = name;

        if (this._draw == true){
            this.beginFill(0xF5F5DC,0.5);
            this.drawRoundedRect(0,0,width,height);
            this.endFill();

        }
    }

    set_x(val){
        super.x = val;
    }
    set_y(val){
        super.y = val;
    }
    set_h(val){
        this._h = val;
    }
    set_w(val){
        this._w = val;
    }

    addChild(child){
        let ret = super.addChild(child);
        let bounds = child.getLocalBounds();

        if(bounds.height == 0 && child instanceof DynamicGraphics){
            bounds.height = child._h;
        }
        if(bounds.width == 0 && child instanceof DynamicGraphics){
            bounds.width = child._w;
        }
        

        this._w = Math.max(this._w,bounds.width);        
        this._h += bounds.height;


        if ( this._draw == true){

            this.clear();
            this.beginFill(0xF5F5DC,0.5);
            this.drawRoundedRect(0,0,this._w,this._h);
            this.endFill();

        }


        this.shift_vertical(bounds.height);

        return ret;


    }

    removeChild(child){

        let ret = super.removeChild(child);
        let bounds = child.getLocalBounds();

        console.log(this.name,bounds.height, "remove child call");

        if(bounds.height == 0 && child instanceof DynamicGraphics){
            bounds.height = child._h;
        }
        if(bounds.width == 0 && child instanceof DynamicGraphics){
            bounds.width = child._w;
        }


        this._w = Math.max(this._w,bounds.width);        
        this._h -= bounds.height;


        if (this._draw == true){
            this.clear();
            this.beginFill(0xF5F5DC,0.5);
            this.drawRoundedRect(0,0,this._w,this._h);
            this.endFill();
        }


        this.shift_vertical(-bounds.height);

        return ret;



    }

    shift_vertical(height=0){
        let PAR = this.parent;
        let list_objects = null;
        let index = 0;
       

        if ( PAR == null){
            return null;
        }
        else {
            list_objects = PAR.children;
            index = PAR.getChildIndex(this)+1;
        }
        
        PAR._h+= height;


        if (PAR._draw == true){
            PAR.clear();
            PAR.beginFill(0xF5F5DC,0.5);
            PAR.drawRoundedRect(0,0,PAR._w,PAR._h);
            PAR.endFill();
        }

        // app.renderer.resize(window.innerWidth,app.renderer.view.height+height);

    
        for (var i = index; i< list_objects.length;i++){
    
            let ob = list_objects[i];
    
            if ( ob instanceof DynamicGraphics){

                ob.set_y(ob.y+height);
            }
           
    
        }
            
        if ( PAR instanceof DynamicGraphics){
            return PAR.shift_vertical(height);

        }
    }    

    set_buttonMode(val){
        super.buttonMode = val;
    }

    set_interactive(val){
        super.interactive = val;
    }

    
};

class Hybrid extends DynamicGraphics{
    constructor(id1=null,obj=null,x=0,y=0,width=0,height=0,draw=false,name = "def",){
        super(x,y,width,height,draw,name);
        this.id1=id1;
        this.ob = obj;
        this._globalX = 0;
        this._globalY = 0;

    } 


    addChild(child){
        let ret = super.addChild(child);
        this.shift_vertical(child._h);
        this.shift();

        return ret;
    }

    removeChild(child){
        let ret = super.removeChild(child);
        this.shift_vertical(-child._h);
        this.shift();

        return ret;
    }

    set_x(val){
        super.set_x(val);
        this.shift();
        
    }

    set_y(val){
        super.set_y(val);
        this.shift();
    }

    set_h(val){
        super.set_h(val);
        this.shift();
    }

    set_w(val){
        super.set_w(val);
        this.shift();
    }

    shift(){
        this.___updateGlobalCoords();
        console.log("Object name", this.name);
        
        if(this.id1!= null){

            var vals = [0,0];
            vals[0] = this._globalX;
            vals[1] = this._globalY;

            var div = document.getElementById(this.id1);
            div.style.position = "absolute";

            div.style.top = `${vals[1]+super.y}px`;
            div.style.left = `${vals[0]+super.x}px`;
        }

        let list_objects = this.children;
        
        for (var i = 0; i < list_objects.length; i++){
            let ob = list_objects[i];

            if(ob instanceof Hybrid){

                ob.shift();

            }
        }

    }

    ___updateGlobalCoords() {
        let globalPos = this.toGlobal(new PIXI.Point());
        this._globalX = globalPos.x;
        this._globalY = globalPos.y;
    }

    shift_vertical(height=0){
        super.shift_vertical(height);

        let PAR = this.parent;
        let list_objects = null;
        let index =0 ;

        if(PAR == null || !(PAR instanceof Hybrid)){
            return null;
        }
        else{
            list_objects = PAR.children;
            index = PAR.getChildIndex(this)+1;
        }

        for(var i = index; i < list_objects.length ;i++){

            let ob = list_objects[i];

            if ( ob instanceof Hybrid){
                list_objects[i].shift();

            }

        }

        if ( PAR instanceof Hybrid){
            return PAR.shift();

        }

    }

    set_h(val){
        super._h = val;
    }
    

}

class HybridPlot extends Hybrid{
    constructor( id1=null,obj=null,x=0,y=0,width=0,height=0,draw=false,name = "def",){
        super(id1,obj ,x,y,width,height,draw,name);

    }
    destroy(options){
        Plotly.purge(this.id1);
        super.destroy(options);
    }
    
};



// app_target always with / in front and body is a dictionary with the params for the 
// back end function
async function FETCH(app_target, body){

    let response = await fetch(`${app_target}`,{
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type':'application/json'
        }
    })

    response =  await response.json();
    var data =  await response["result"];
    return data;
    
}


function add_text(text,x,y,style_param,buttonM=false){
    let label = new PIXI.Text(text,style_param);
    let button = new DynamicGraphics();
    button.set_x(x);
    button.set_y(y);
    
    button.set_buttonMode(buttonM);
    button.set_interactive(buttonM);



    button.addChild(label);

    return button;
}



//opens and closes windows in application, Ele is the element to be created from fun ( function) with param ( parameters)
async function button_handler(Ele,fun,param,par){
    //parent is of button, need this for resizing the parent when child is removed
    if (Ele==null){

        Ele = await fun(param);
        
        par.addChild(Ele);
    
        return Ele;

    } else {
                        
        par.removeChild(Ele).destroy({children: true});
    
        Ele = null;
        return Ele;
    }
}

/**
 * Cubic interpolation based on https://github.com/osuushi/Smooth.js
 */
function clipInput(k, arr) {
    if (k < 0) k = 0;
    if (k > arr.length - 1) k = arr.length - 1;
    return arr[k];
}

function getTangent(k, factor, array) {
    return factor * (clipInput(k + 1, array) - clipInput(k - 1, array)) / 2;
}

function cubicInterpolation(array, t, tangentFactor) {
    if (tangentFactor == null) tangentFactor = 1;

    const k = Math.floor(t);
    const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
    const p = [clipInput(k, array), clipInput(k + 1, array)];
    t -= k;
    const t2 = t * t;
    const t3 = t * t2;
    return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
}

function ad_img([path,x,y,width=100,height=100]){
    // load an image
    let im_s = PIXI.Texture.from(path);
    im_s = new PIXI.Sprite(im_s);

    im_s.width = width;
    im_s.height = height;
    
    im_s.x=x;
    im_s.y=y;
    let Imag = new DynamicGraphics();
    Imag.addChild(im_s);

    // Imag.set_x(x);
    // Imag.set_y(y);
    // Imag.set_h(height);
    // Imag.set_w(width);
    console.log("ad_img call 2",Imag,im_s);

    return Imag;

}

function Rope_(app,trailTexture){
    const historyX = [];
    const historyY = [];
    // historySize determines how long the trail will be.
    const historySize = 10;
    // ropeSize determines how smooth the trail will be.
    const ropeSize = 30;
    const points = [];

    // Create history array.
    for (let i = 0; i < historySize; i++) {
        historyX.push(0);
        historyY.push(0);
    }
    // Create rope points.
    for (let i = 0; i < ropeSize; i++) {
        points.push(new PIXI.Point(0, 0));
    }

    // Create the rope
    const rope = new PIXI.SimpleRope(trailTexture, points);

    // Set the blendmode
    rope.blendmode = PIXI.BLEND_MODES.ADD;

    app.stage.addChild(rope);

    let mouseposition = { x: 0, y: 0 };
    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('mousemove', (event) => {
        mouseposition = mouseposition || { x: 0, y: 0 };
        mouseposition.x = event.data.global.x;
        mouseposition.y = event.data.global.y;
        
    });

    // Listen for animate update
    app.ticker.add(() => {
        if (!mouseposition) return;

        // Update the mouse values to history
        historyX.pop();
        historyX.unshift(mouseposition.x);
        historyY.pop();
        historyY.unshift(mouseposition.y);
        // Update the points to correspond with history.
        for (let i = 0; i < ropeSize; i++) {
            const p = points[i];

            // Smooth the curve with cubic interpolation to prevent sharp edges.
            const ix = cubicInterpolation(historyX, i / ropeSize * historySize);
            const iy = cubicInterpolation(historyY, i / ropeSize * historySize);

            p.x = ix;
            p.y = iy;
        }
        // app.renderer.view.style.cursor = "url('static/Images/cursor.png'),auto";
    });

    return rope;
}

export {
  FETCH,
  button_handler,
  clipInput,
  getTangent,
  cubicInterpolation,
  ad_img,
  Rope_,
  add_text,
  Hybrid,
  HybridPlot,
  DynamicGraphics
}