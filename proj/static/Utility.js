// for moving objects that cannot be integrated in pixi.js
// pxobj are pixi objects and hobj are html objects


class Hybrid extends PIXI.Container{
    constructor(hobj1,id1){
        super();
        this.HEIGHT = 0;
        this._x = this.x;
        this._y = this.y;
        this.hobj1 = hobj1;
        this.id1=id1;

        if ( id1 != null){
            this._globalX = 0;
            this._globalY = 0;        
        
            var div = document.getElementById(id1);
            div.style.position = "absolute";
            div.style.borderRadius= "50px";

            Object.defineProperty(this, "x", {
            set: value => {
                this._x = value;
                this.shift();
            },
            get: () => this._x
            });
            
            Object.defineProperty(this, "y", {
            set: value => {
                this._y = value;
                this.shift();
            },
            get: () => this._y
            });
        }
    } 

    

    ___updateGlobalCoords() {
        console.log("UPDATE GLOBAL CALL");
        let globalPos = this.toGlobal(new PIXI.Point());
        console.log("globals coooos:",globalPos.x,globalPos.y);
        this._globalX = globalPos.x;
        this._globalY = globalPos.y;
    }


    shift(){
        // this.x = x;
        // this.y = y;
        if (this.id1 != null){
            console.log("shift, call!! ",this.x,this.y);

            var vals = [0,0];
            this.___updateGlobalCoords();
            vals[0] = this._globalX;
            vals[1] = this._globalY;

            console.log("global co : ",vals[0],vals[1]);

            var div = document.getElementById(this.id1);
            div.style.position = "absolute";



            div.style.top = `${vals[1]+this.y}px`;
            div.style.left = `${vals[0]+this.x}px`;
        }

        for (var k = 0; k< this.children.length;k++){
            let child = this.children[k];

            if (child instanceof Hybrid){
                child.shift();
            }
        }


    }

    // destroy(){

    //     for (var k = 0; k< this.children.length ; k++ ) {
    //         let child = this.children[k];

    //         child.destroy();
    //     }

    //     super.destroy();
    // }



}

class HybridPlot extends Hybrid{
    constructor(hobj1, id1){
        super(hobj1,id1);

    }
    destroy(options){
        console.log("Destructor called********************");
        Plotly.purge(this.id1);
        super.destroy(options);
    }
}


//styling function
function cust_style(WWw,font='Helvetica',fontsiz=50,fontsty='normal',fontWei='normal',fill_col=['#000000'],stro='',Stro_thik=0,Ww=false,Lj=''){
    // Text must be PIXI.js object with width attribute

    const style = new PIXI.TextStyle({
        fontFamily: font,
        fontSize: fontsiz,
        fontStyle: fontsty,
        fontWeight: fontWei,
        fill: fill_col, // gradient
        stroke: stro,
        strokeThickness: Stro_thik,
        wordWrap: Ww,
        wordWrapWidth: WWw,
        lineJoin: Lj,
    });
    return style;


}

function shift_vertical(APP,height,list_objects,index=0,stop=0){
    console.log("resize_graphics_called ",height);

    let rect = list_objects[0];
    
    rect.height+= height;
    APP.renderer.resize(window.innerWidth,rect.height+500);

    if (index >= list_objects.length){
        return list_objects;
    }

    for (var i = index; i< list_objects.length-stop;i++){

        let ob = list_objects[i];

        if ( ob instanceof Hybrid){
            ob.y += height;
            ob.shift();
        }

        else{
            ob.y += height;
        }
           

        

    }
    console.log("resize_graphics_endcall",height);
    

    
    return list_objects;
}
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


function add_text(text,x,y,buttonM=false,WWw,font='Verdana',fontsiz=50,fontsty='normal',fontWei='normal',fill_col=['#000000'],stro='',Stro_thik=0,Ww=true,Lj=''){
    let label = new PIXI.Text(text,cust_style(WWw,font,fontsiz,fontsty,fontWei,fill_col,stro,Stro_thik,Ww,Lj));
    let button = new PIXI.Graphics();
    button.x = x;
    button.y =y;
    
    button.buttonMode = buttonM;
    button.interactive = buttonM;



    button.addChild(label);

    return button;
}



//opens and closes windows in application
async function button_handler(APP,index,Ele,fun,param,button=null,app=null){
    //parent is of button, need this for resizing the parent when child is removed
    if (Ele==null){
        Ele = await fun(param);
        
        if(app != null){
            app.stage.addChildAt(Ele,app.stage.children.length-2);
            if ( Ele instanceof Hybrid){
                Ele.shift();
            }

        }
        else if (button!=null){
            var height = Ele.height+30;

            if(Ele instanceof Hybrid){
                height= Ele.HEIGHT;
            }

            console.log("Ele.height: ",height,Ele);
            let parent = button.parent;
            shift_vertical(APP,height,parent.children,index);
            button.addChild(Ele);

            if ( Ele instanceof Hybrid){
                Ele.shift();
            }

        }
        return Ele;

    } else {
        //so when we destroy Ele, rope still exists
        console.log(Ele,"before destroy");

        if(app!= null){
            app.stage.removeChild(Ele).destroy({children: true});
            app.renderer.resize(window.innerWidth,window.innerHeight);
        }
        else if(button != null){
            var height = Ele.height+30;

            if(Ele instanceof Hybrid){
                height= Ele.HEIGHT;
            }

            let parent = button.parent;

            
            // console.log(Ele.children[0].x, "before change");
            
            button.removeChild(Ele).destroy({children: true});
            shift_vertical(APP,-height,parent.children,index);
            // console.log(Ele.children[0].x,"after change");
        
            
        }
        // console.log(Ele," after destr")

        Ele = null;
        console.log("success");
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
    im_s.x = x;
    im_s.y = y;

    return im_s;

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
    console.log('HELLO!');

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
  cust_style,
  ad_img,
  shift_vertical,
  Rope_,
  add_text,
  Hybrid,
  HybridPlot
}