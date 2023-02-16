import { cust_style,ad_img,button_handler, add_text, Hybrid,HybridPlot } from "./Utility.js";

let fontsi = 20;

function Personalien([x,y,width]){


    let field = new PIXI.Graphics();
    let space = 400;
    field.x = x;
    field.y = y;

    let per_param = ["static/Images/bewerbungsfoto.png",0,0,200,200];
    let picture = ad_img(per_param);

    let name_ = add_text("Name",0,picture.height+20,false,width,'Verdana',fontsi);
    let name = add_text("David Sanchez",space,name_.y,false,width,'Verdana',fontsi);
    
    let birth_ = add_text("Birthdate",0,name_.y+name_.height+20,false,width,'Verdana',fontsi);
    let birth = add_text("17.05.1995",space,birth_.y,false,width,'Verdana',20);

    let nation_ = add_text("Nationality",0,birth_.y+birth_.height+20,false,width,'Verdana',fontsi);
    let nation = add_text("Switzerland, Spain",space,nation_.y,false,width,'Verdana',fontsi);

    let Civi_ = add_text("Civil Status",0,nation_.y+nation_.height+20,false,width,'Verdana',fontsi);
    let Civi = add_text("Single",space,Civi_.y,false,width,'Verdana',fontsi);
   
    let Add_ = add_text("Address",0,Civi_.y+Civi_.height+20,false,width,'Verdana',fontsi);
    let Add = add_text("On Inquiry",space,Add_.y,false,width,'Verdana',fontsi);

    let mobi_ = add_text("Mobile",0,Add.y+Add.height+20,false,width,'Verdana',fontsi);
    let mobi = add_text("On Inquiry",space,mobi_.y,false,width,'Verdana',fontsi);

    let mail_ = add_text("E-Mail",0,mobi_.y+mobi_.height+20,false,width,'Verdana',fontsi);
    let mail = add_text("davidsanchez062@gmail.com",space,mail_.y,false,width,'Verdana',fontsi);
  


    field.addChild(picture,name_,name,birth_,birth,nation,nation_,Civi_,Civi,Add_,Add,mobi_,mobi,mail_,mail);

    return field;

}


function Education([x,y,width]){

    let field = new PIXI.Graphics();
    let space = 400;
    field.x = x;
    field.y = y;

    let time_uzh = add_text("2022 - 2025",0,0,false,width,'Verdana',fontsi);
    let uzh = add_text("Bsc Mathematics / Computer Science (120/60)",space,time_uzh.y,false,1000,'Verdana',fontsi);
    let uzh2 = add_text("University of Zurich",space,uzh.y+uzh.height+3,false,1000,'Verdana',fontsi);

    let time_eth = add_text("2021 - 2022",0,uzh2.y+uzh2.height+10,false,width,'Verdana',fontsi);
    let eth = add_text("Bsc Mathematics",space,time_eth.y,false,1000,'Verdana',fontsi);
    let eth2 = add_text("ETH Zurich",space,eth.y+eth.height+3,false,1000,'Verdana',fontsi);

    let time_eth3 = add_text("2020 - 2021",0,eth2.y+eth2.height+10,false,width,'Verdana',fontsi);
    let eth3 = add_text("Bsc Computer Science",space,time_eth3.y,false,1000,'Verdana',fontsi);
    let eth4 = add_text("ETH Zurich",space,eth3.y+eth3.height+3,false,1000,'Verdana',fontsi);
   
    let time_pass = add_text("08.2018 - 08.2019",0,eth4.y+eth4.height+10,false,width,'Verdana',fontsi);
    let pass = add_text("University entrance exam (Gymnasiale Matura)",space,time_pass.y,false,1000,'Verdana',fontsi);
    let pass2 = add_text("AME in Aarau",space,pass.y+pass.height+3,false,1000,'Verdana',fontsi);

    let time_bm = add_text("08.2017 - 08.2018",0,pass2.y+pass2.height+10,false,width,'Verdana',fontsi);
    let bm = add_text("Higher education entrance exam (Berufsmatura)",space,time_bm.y,false,1000,'Verdana',fontsi);
    let bm2 = add_text("KV Reinach in Lenzburg",space,bm.y+bm.height+3,false,1000,'Verdana',fontsi);

    let time_kv = add_text("08.2012 - 08.2015",0,bm2.y+bm2.height+10,false,width,'Verdana',fontsi);
    let kv = add_text("Business Apprenticeship E-Profile",space,time_kv.y,false,1000,'Verdana',fontsi);
    let kv2 = add_text("tesa tape CH AG in Bergdietikon",space,kv.y+kv.height+3,false,1000,'Verdana',fontsi);


    field.addChild(time_uzh,uzh,uzh2,time_eth,eth,eth2,time_eth3,eth3,eth4,time_pass,pass,pass2,time_bm,bm,bm2,time_kv,kv,kv2);
    return field;
}

