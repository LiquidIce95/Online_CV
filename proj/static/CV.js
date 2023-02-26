import { ad_img, button_handler, add_text, Hybrid, HybridPlot, DynamicGraphics } from "./Utility.js";


let text_style = {
  fontFamily: "Verdana",
  fontSize: 60,
  fill: ["#000000"],
};



function Personalien([x, y, width]) {
  let field = new DynamicGraphics();
  let space = 400;
  field.set_x(x);
  field.set_y(y);

  let text_style_Pers = { ...text_style, wordWrap: true,wordWrapWidth : width };
  text_style_Pers.fontSize = 20;



  let per_param = ["static/Images/bewerbungsfoto.png", 0, 50, 200, 200];
  let picture = ad_img(per_param);

  let name_ = add_text("Name", 0, picture.y+picture.height + 100, {...text_style_Pers, fontWeight:"bold"}, false);
  let name = add_text("David Sanchez", space, name_.y, text_style_Pers, false);

  let birth_ = add_text("Birthdate", 0, name_.y + name_.height + 50, {...text_style_Pers,fontWeight:"bold"}, false);
  let birth = add_text("17.05.1995", space, birth_.y, text_style_Pers, false);

  let nation_ = add_text("Nationality", 0, birth_.y + birth_.height + 50, {...text_style_Pers,fontWeight:"bold"}, false);
  let nation = add_text("Switzerland, Spain", space, nation_.y, text_style_Pers, false);

  let Civi_ = add_text("Civil Status", 0, nation_.y + nation_.height + 50, {...text_style_Pers,fontWeight:"bold"}, false);
  let Civi = add_text("in relationship", space, Civi_.y, text_style_Pers, false);

  let Add_ = add_text("Address", 0, Civi_.y + Civi_.height + 50, {...text_style_Pers,fontWeight:"bold"}, false);
  let Add = add_text("On Inquiry", space, Add_.y, text_style_Pers, false);

  let mobi_ = add_text("Mobile", 0, Add.y + Add.height + 50, {...text_style_Pers,fontWeight:"bold"}, false);
  let mobi = add_text("On Inquiry", space, mobi_.y, text_style_Pers, false);

  let mail_ = add_text("E-Mail", 0, mobi_.y + mobi_.height + 50, {...text_style_Pers,fontWeight:"bold"}, false);
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

function Education([x,y]){

    let field = new DynamicGraphics();
    let space = 400;
    let space2 = 100;
    field.set_x(x);
    field.set_y(y);
    field.name = "Educaton field";
    let text_style_Edu = { ...text_style, wordWrap: true,wordWrapWidth : 1000 };
    text_style_Edu.fontSize = 20;


    let time_uzh = add_text("2022 - 2025",0,50,{...text_style_Edu,fontWeight:"bold"},true,true,-20,0,20,20);
    let uzh = add_text("Bsc Mathematics / Computer Science (120/60 ECTS)",space,time_uzh.y,{...text_style_Edu,fontWeight:"bold"},true);
    let uzh2 = add_text("University of Zurich",space,uzh.y+uzh.height+3,text_style_Edu,true);
    let con_uzh = new DynamicGraphics();
    con_uzh.set_x(space2);
    con_uzh.set_y(uzh2.y+uzh2.height+10);

    let time_eth = add_text("2021 - 2022",0,uzh2.y+uzh2.height+50,{...text_style_Edu,fontWeight:"bold"},true,true,-20,0,20,20);
    let eth = add_text("Bsc Mathematics",space,time_eth.y,{...text_style_Edu,fontWeight:"bold"},true);
    let eth2 = add_text("ETH Zurich",space,eth.y+eth.height+3,text_style_Edu,true);   
    let con_eth2 = new DynamicGraphics();
    con_eth2.set_x(space2);
    con_eth2.set_y(eth2.y+eth2.height+10);

    let time_eth3 = add_text("2020 - 2021",0,eth2.y+eth2.height+50,{...text_style_Edu,fontWeight:"bold"},true,true,-20,0,20,20);
    let eth3 = add_text("Bsc Computer Science",space,time_eth3.y,{...text_style_Edu,fontWeight:"bold"},true);
    let eth4 = add_text("ETH Zurich",space,eth3.y+eth3.height+3,text_style_Edu,true);
    let con_eth = new DynamicGraphics();
    con_eth.set_x(space2);
    con_eth.set_y(eth4.y+eth4.height+10);    


    let time_pass = add_text("08.2018 - 08.2019",0,eth4.y+eth4.height+50,{...text_style_Edu,fontWeight:"bold"},true,true,-20,0,20,20);
    let pass = add_text("University entrance exam (Passerelle)",space,time_pass.y,{...text_style_Edu,fontWeight:"bold"},true);
    let pass2 = add_text("AME in Aarau",space,pass.y+pass.height+3,text_style_Edu,true);
    let con_pass = new DynamicGraphics();
    con_pass.set_x(space2);
    con_pass.set_y(pass2.y+pass2.height+10);

    let time_bm = add_text("08.2017 - 08.2018",0,pass2.y+pass2.height+50,{...text_style_Edu,fontWeight:"bold"},true,true,-20,0,20,20);
    let bm = add_text("Higher education entrance exam (Berufsmatura)",space,time_bm.y,{...text_style_Edu,fontWeight:"bold"},true);
    let bm2 = add_text("KV Reinach in Lenzburg",space,bm.y+bm.height+3,text_style_Edu,true);
    let con_bm = new DynamicGraphics();
    con_bm.set_x(50);
    con_bm.set_y(bm2.y+bm2.height+10);


    let time_kv = add_text("08.2012 - 08.2015",0,bm2.y+bm2.height+50,{...text_style_Edu,fontWeight:"bold"},true,true,-20,0,20,20);
    let kv = add_text("Business Apprenticeship E-Profile",space,time_kv.y,{...text_style_Edu,fontWeight:"bold"},true);
    let kv2 = add_text("tesa tape CH AG in Bergdietikon",space,kv.y+kv.height+3,text_style_Edu,true);
    let con_kv = new DynamicGraphics();
    con_kv.set_x(50);
    con_kv.set_y(kv2.y+kv2.height+10);

    let parms = ["static/Images/anhange/00/00.png", 0, 0, 1000, 400];

    let pico = null;
    async function insert_attach_uzh (){
        pico = await button_handler(pico,ad_img,parms,con_uzh);
    };

    uzh.on('pointerup',insert_attach_uzh);
    time_uzh.on('pointerup',insert_attach_uzh);
    uzh2.on('pointerup',insert_attach_uzh);
// 
    let para_eth2 = ["static/Images/anhange/02/02_1.png", 0, 0, 1000, 1300];

    let attach_eth2 = null;
    async function insert_attach_eth2 (){
        attach_eth2 = await button_handler(attach_eth2,ad_img,para_eth2,con_eth2);
    };

    eth.on('pointerup',insert_attach_eth2);
    time_eth.on('pointerup',insert_attach_eth2);
    eth2.on('pointerup',insert_attach_eth2);
// 
    let para_eth = ["static/Images/anhange/01/01-1.png", 0, 0, 1000, 1300];

    let attach_eth = null;
    async function insert_attach_eth (){
        attach_eth = await button_handler(attach_eth,ad_img,para_eth,con_eth);
    };

    eth3.on('pointerup',insert_attach_eth);
    time_eth3.on('pointerup',insert_attach_eth);
    eth4.on('pointerup',insert_attach_eth);
// 
    let para_pass = ["static/Images/anhange/04/04-1.png", 0, 0, 1000, 700];

    let attach_pass = null;
    async function insert_attach_pass (){
        attach_pass = await button_handler(attach_pass,ad_img,para_pass,con_pass);
    };

    pass.on('pointerup',insert_attach_pass);
    time_pass.on('pointerup',insert_attach_pass);
    pass2.on('pointerup',insert_attach_pass);
// 
    let para_bm = ["static/Images/anhange/05/05-1.png", 0, 0, 1000, 700];

    let attach_bm = null;
    async function insert_attach_bm (){
        attach_bm = await button_handler(attach_bm,ad_img,para_bm,con_bm);
    };

    bm.on('pointerup',insert_attach_bm);
    time_bm.on('pointerup',insert_attach_bm);
    bm2.on('pointerup',insert_attach_bm);
// 
    let para_kv = ["static/Images/anhange/06/06-1.png", 0, 0, 1000, 700];

    let attach_kv = null;
    async function insert_attach_kv (){
        attach_kv = await button_handler(attach_kv,ad_img,para_kv,con_kv);
    };

    kv.on('pointerup',insert_attach_kv);
    time_kv.on('pointerup',insert_attach_kv);
    kv2.on('pointerup',insert_attach_kv);

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
    let space = 400;
    let space2 = 100;
    let space3 = 20;
    field.set_x(x);
    field.set_y(y);

    let text_style_exp = { ...text_style, wordWrap: true,wordWrapWidth : 1000 };
    text_style_exp.fontSize=20;

    let time_omg = add_text("11.2022 - currently",0,50,{...text_style_exp,fontWeight:"bold"});
    let omg = add_text("IT Assistant/Support, 30 - 40 %",space,time_omg.y,{...text_style_exp,fontWeight:"bold"});
    let omg2 = add_text("Omnicommediagroup CH",space,omg.y+omg.height+3,text_style_exp);
    let omg3 = add_text("first and second level support",space,omg2.y+omg2.height+space3,text_style_exp);
    let omg4 = add_text("process automation and optimization",space,omg3.y+omg3.height,text_style_exp);


    let time_civi = add_text("01.2020 - 08.2020",0,omg4.y+omg4.height+50,{...text_style_exp,fontWeight:"bold"},true,true,-20,0,20,20);
    let civi = add_text("Civil Service : Data management employee",space,time_civi.y,{...text_style_exp,fontWeight:"bold"},true);
    let civi2 = add_text("ETH Zurich",space,civi.y+civi.height+3,text_style_exp,true);
    let civi3 = add_text("Updating and maintaining database",space,civi2.y+civi2.height+space3,text_style_exp,true);
    let con_civi = new DynamicGraphics();
    con_civi.set_x(space2);
    con_civi.set_y(civi3.y+civi3.height+10);


    let time_trd = add_text("05.2016 - 08.2020",0,civi3.y+civi3.height+50,{...text_style_exp,fontWeight:"bold"});
    let trd = add_text("Algorithmic Trader / independant",space,time_trd.y,{...text_style_exp,fontWeight:"bold"});
    let trd2 = add_text("Self teaching of the following activities",space,trd.y+trd.height+space3,text_style_exp);
    let trd3 = add_text("Data retrieval (Stocks, Futures)",space, trd2.y+trd2.height+3,text_style_exp);
    let trd4 = add_text("Coding software to convert formats of data (python,c++)",space, trd3.y+trd3.height+3,text_style_exp);
    let trd5 = add_text("Researching and developing of trading strategies and risk models (futures, options, stocks)",space, trd4.y+trd4.height+3,text_style_exp);
    let trd6 = add_text("Coding of Tradingstrategies on Multicharts(C#)",space, trd5.y+trd5.height+3,text_style_exp);
    let trd7 = add_text("Conducting backtests and optimization on Multicharts",space, trd6.y+trd6.height+3,text_style_exp);


    let time_arm = add_text("11.2015 - 02.2017",0,trd7.y+trd7.height+50,{...text_style_exp,fontWeight:"bold"},true,true,-20,0,20,20);
    let arm = add_text("Lietenant Swiss Armed Forces",space,time_arm.y,{...text_style_exp,fontWeight:"bold"},true);
    let arm2 = add_text("Preparing, commanding , overseeing education of soldiers",space,arm.y+arm.height+space3,text_style_exp,true);
    let arm3 = add_text("Coordination and planning of platoon (30 people) and reporting to superiors",space,arm2.y+arm2.height+3,text_style_exp,true);
    let arm4 = add_text("Deployment at World Economic Forum 2017",space,arm3.y+arm3.height+3,text_style_exp,true);
    let con_arm = new DynamicGraphics();
    con_arm.set_x(space2);
    con_arm.set_y(arm4.y+arm4.height+10);

    let time_ass = add_text("08.2015 - 10.2015",0,arm4.y+arm4.height+50,{...text_style_exp,fontWeight:"bold"},true,true,-20,0,20,20);
    let ass = add_text("Assistant Project Management",space,time_ass.y,{...text_style_exp,fontWeight:"bold"},true);
    let ass1 = add_text("sfb Bildungszentrum Für Technologie and Management in Bergdietikon",space,ass.y+ass.height+3,text_style_exp,true);
    let ass2 = add_text("Correcting and improving of website",space,ass1.y+ass1.height+space3,text_style_exp,true);
    let ass3 = add_text("Data preparation",space,ass2.y+ass2.height+3,text_style_exp,true);
    let ass4 = add_text("Data Analysis",space,ass3.y+ass3.height+3,text_style_exp,true);
    let ass5 = add_text("Support of team",space,ass4.y+ass4.height+3,text_style_exp,true);
    let con_ass = new DynamicGraphics();
    con_ass.set_x(space2);
    con_ass.set_y(ass5.y+ass5.height+10);


    let time_app = add_text("08.2012 - 08.2015",0,ass5.y+ass5.height+50,{...text_style_exp,fontWeight:"bold"},true,true,-20,0,20,20);
    let app = add_text("Commercial Employee (Apprenticeship) each Department 6 months",space,time_app.y,{...text_style_exp,fontWeight:"bold"},true);
    let app2 = add_text("tesa tape CH AG",space,app.y+app.height+3,text_style_exp,true);
    let app3 = add_text("Human Ressources",space,app2.y+app2.height+space3,text_style_exp,true);
    let app4 = add_text("Sales Department",space,app3.y+app3.height+3,text_style_exp,true);
    let app5 = add_text("Purchasing Department",space,app4.y+app4.height+3,text_style_exp,true);
    let app6 = add_text("Marketing ",space,app5.y+app5.height+3,text_style_exp,true);
    let app7 = add_text("Accounting",space,app6.y+app6.height+3,text_style_exp,true);
    let app8 = add_text("Product Development",space,app7.y+app7.height+3,text_style_exp,true);
    let con_app = new DynamicGraphics();
    con_app.set_x(space2);
    con_app.set_y(app8.y+app8.height+10);


    let para_civi = ["static/Images/anhange/13/13-1.png", 0, 0, 1000, 1300];

    let attach_civi = null;
    async function insert_attach_civi (){
        attach_civi = await button_handler(attach_civi,ad_img,para_civi,con_civi);
    };

    civi.on('pointerup',insert_attach_civi);
    time_civi.on('pointerup',insert_attach_civi);
    civi2.on('pointerup',insert_attach_civi);
    civi3.on('pointerup',insert_attach_civi);
// 
    let para_arm = ["static/Images/anhange/07/07-1.png", 0, 0, 1000, 700];
    let para_arm2 = ["static/Images/anhange/11/11-1.png", 0, 710, 1000, 1300];
    let para_arm3 = ["static/Images/anhange/12/12-1.png", 0, 2020, 1000, 1300];


    let attach_arm = null;
    let attach_arm2 = null;
    let attach_arm3 = null;

    async function insert_attach_arm (){
        attach_arm = await button_handler(attach_arm,ad_img,para_arm,con_arm);
        attach_arm2 = await button_handler(attach_arm2,ad_img,para_arm2,con_arm);
        attach_arm3 = await button_handler(attach_arm3,ad_img,para_arm3,con_arm);

    };

    arm.on('pointerup',insert_attach_arm);
    time_arm.on('pointerup',insert_attach_arm);
    arm2.on('pointerup',insert_attach_arm);
    arm3.on('pointerup',insert_attach_arm);
    arm4.on('pointerup',insert_attach_arm);

// 
    let para_ass = ["static/Images/anhange/18/18-1.png", 0, 0, 1000, 1300];
    
    let attach_ass = null;
    async function insert_attach_ass (){
        attach_ass = await button_handler(attach_ass,ad_img,para_ass,con_ass);
    };

    ass.on('pointerup',insert_attach_ass);
    time_ass.on('pointerup',insert_attach_ass);
    ass2.on('pointerup',insert_attach_ass);
    ass3.on('pointerup',insert_attach_ass);
    ass4.on('pointerup',insert_attach_ass);
    ass5.on('pointerup',insert_attach_ass);

// 
    let para_app = ["static/Images/anhange/16/16-1.png", 0, 0, 1000, 1300];
    let para_app2 = ["static/Images/anhange/17/17-1.png", 0, 1310, 1000, 1300];

    let attach_app = null;
    let attach_app2 = null;
    async function insert_attach_app (){
        attach_app = await button_handler(attach_app,ad_img,para_app,con_app);
        attach_app2 = await button_handler(attach_app2,ad_img,para_app2,con_app);

    };

    app.on('pointerup',insert_attach_app);
    time_app.on('pointerup',insert_attach_app);
    app2.on('pointerup',insert_attach_app);
    app3.on('pointerup',insert_attach_app);
    app4.on('pointerup',insert_attach_app);
    app5.on('pointerup',insert_attach_app);
    app6.on('pointerup',insert_attach_app);
    app7.on('pointerup',insert_attach_app);
    app8.on('pointerup',insert_attach_app);

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
        margin: {l: 2, r: 2, t: 2, b: 2},
        height: 130,
        width: 700
    };

    var layoutOS = {
        margin: {l: 2, r: 2, t: 2, b: 2},
        height: 170,
        width: 700
    };

    var layoutDB = {
        margin: {l: 2, r: 2, t: 2, b: 2},
        height: 75,
        width: 700
    };

    var layoutPL = {
        margin: {l: 2, r: 2, t: 2, b: 2},
        height: 285,
        width: 700
    };

    var layoutO = {
        margin: {l: 2, r: 2, t: 2, b: 2},
        height: 250,
        width: 700
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
        line: {width: 1, color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: 22, color: "white"}
    },
    cells: {
        values: values,
        align: "center",
        line: {color: "black", width: 1},
        font: {family: "Verdana", size: 18, color: ["black"]},
        height: 30
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
        values: [["<b>Operating System</b>"],["<b>Usage</b>"], ["<b>basic</b>"],["<b>good</b>"],["<b>advanced</b>"]],
        align: "left",
        line: {width: 1, color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: 22, color: "white"}
    },
    cells: {
        values: valuesOS,
        align: "center",
        line: {color: "black", width: 1},
        font: {family: "Verdana", size: 18, color: ["black"]},
        height: 30
    }
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
        line: {width: 1, color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: 22, color: "white"}
    },
    cells: {
        values: valuesDB,
        align: "center",
        line: {color: "black", width: 1},
        font: {family: "Verdana", size: 18, color: ["black"]},
        height: 30
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
        values: [["<b>Coding Language</b>"],["<b>Usage</b>"], ["<b>basic</b>"],["<b>good</b>"],["<b>advanced</b>"]],
        align: "left",
        line: {width: 1, color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: 22, color: "white"}
    },
    cells: {
        values: valuesPL,
        align: "center",
        line: {color: "black", width: 1},
        font: {family: "Verdana", size: 18, color: ["black"]},
        height: 30
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
        line: {width: 1, color: 'black'},
        fill: {color: "#344b68"},
        font: {family: "Verdana", size: 22, color: "white"}
    },
    cells: {
        values: valuesO,
        align: "center",
        line: {color: "black", width: 1},
        font: {family: "Verdana", size: 18, color: ["black"]},
        height: 30
    }
    }]

    
    let link = add_text("click here to get to my github!",x,20,{...text_style, fontSize:20,fill:['#8B0000']},true,true,-15,5,15,15);
    link.on('click', () => {
        // navigate to GitHub in a new tab
        window.open('https://github.com/LiquidIce95?tab=repositories', '_blank');
    });

    var topspace = 30;

    let Lang_table = Plotly.newPlot('skill_table1', dataLan,layoutLan,{displaylogo: false});  
    

    let Lang_tableH = new HybridPlot("skill_table1",Lang_table);

    Lang_tableH.set_x(x);
    Lang_tableH.set_y(link.y+link.height+10);
    // Lang_tableH.set_w(layoutLan["width"]);
    // Lang_tableH._h = layoutLan["height"];

    let OS_table = Plotly.newPlot('skill_table_OS',dataOS,layoutOS,{displaylogo:false});

    let OS_tableH = new HybridPlot("skill_table_OS",OS_table);


    OS_tableH.set_x(x);
    OS_tableH.set_y(Lang_tableH.y+64+topspace);
    // OS_tableH.set_w(layoutOS["width"]);
    // OS_tableH._h = layoutOS["height"];


    let DB_table = Plotly.newPlot('skill_table_DB',dataDB,layoutDB,{displaylogo:false});
    let DB_tableH = new HybridPlot('skill_table_DB',DB_table);

    DB_tableH.set_x(x);
    DB_tableH.set_y(OS_tableH.y+90+topspace);
    // DB_tableH.set_w(layoutDB["width"]);


    let PL_table = Plotly.newPlot('skill_table_PL',dataPL,layoutPL,{displaylogo:false});
    let PL_tableH = new HybridPlot('skill_table_PL',PL_table);

    PL_tableH.set_x(x);
    PL_tableH.set_y(DB_tableH.y+40+topspace);
    // PL_tableH.set_w(layoutPL["width"]);

    let O_table = Plotly.newPlot('skill_table_O',dataO,layoutO,{displaylogo:false});
    let O_tableH = new HybridPlot('skill_table_O',O_table);

    O_tableH.set_x(x);
    O_tableH.set_y(PL_tableH.y+150+topspace);
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
    Con.set_h(1200);
    return Con;

}

