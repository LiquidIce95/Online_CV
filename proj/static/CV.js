import { ad_img, button_handler, add_text, Hybrid, HybridPlot, DynamicGraphics } from "./Utility.js";
import 
{gh,
gw}
from "./app.js"

let text_style = {
  fontFamily: "Verdana",
  fontSize: Math.max(gh(40),25),
  fill: ["#000000"],
  wordWrap: true,
  wordWrapWidth : gw(400)
};

let space = gw(300);


function Personalien([x, y, width]) {
  let field = new DynamicGraphics();
  field.set_x(x);
  field.set_y(y);

  let text_style_Pers = { ...text_style, wordWrapWidth : width };



  let per_param = ["static/Images/bewerbungsfoto.png", 0, gh(100), gw(250), gw(250)];
  let picture = ad_img(per_param);

  let name_ = add_text("Name", 0, picture.y+picture.height + gh(100), {...text_style_Pers, fontWeight:"bold"}, false);
  let name = add_text("David Sanchez", space, name_.y, text_style_Pers, false);

  let birth_ = add_text("Birthdate", 0, name_.y + name_.height + gh(100), {...text_style_Pers,fontWeight:"bold"}, false);
  let birth = add_text("17.05.1995", space, birth_.y, text_style_Pers, false);

  let nation_ = add_text("Nationality", 0, birth_.y + birth_.height + gh(100), {...text_style_Pers,fontWeight:"bold"}, false);
  let nation = add_text("Switzerland, Spain", space, nation_.y, text_style_Pers, false);

  let Civi_ = add_text("Civil Status", 0, nation_.y + nation_.height + gh(100), {...text_style_Pers,fontWeight:"bold"}, false);
  let Civi = add_text("in relationship", space, Civi_.y, text_style_Pers, false);

  let Add_ = add_text("Address", 0, Civi_.y + Civi_.height + gh(100), {...text_style_Pers,fontWeight:"bold"}, false);
  let Add = add_text("On Inquiry", space, Add_.y, text_style_Pers, false);

  let mobi_ = add_text("Mobile", 0, Add.y + Add.height + gh(100), {...text_style_Pers,fontWeight:"bold"}, false);
  let mobi = add_text("On Inquiry", space, mobi_.y, text_style_Pers, false);

  let mail_ = add_text("E-Mail", 0, mobi_.y + mobi_.height + gh(100), {...text_style_Pers,fontWeight:"bold"}, false);
  let mail = add_text("davidsanchez062@gmail.com, write me if you want the uncensored CV", space, mail_.y, text_style_Pers, false);

  field.addChild(picture);
  field.addChild(name_);
  field.addChild(name);
  field.addChild(birth_);
  field.addChild(birth);
  field.addChild(nation);
  field.addChild(nation_);
  field.addChild(Civi_);
  field.addChild(Civi);
  field.addChild(Add_);
  field.addChild(Add);
  field.addChild(mobi_);
  field.addChild(mobi);
  field.addChild(mail_);
  field.addChild(mail);

  return field;
}

let time_WW = 110;