function Experience([x,y,width]){
    
    let field = new PIXI.Graphics();
    let space = 400;
    field.x = x;
    field.y = y;

    let time_civi = add_text("01.2020 - 08.2020",0,0,false,width,'Verdana',fontsi);
    let civi = add_text("Civil Service : Dataf management employee",space,time_civi.y,false,1000,'Verdana',fontsi);
    let civi2 = add_text("University of Zurich",space,civi.y+civi.height+3,false,1000,'Verdana',fontsi);
    let civi3 = add_text("Updating and maintaining database",space,civi2.y+civi2.height+3,false,1000,'Verdana',fontsi);

    let time_trd = add_text("05.2016 - 08.2020",0,civi3.y+civi3.height+10,false,width,'Verdana',fontsi);
    let trd = add_text("Algorithmic Trader / independant",space,time_trd.y,false,1000,'Verdana',fontsi);
    let trd2 = add_text("-Self teaching  of the following activities",space,trd.y+trd.height+3,false,1000,'Verdana',fontsi);
    let trd3 = add_text("Data retrieval (Stocks, Futures)",space, trd2.y+trd2.height+3,false,1000,'Verdana',fontsi);
    let trd4 = add_text("Coding software to convert formats of data (python,c++)",space, trd3.y+trd3.height+3,false,500,'Verdana',fontsi);
    let trd5 = add_text("Researching and developing of trading strategies and risk models (futures, options, stocks)",space, trd4.y+trd4.height+3,false,500,'Verdana',fontsi);
    let trd6 = add_text("Coding of Tradingstrategies on Multicharts(C#)",space, trd5.y+trd5.height+3,false,500,'Verdana',fontsi);
    let trd7 = add_text("Conducting backtests and optimization on Multicharts",space, trd6.y+trd6.height+3,false,500,'Verdana',fontsi);

    let time_arm = add_text("11.2015 - 02.2017",0,trd7.y+trd7.height+10,false,width,'Verdana',fontsi);
    let arm = add_text("Lietenant Swiss Armed Forces",space,time_arm.y,false,1000,'Verdana',fontsi);
    let arm2 = add_text("Preparing, commanding , overseeing education of soldiers",space,arm.y+arm.height+3,false,300,'Verdana',fontsi);
    let arm3 = add_text("Coordination and planning of platoon (30 people) and reporting to superiors",space,arm2.y+arm2.height+3,false,300,'Verdana',fontsi);
    let arm4 = add_text("Deployment at World Economic Forum 2017",space,arm3.y+arm3.height+3,false,300,'Verdana',fontsi);

    let time_ass = add_text("08.2015 - 10.2015",0,arm4.y+arm4.height+3,false,300,'Verdana',fontsi);
    let ass = add_text("Assistant Project Management",space,time_ass.y,false,300,'Verdana',fontsi);
    let ass1 = add_text("sfb Bildungszentrum Für Technologie and Management in Bergdietikon",space,ass.y+ass.height+3,false,300,'Verdana',fontsi);
    let ass2 = add_text("-Correcting and improving of website",space,ass1.y+ass1.height+3,false,300,'Verdana',fontsi);
    let ass3 = add_text("-Data preparation",space,ass2.y+ass2.height+3,false,300,'Verdana',fontsi);
    let ass4 = add_text("Data Analysis",space,ass3.y+ass3.height+3,false,300,'Verdana',fontsi);
    let ass5 = add_text("Support of team",space,ass4.y+ass4.height+3,false,300,'Verdana',fontsi);

    let time_app = add_text("08.2012 - 08.2015",0,ass5.y+ass5.height+3,false,300,'Verdana',fontsi);
    let app = add_text("Commercial Employee (Apprenticeship) each Department 6 months",space,time_app.y,false,300,'Verdana',fontsi);
    let app2 = add_text("tesa tape CH AG",space,app.y+app.height+3,false,300,'Verdana',fontsi);
    let app3 = add_text("-Human Ressources",space,app2.y+app2.height+3,false,300,'Verdana',fontsi);
    let app4 = add_text("-Sales Department",space,app3.y+app3.height+3,false,300,'Verdana',fontsi);
    let app5 = add_text("-Purchasing Department",space,app4.y+app4.height+3,false,300,'Verdana',fontsi);
    let app6 = add_text("-Marketing ",space,app5.y+app5.height+3,false,300,'Verdana',fontsi);
    let app7 = add_text("Accounting",space,app6.y+app6.height+3,false,300,'Verdana',fontsi);
    let app8 = add_text("Product Development",space,app7.y+app7.height+3,false,300,'Verdana',fontsi);


   


    field.addChild(time_civi,civi,civi2,civi3,time_trd,trd,trd2,trd3,trd4,trd5,trd6,trd7,time_arm,arm,arm2,arm3,time_ass,ass,ass1,ass2,ass3,ass4,ass5,time_app,app,app2,app3,app4,app5,app6,app7,app8);

    return field;

}