// TODO: donwload button for attachent , in Developemnt hint for projects, back to top

//interactive CV app
async function show_CV([width,x,y]){
    // here comes complete CV application
    let field = new DynamicGraphics(x,y,width,150,true);

    field.name = "CV field";

    var spac = 50;

    var leftspace=75;
    

    let button_downl = add_text("download attachments",leftspace*16,spac,{...text_style, wordWrap:true,wordWrapWidth:1000,fontSize:20},true,true,-20,5,10,10);


    let button_pers = add_text("Personal Information",0,0,{...text_style, wordWrap:true,wordWrapWidth:1000},true,true,-30,15,30,30);
    let button_edu = add_text("Education",0,0,{...text_style, wordWrap:true,wordWrapWidth:200},true,true,-30,15,30,30);
    let button_exp = add_text("Experience",0,0,{...text_style, wordWrap:true,wordWrapWidth:200},true,true,-30,15,30,30);
    let button_skills = add_text("Skills",0,0,{...text_style, wordWrap:true,wordWrapWidth:200},true,true,-30,15,30,30);

    let con_pers = new DynamicGraphics();
    let con_edu = new DynamicGraphics();;
    let con_exp = new DynamicGraphics();;
    let con_skills = new Hybrid();

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
    y = button_pers.height+5;
    let per_param = [x,spac,200];

    async function button_pers_fo() {
        box = await button_handler(box,Personalien,per_param,con_pers); 
        
    };

    button_pers.on('pointerup',button_pers_fo);

    let edu_box = null;
    let param = [x,spac,200];

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
    let param3 = [x,spac];

    async function button_skills_fo (){
        skills_box = await button_handler(skills_box,skills,param3,con_skills);
    };

    button_skills.on('pointerup',button_skills_fo);



    return field;

}



export {
    show_CV
}