function Education([x,y]){

    let field = new DynamicGraphics();
    let space2 = 0;
    field.set_x(x);
    field.set_y(y);
    field.name = "Educaton field";
    let text_style_Edu = { ...text_style, wordWrap: true,wordWrapWidth : gw(400) };


    let time_uzh = add_text("2022 - 2025",0,gh(50),{...text_style_Edu,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let uzh = add_text("Bsc Mathematics / Computer Science (120/60 ECTS)",space,time_uzh.y,{...text_style_Edu,fontWeight:"bold"});
    let uzh2 = add_text("University of Zurich",space,uzh.y+uzh.height+gh(3),text_style_Edu);
    let con_uzh = new DynamicGraphics();
    con_uzh.set_x(space2);
    con_uzh.set_y(uzh2.y+uzh2.height+gh(10));

    let time_eth = add_text("2021 - 2022",0,uzh2.y+uzh2.height+gh(100),{...text_style_Edu,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let eth = add_text("Bsc Mathematics",space,time_eth.y,{...text_style_Edu,fontWeight:"bold"});
    let eth2 = add_text("ETH Zurich",space,eth.y+eth.height+3,text_style_Edu);   
    let con_eth2 = new DynamicGraphics();
    con_eth2.set_x(space2);
    con_eth2.set_y(eth2.y+eth2.height+gh(10));

    let time_eth3 = add_text("2020 - 2021",0,eth2.y+eth2.height+gh(100),{...text_style_Edu,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let eth3 = add_text("Bsc Computer Science",space,time_eth3.y,{...text_style_Edu,fontWeight:"bold"});
    let eth4 = add_text("ETH Zurich",space,eth3.y+eth3.height+gh(3),text_style_Edu);
    let con_eth = new DynamicGraphics();
    con_eth.set_x(space2);
    con_eth.set_y(eth4.y+eth4.height+gh(10));    


    let time_pass = add_text("08.2018 - 08.2019",0,eth4.y+eth4.height+gh(100),{...text_style_Edu,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let pass = add_text("University entrance exam (Passerelle)",space,time_pass.y,{...text_style_Edu,fontWeight:"bold"});
    let pass2 = add_text("AME in Aarau",space,pass.y+pass.height+gh(3),text_style_Edu);
    let con_pass = new DynamicGraphics();
    con_pass.set_x(space2);
    con_pass.set_y(pass2.y+pass2.height+gh(10));

    let time_bm = add_text("08.2017 - 08.2018",0,pass2.y+pass2.height+gh(100),{...text_style_Edu,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let bm = add_text("Higher education entrance exam (Berufsmatura)",space,time_bm.y,{...text_style_Edu,fontWeight:"bold"});
    let bm2 = add_text("KV Reinach in Lenzburg",space,bm.y+bm.height+gh(3),text_style_Edu);
    let con_bm = new DynamicGraphics();
    con_bm.set_x(space2);
    con_bm.set_y(bm2.y+bm2.height+gh(10));


    let time_kv = add_text("08.2012 - 08.2015",0,bm2.y+bm2.height+gh(100),{...text_style_Edu,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let kv = add_text("Business Apprenticeship E-Profile",space,time_kv.y,{...text_style_Edu,fontWeight:"bold"});
    let kv2 = add_text("tesa tape CH AG in Bergdietikon",space,kv.y+kv.height+gh(3),text_style_Edu);
    let con_kv = new DynamicGraphics();
    con_kv.set_x(space2);
    con_kv.set_y(kv2.y+kv2.height+gh(10));

    let parms = ["static/Images/anhange/00/00.png", 0, 0, gw(700),1/2 * gw(700)];

    let pico = null;
    async function insert_attach_uzh (){
        pico = await button_handler(pico,ad_img,parms,con_uzh);
    };

    time_uzh.on('pointerup',insert_attach_uzh);
// 
    let para_eth2 = ["static/Images/anhange/02/02_1.png", 0, 0, gw(700),3* gh(700)];

    let attach_eth2 = null;
    async function insert_attach_eth2 (){
        attach_eth2 = await button_handler(attach_eth2,ad_img,para_eth2,con_eth2);
    };

    time_eth.on('pointerup',insert_attach_eth2);
// 
    let para_eth = ["static/Images/anhange/01/01-1.png", 0, 0, gw(700),3* gh(700)];

    let attach_eth = null;
    async function insert_attach_eth (){
        attach_eth = await button_handler(attach_eth,ad_img,para_eth,con_eth);
    };

    time_eth3.on('pointerup',insert_attach_eth);
// 
    let para_pass = ["static/Images/anhange/04/04-1.png", 0, 0, gw(700),3* gh(700)];

    let attach_pass = null;
    async function insert_attach_pass (){
        attach_pass = await button_handler(attach_pass,ad_img,para_pass,con_pass);
    };

    time_pass.on('pointerup',insert_attach_pass);
// 
    let para_bm = ["static/Images/anhange/05/05-1.png", 0, 0, gw(700),  gw(700)];

    let attach_bm = null;
    async function insert_attach_bm (){
        attach_bm = await button_handler(attach_bm,ad_img,para_bm,con_bm);
    };

    time_bm.on('pointerup',insert_attach_bm);
// 
    let para_kv = ["static/Images/anhange/06/06-1.png", 0, 0, gw(700),  gw(700)];

    let attach_kv = null;
    async function insert_attach_kv (){
        attach_kv = await button_handler(attach_kv,ad_img,para_kv,con_kv);
    };

    time_kv.on('pointerup',insert_attach_kv);

    field.addChild(time_uzh);
    field.addChild(uzh);
    field.addChild(uzh2);
    field.addChild(con_uzh);

    field.addChild(time_eth);
    field.addChild(eth);
    field.addChild(eth2);
    field.addChild(con_eth2);

    field.addChild(time_eth3);
    field.addChild(eth3);
    field.addChild(eth4);
    field.addChild(con_eth);

    field.addChild(time_pass);
    field.addChild(pass);
    field.addChild(pass2);
    field.addChild(con_pass);

    field.addChild(time_bm);
    field.addChild(bm);
    field.addChild(bm2);
    field.addChild(con_bm);

    field.addChild(time_kv);
    field.addChild(kv);
    field.addChild(kv2);
    field.addChild(con_kv);

    
    
    return field;
}

function Experience([x,y]){
    
    let field = new DynamicGraphics();
    let space2 = 0;
    let space3 = gh(20);
    field.set_x(x);
    field.set_y(y);

    let text_style_exp = { ...text_style,wordWrapWidth : gw(400) };

    let time_omg = add_text("11.2022 - currently",0,gh(100),{...text_style_exp,fontWeight:"bold",wordWrapWidth:gw(time_WW)});
    let omg = add_text("IT Assistant/Support, 30 - 40 %",space,time_omg.y,{...text_style_exp,fontWeight:"bold"});
    let omg2 = add_text("Omnicommediagroup CH",space,omg.y+omg.height+gh(3),text_style_exp);
    let omg3 = add_text("first and second level support",space,omg2.y+omg2.height+space3,text_style_exp);
    let omg4 = add_text("process automation and optimization",space,omg3.y+omg3.height,text_style_exp);


    let time_civi = add_text("01.2020 - 08.2020",0,omg4.y+omg4.height+gh(100),{...text_style_exp,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let civi = add_text("Civil Service : Data management employee",space,time_civi.y,{...text_style_exp,fontWeight:"bold"});
    let civi2 = add_text("ETH Zurich",space,civi.y+civi.height+3,text_style_exp);
    let civi3 = add_text("Updating and maintaining database",space,civi2.y+civi2.height+space3,text_style_exp);
    let con_civi = new DynamicGraphics();
    con_civi.set_x(space2);
    con_civi.set_y(civi3.y+civi3.height+gh(10));


    let time_trd = add_text("05.2016 - 08.2020",0,civi3.y+civi3.height+gh(100),{...text_style_exp,fontWeight:"bold",wordWrapWidth:gw(time_WW)});
    let trd = add_text("Algorithmic Trader / independant",space,time_trd.y,{...text_style_exp,fontWeight:"bold"});
    let trd2 = add_text("Self teaching of the following activities",space,trd.y+trd.height+space3,text_style_exp);
    let trd3 = add_text("Data retrieval (Stocks, Futures)",space, trd2.y+trd2.height+gh(3),text_style_exp);
    let trd4 = add_text("Coding software to convert formats of data (python,c++)",space, trd3.y+trd3.height+gh(3),text_style_exp);
    let trd5 = add_text("Researching and developing of trading strategies ",space, trd4.y+trd4.height+gh(3),text_style_exp);
    let trd6 = add_text("Coding of Tradingstrategies on Multicharts(C#)",space, trd5.y+trd5.height+3,text_style_exp);
    let trd7 = add_text("Conducting backtests and optimization on Multicharts",space, trd6.y+trd6.height+gh(3),text_style_exp);


    let time_arm = add_text("11.2015 - 02.2017",0,trd7.y+trd7.height+gh(100),{...text_style_exp,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let arm = add_text("Lietenant Swiss Armed Forces",space,time_arm.y,{...text_style_exp,fontWeight:"bold"});
    let arm2 = add_text("Preparing, commanding , overseeing education of soldiers",space,arm.y+arm.height+space3,text_style_exp);
    let arm3 = add_text("Coordination and planning of platoon (30 people)",space,arm2.y+arm2.height+gh(3),text_style_exp);
    let arm4 = add_text("Deployment at World Economic Forum 2017",space,arm3.y+arm3.height+3,text_style_exp);
    let con_arm = new DynamicGraphics();
    con_arm.set_x(space2);
    con_arm.set_y(arm4.y+arm4.height+gh(10));

    let time_ass = add_text("08.2015 - 10.2015",0,arm4.y+arm4.height+gh(100),{...text_style_exp,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let ass = add_text("Assistant Project Management",space,time_ass.y,{...text_style_exp,fontWeight:"bold"});
    let ass1 = add_text("sfb Bildungszentrum",space,ass.y+ass.height+gh(3),text_style_exp);
    let ass2 = add_text("Correcting and improving of website",space,ass1.y+ass1.height+space3,text_style_exp);
    let ass3 = add_text("Data preparation",space,ass2.y+ass2.height+gh(3),text_style_exp);
    let ass4 = add_text("Data Analysis",space,ass3.y+ass3.height+gh(3),text_style_exp);
    let ass5 = add_text("Support of team",space,ass4.y+ass4.height+gh(3),text_style_exp);
    let con_ass = new DynamicGraphics();
    con_ass.set_x(space2);
    con_ass.set_y(ass5.y+ass5.height+gh(10));


    let time_app = add_text("08.2012 - 08.2015",0,ass5.y+ass5.height+gh(100),{...text_style_exp,fontWeight:"bold",wordWrapWidth:gw(time_WW)},true,true,gw(-15),gh(8),gw(15),gh(30));
    let app = add_text("Commercial Employee (Apprenticeship)",space,time_app.y,{...text_style_exp,fontWeight:"bold"});
    let app2 = add_text("tesa tape CH AG",space,app.y+app.height+gh(3),text_style_exp);
    let app3 = add_text("Human Ressources",space,app2.y+app2.height+space3,text_style_exp);
    let app4 = add_text("Sales Department",space,app3.y+app3.height+gh(3),text_style_exp);
    let app5 = add_text("Purchasing Department",space,app4.y+app4.height+gh(3),text_style_exp);
    let app6 = add_text("Marketing ",space,app5.y+app5.height+gh(3),text_style_exp);
    let app7 = add_text("Accounting",space,app6.y+app6.height+gh(3),text_style_exp);
    let app8 = add_text("Product Development",space,app7.y+app7.height+gh(3),text_style_exp);
    let con_app = new DynamicGraphics();
    con_app.set_x(space2);
    con_app.set_y(app8.y+app8.height+gh(10));


    let para_civi = ["static/Images/anhange/13/13-1.png", 0, 0, gw(700), 3*gw(700)];

    let attach_civi = null;
    async function insert_attach_civi (){
        attach_civi = await button_handler(attach_civi,ad_img,para_civi,con_civi);
    };

    time_civi.on('pointerup',insert_attach_civi);
// 
    let para_arm = ["static/Images/anhange/07/07-1.png", 0, 0, gw(700), 2*gh(700)];
    let para_arm2 = ["static/Images/anhange/11/11-1.png", 0, 2*gh(700)+ gh(30), gw(700), 3*gh(700)];
    let para_arm3 = ["static/Images/anhange/12/12-1.png", 0, 2*gh(700)+ gh(30)+3*gh(700)+ gh(30), gw(700), 3*gh(700)];


    let attach_arm = null;
    let attach_arm2 = null;
    let attach_arm3 = null;

    async function insert_attach_arm (){
        attach_arm = await button_handler(attach_arm,ad_img,para_arm,con_arm);
        attach_arm2 = await button_handler(attach_arm2,ad_img,para_arm2,con_arm);
        attach_arm3 = await button_handler(attach_arm3,ad_img,para_arm3,con_arm);

    };

    time_arm.on('pointerup',insert_attach_arm);

// 
    let para_ass = ["static/Images/anhange/18/18-1.png", 0, 0, gw(700), 3*gh(700)];
    
    let attach_ass = null;
    async function insert_attach_ass (){
        attach_ass = await button_handler(attach_ass,ad_img,para_ass,con_ass);
    };

    time_ass.on('pointerup',insert_attach_ass);

// 
    let para_app = ["static/Images/anhange/16/16-1.png", 0, 0, gw(700), 3*gh(700)];
    let para_app2 = ["static/Images/anhange/17/17-1.png", 0, 3*gh(700)+gh(30), gw(700), 3*gh(700)];

    let attach_app = null;
    let attach_app2 = null;
    async function insert_attach_app (){
        attach_app = await button_handler(attach_app,ad_img,para_app,con_app);
        attach_app2 = await button_handler(attach_app2,ad_img,para_app2,con_app);

    };

    time_app.on('pointerup',insert_attach_app);
    

    field.addChild(time_omg);
    field.addChild(omg);
    field.addChild(omg2);
    field.addChild(omg3);
    field.addChild(omg4);

    field.addChild(time_civi);
    field.addChild(civi);
    field.addChild(civi2);
    field.addChild(civi3);
    field.addChild(con_civi);

    field.addChild(time_trd);
    field.addChild(trd);
    field.addChild(trd2);
    field.addChild(trd3);
    field.addChild(trd4);
    field.addChild(trd5);
    field.addChild(trd6);
    field.addChild(trd7);

    field.addChild(time_arm);
    field.addChild(arm);
    field.addChild(arm2);
    field.addChild(arm3);
    field.addChild(con_arm);

    field.addChild(time_ass);
    field.addChild(ass);
    field.addChild(ass1);
    field.addChild(ass2);
    field.addChild(ass3);
    field.addChild(ass4);
    field.addChild(ass5);
    field.addChild(con_ass);

    field.addChild(time_app);
    field.addChild(app);
    field.addChild(app2);
    field.addChild(app3);
    field.addChild(app4);
    field.addChild(app5);
    field.addChild(app6);
    field.addChild(app7);
    field.addChild(app8);
    field.addChild(con_app);

    return field;

}

function skills([x,y]){

    // Creating all tables
    // languages
    var layoutLan = {
        margin: {l:0, r:0, t:0, b:0},
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        // height: 0.14*gw(500),
        width: gw(700)
    };

    var layoutOS = {
        margin: {l:0, r:0, t:0, b:0},
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        // height: 0.14*gw(500),
        width: gw(700)
    };

    var layoutDB = {
        margin: {l:0, r:0, t:0, b:0},
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        // height: 0.072*gw(500),
        width: gw(700)
    };

    var layoutPL = {
        margin: {l:0, r:0, t:0, b:0},
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        // height: 0.27*gw(500),
        width: gw(700)
    };

    var layoutO = {
        margin: {l:0, r:0, t:0, b:0},
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        // height: Math.max(0.205*gw(500),100),
        width: gw(700)
    };

    var values = [
      ['German', 'English', 'French'],
      ["Mother language", "B2 First", "B2 Delf Dalf"]
      
    ]

    var dataLan = [{
    type: 'table',
    header: {
        values: [["<b>Languages</b>"], ["<b>Level</b>"]],
        align: "left",
        line: {width: gw(1), color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: gh(40), color: "white"}
    },
    cells: {
        values: values,
        align: "center",
        line: {color: "black", width: gw(1)},
        font: {family: "Verdana", size: gh(40), color: ["black"]},
        height: Math.max(gh(50),30)
    }
    }]
    
    

    // Operating systems
    var valuesOS = [
      ['Windows7/10', 'Linux Debian', 'Windows11'],
      ["Currently", "Currently", "Currently"],
      ["","","x"],
      ["x","x",""],
      ["","",""]
      
    ]

    var dataOS = [{
    type: 'table',
    header: {
        values: [["<b>OS</b>"],["<b>Usage</b>"], ["<b>basic</b>"],["<b>good</b>"],["<b>advanced</b>"]],
        align: "left",
        line: {width: gw(1), color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: gh(40), color: "white"}
    },
    cells: {
        values: valuesOS,
        align: "center",
        line: {color: "black", width: gw(1)},
        font: {family: "Verdana", size: gh(40), color: ["black"]},
        height: Math.max(gh(50),30)
    },
    // autosize table to fit contents
    autosize: true
    }]
    

    // Databases
    var valuesDB = [
      ['Sqlite 3'],
      ["2020"],
      [""],
      ["x"],
      [""]
      
    ]

    var dataDB = [{
    type: 'table',
    header: {
        values: [["<b>Database</b>"],["<b>Usage</b>"], ["<b>basic</b>"],["<b>good</b>"],["<b>advanced</b>"]],
        align: "left",
        line: {width: gw(1), color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: gh(40), color: "white"}
    },
    cells: {
        values: valuesDB,
        align: "center",
        line: {color: "black", width: gw(1)},
        font: {family: "Verdana", size: gh(40), color: ["black"]},
        height: Math.max(gh(50),30)
    }
    }]
    
    var valuesPL = [
      ['Bash-Scripting','C++','Python','SQL','Java','Javascript','Visual Basic'],
      ["currently","2022","currently","2020","2020","currently","2019"],
      ["x","","","x","","","x"],
      ["","","","","x","x",""],
      ["","x","x","","","",""]
      
    ]

    var dataPL = [{
    type: 'table',
    header: {
        values: [["<b>Programming</b>"],["<b>Usage</b>"], ["<b>basic</b>"],["<b>good</b>"],["<b>advanced</b>"]],
        align: "left",
        line: {width: gw(1), color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: gh(40), color: "white"}
    },
    cells: {
        values: valuesPL,
        align: "center",
        line: {color: "black", width: gw(1)},
        font: {family: "Verdana", size: gh(40), color: ["black"]},
        height: Math.max(gh(50),30)
    }
    }]

    var valuesO = [
      ['Excel','MS office/Office 365','Libre Office','Teamwork','Communication'],
      ["currently","currently","currently","currently","currently"],
      ["","","","",""],
      ["","","","x","x"],
      ["x","x","x","",""]
      
    ]
    
    var dataO = [{
    type: 'table',
    header: {
        values: [["<b>Other</b>"],["<b>Usage</b>"], ["<b>basic</b>"],["<b>good</b>"],["<b>advanced</b>"]],
        align: "left",
        line: {width: gw(1), color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: gh(40), color: "white"}
    },
    cells: {
        values: valuesO,
        align: "center",
        line: {color: "black", width: gw(1)},
        font: {family: "Verdana", size: gh(40), color: ["black"]},
        height: Math.max(gh(50),30)
    }
    }]

    
    let link = add_text("click here to get to my github!",x,gh(150),{...text_style, fontSize:gh(70),fill:['#8B0000']},true);
    link.on('pointerup', () => {
        // navigate to GitHub in a new tab
        window.open('https://github.com/LiquidIce95?tab=repositories', '_blank');
    });

    var topspace = gh(100);

    let Lang_table = Plotly.newPlot('skill_table1', dataLan,layoutLan,{displaylogo:false});  
    

    let Lang_tableH = new HybridPlot("skill_table1",Lang_table);

    Lang_tableH.set_x(x);
    Lang_tableH.set_y(link.y+link.height+gh(20));
    // Lang_tableH.set_w(layoutLan["width"]);
    // Lang_tableH._h = layoutLan["height"];

    let OS_table = Plotly.newPlot('skill_table_OS',dataOS,layoutOS,{displaylogo:false});

    let OS_tableH = new HybridPlot("skill_table_OS",OS_table);


    OS_tableH.set_x(x);
    OS_tableH.set_y(Lang_tableH.y+4*Math.max(gh(50),30)+topspace);
    // OS_tableH.set_w(layoutOS["width"]);
    // OS_tableH._h = layoutOS["height"];


    let DB_table = Plotly.newPlot('skill_table_DB',dataDB,layoutDB,{displaylogo:false});
    let DB_tableH = new HybridPlot('skill_table_DB',DB_table);

    DB_tableH.set_x(x);
    DB_tableH.set_y(OS_tableH.y+4*Math.max(gh(50),30)+topspace);
    // DB_tableH.set_w(layoutDB["width"]);


    let PL_table = Plotly.newPlot('skill_table_PL',dataPL,layoutPL,{displaylogo:false});
    let PL_tableH = new HybridPlot('skill_table_PL',PL_table);

    PL_tableH.set_x(x);
    PL_tableH.set_y(DB_tableH.y+2*Math.max(gh(50),30)+topspace);
    // PL_tableH.set_w(layoutPL["width"]);

    let O_table = Plotly.newPlot('skill_table_O',dataO,layoutO,{displaylogo:false});
    let O_tableH = new HybridPlot('skill_table_O',O_table);

    O_tableH.set_x(x);
    O_tableH.set_y(PL_tableH.y+8*Math.max(gh(50),30)+topspace);
    // O_tableH.set_w(layoutO["width"]);

    Lang_tableH.name = "lantable";
    OS_tableH.name = "OStable";
    DB_tableH.name = "DBtable";
    PL_tableH.name = "PLtable";
    O_tableH.name = "Otable";

    let Con = new Hybrid();


    Con.addChild(link);
    Con.addChild(Lang_tableH);
    Con.addChild(OS_tableH);
    Con.addChild(DB_tableH);
    Con.addChild(PL_tableH);
    Con.addChild(O_tableH);

    Con.name="Container for tables";
    Con.set_x(x);
    Con.set_y(y);
    Con.set_h(34*Math.max(gh(50),30));
    return Con;

}

// TODO: donwload button for attachent , in Developemnt hint for projects, back to top

//interactive CV app
async function show_CV([width,x,y]){
    // here comes complete CV application
    let field = new DynamicGraphics(x,y,width,gh(300),true);

    field.name = "CV field";

    var spac = gh(100);

    var leftspace=gw(75);
    

    let button_pers = add_text("Personal Information",0,0,{...text_style, wordWrap:true,wordWrapWidth:gw(200),fontSize:Math.max(gh(80),50)},true,true,gw(-15),gh(30),gw(15),gh(30));
    let button_edu = add_text("Education",0,0,{...text_style, wordWrap:true,wordWrapWidth:gw(200),fontSize:Math.max(gh(80),50)},true,true,gw(-15),gh(30),gw(15),gh(30));
    let button_exp = add_text("Experience",0,0,{...text_style, wordWrap:true,wordWrapWidth:gw(200),fontSize:Math.max(gh(80),50)},true,true,gw(-15),gh(30),gw(15),gh(30));
    let button_skills = add_text("Skills",0,0,{...text_style, wordWrap:true,wordWrapWidth:gw(200),fontSize:Math.max(gh(80),50)},true,true,gw(-15),gh(30),gw(15),gh(30));


    let con_pers = new DynamicGraphics();
    let con_edu = new DynamicGraphics();;
    let con_exp = new DynamicGraphics();;
    let con_skills = new Hybrid();


    let button_downl = add_text("click to download attachments",gw(550),spac,{...text_style, wordWrap:true,wordWrapWidth:gw(100),fontSize:gh(50)},true);


    con_pers.set_x(leftspace);
    con_pers.set_y( spac);

    con_edu.set_x(leftspace);
    con_edu.set_y(con_pers.y+button_pers.height+spac);
    con_edu.name="Container Edu";
    

    con_exp.set_x(leftspace);
    con_exp.set_y(con_edu.y+button_edu.height+spac);
    

    con_skills.set_x(leftspace);
    con_skills.set_y(con_exp.y+button_exp.height+spac);
    con_skills.name = "skill container";
    // con_skills._h = 2000;

    con_pers.addChild(button_pers);
    con_edu.addChild(button_edu);
    con_exp.addChild(button_exp);
    con_skills.addChild(button_skills);

    field.addChild(button_downl);

    field.addChild(con_pers);
    field.addChild(con_edu);
    field.addChild(con_exp);
    field.addChild(con_skills);

    con_skills.shift_vertical(0);

    button_downl.on('pointerup', () => {
        const pdfLink = document.createElement('a');
        pdfLink.href = '/static/Images/anhange/attachments.pdf';
        pdfLink.download = 'file.pdf';
        pdfLink.click();
    });
 

    //Behaviour of labels/button
    let box = null;
    x = 0;
    y = button_pers.height+gh(5);
    let per_param = [x,spac,gw(200)];

    async function button_pers_fo() {
        box = await button_handler(box,Personalien,per_param,con_pers); 
        
    };

    button_pers.on('pointerup',button_pers_fo);

    let edu_box = null;
    let param = [x,spac,gw(200)];

    async function button_edu_fo(){
        edu_box = await button_handler(edu_box,Education,param,con_edu); 
    };

    button_edu.on('pointerup',button_edu_fo);

    let exp_box = null;
    let param2 = [x,spac];

    async function button_exp_fo() {
        exp_box = await button_handler(exp_box,Experience,param2,con_exp);
    };

    button_exp.on('pointerup',button_exp_fo);

    let skills_box = null;
    let param3 = [x,gh(70)];

    async function button_skills_fo (){
        skills_box = await button_handler(skills_box,skills,param3,con_skills);
    };

    button_skills.on('pointerup',button_skills_fo);



    return field;

}



export {
    show_CV
}