function skills([x,y,width]){

    // Creating all tables
    // languages

    var layoutLan = {
        margin: {l: 2, r: 2, t: 2, b: 2},
        height: 140,
        width: 700
    };

    var layoutOS = {
        margin: {l: 2, r: 2, t: 2, b: 2},
        height: 195,
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

    var data = [{
    type: 'table',
    header: {
        values: [["<b>Languages</b>"], ["<b>Level</b>"]],
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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
        align: "center",
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


    var topspace = 50;

    let Lang_table = Plotly.newPlot('skill_table1', data,layoutLan,{displaylogo: false});  


    let Lang_tableH = new HybridPlot(Lang_table,"skill_table1");

    Lang_tableH.x = x;
    Lang_tableH.y = y;


    let OS_table = Plotly.newPlot('skill_table_OS',dataOS,layoutOS,{displaylogo:false});

    let OS_tableH = new HybridPlot(OS_table,"skill_table_OS");


    OS_tableH.x = x;
    OS_tableH.y = Lang_tableH.y+layoutLan["height"]+topspace;

    let DB_table = Plotly.newPlot('skill_table_DB',dataDB,layoutDB,{displaylogo:false});
    let DB_tableH = new HybridPlot(DB_table,'skill_table_DB');

    DB_tableH.x = x;
    DB_tableH.y = OS_tableH.y+layoutOS["height"]+topspace;

    let PL_table = Plotly.newPlot('skill_table_PL',dataPL,layoutPL,{displaylogo:false});
    let PL_tableH = new HybridPlot(PL_table,'skill_table_PL');

    PL_tableH.x = x;
    PL_tableH.y = DB_tableH.y+layoutDB["height"]+topspace;

    let O_table = Plotly.newPlot('skill_table_O',dataO,layoutO,{displaylogo:false});
    let O_tableH = new HybridPlot(O_table,'skill_table_O');

    O_tableH.x = x;
    O_tableH.y = PL_tableH.y+layoutPL["height"]+topspace;


    let Con_ = new PIXI.Container();
    let Con = new Hybrid(Con_,null);

    // Lang_tableH.height = layoutLan["height"];
    // OS_tableH.height = layoutOS["height"];
    // DB_tableH.height = layoutDB["height"];
    // PL_tableH.height = layoutPL["height"];
    // O_tableH.height = layout_O["height"];

    Con.addChild(Lang_tableH,OS_tableH,DB_tableH,PL_tableH,O_tableH);
    Con.HEIGHT=1200;
    return Con;

}

//interactive CV app
async function show_CV([app,width,x,y]){
    // here comes complete CV application
    let field = new PIXI.Graphics();

    let rect = new PIXI.Graphics();
    rect.width=Math.floor(width)-50;
    rect.beginFill(0xF5F5DC,0.5);
    rect.drawRoundedRect(0,0,Math.floor(width)-50,500);
    rect.endFill();
    rect.height = 500;

    field.addChild(rect);
    field.x = x;
    field.y = y;

    app.stage.addChild(field);

    // resize such that the interactive CV is shown and can be scrolled down
    app.renderer.resize(window.innerWidth,window.innerHeight);

    var spac = 50;

    var wid = 200;
    var leftspace=75;

    let button_pers = add_text("Personal Information",leftspace,spac,true,1000);
    let button_edu = add_text("Education",leftspace,button_pers.y+button_pers.height+spac,true,200);
    let button_exp = add_text("Experience",leftspace,button_edu.y+button_edu.height+spac,true,200);
    let button_skills = add_text("Skills",leftspace,button_exp.y+button_exp.height+spac,true,200);


    let con_pers = new PIXI.Container();
    let con_edu = new PIXI.Container();
    let con_exp = new PIXI.Container();
    let con_skills_ = new PIXI.Container();
    let con_skills = new Hybrid(con_skills_,null);

    con_pers.x = leftspace;
    con_pers.y= 20;
    con_pers.width = wid;
    con_pers.height = button_pers.height;

    con_edu.x = leftspace;
    con_edu.y = button_edu.y;
    con_edu.width = wid;
    con_edu.height=button_edu.height;

    con_exp.x = leftspace;
    con_exp.y = button_exp.y;
    con_exp.width = wid;
    con_exp.height = button_exp.height;

    con_skills.x = leftspace;
    con_skills.y = button_skills.y;
    con_skills.width = wid;
    con_skills.height=1200;


    field.addChild(button_pers,con_pers);
    field.addChild(button_edu,con_edu);
    field.addChild(button_exp,con_exp);
    field.addChild(button_skills,con_skills);



    // NOTE for some reason does not work with button.x directly...
    //Behaviour of labels/button
    let box = null;
    x = 0;
    y = button_pers.height+5;
    let per_param = [x,y+spac,200];

    async function button_pers_fo() {
        box = await button_handler(app,3,box,Personalien,per_param,con_pers,null,null,null); 
    };

    button_pers.on('pointerup',button_pers_fo);

    let edu_box = null;
    let param = [x,button_edu.height+spac,200];

    async function button_edu_fo(){
        edu_box = await button_handler(app,5,edu_box,Education,param,con_edu,null,null);        
    };

    button_edu.on('pointerup',button_edu_fo);

    let exp_box = null;
    let param2 = [x,button_exp.height+spac,200];

    async function button_exp_fo() {
        exp_box = await button_handler(app,7,exp_box,Experience,param2,con_exp,null,null);        
    };

    button_exp.on('pointerup',button_exp_fo);

    let skills_box = null;
    let param3 = [x,button_skills.height+spac,200];

    async function button_skills_fo (){
        skills_box = await button_handler(app,9,skills_box,skills,param3,con_skills,null,null);
    };

    button_skills.on('pointerup',button_skills_fo);




    return field;

}



export {
    show_CV
}