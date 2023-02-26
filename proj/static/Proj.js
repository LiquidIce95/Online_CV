import { FETCH,add_text,Hybrid,HybridPlot } from "./Utility.js";

async function Plot([]){
    var res = await FETCH("/multiply",{num: 4})


    var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
    };

    var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
    };

    var data = [trace1, trace2];

    var div = document.getElementById("myDiv");
    div.style.position = "absolute";
    div.style.top = "100px";
    div.style.left = "200px";
    div.style.position = "fixed";

    let obj = Plotly.newPlot('myDiv', data,{},{displaylogo: false});

    let con = new PIXI.Graphics()


    let Plotti = new HybridPlot('myDiv',obj);

    let resultText = new PIXI.Text(res, { fill: 0xff0000 });
    resultText.x = 100;
    resultText.y = 300;
    // con.addChild(resultText);
    Plotti.set_x(100);
    Plotti.set_y(150);
    con.addChild(Plotti);

    return con;
}

export {
    Plot
}