import { ad_img, button_handler, add_text, Hybrid, HybridPlot, DynamicGraphics } from "./Utility.js";

let text_style = {
  fontFamily: "Verdana",
  fontSize: 60,
  fill: ["#000000"],
};



function Personalien([x, y, width]) {
  let field = new PIXI.Graphics();
  let space = 400;
  field.x = x;
  field.y = y;

  let text_style_Pers = { ...text_style, wordWrap: true,wordWrapWidth : width };
  text_style_Pers.fontSize = 20;



  let per_param = ["static/Images/bewerbungsfoto.png", 0, 0, 200, 200];
  let picture = ad_img(per_param);

  let name_ = add_text("Name", 0, picture.height + 20, text_style_Pers, false);
  let name = add_text("David Sanchez", space, name_.y, text_style_Pers, false);

  let birth_ = add_text("Birthdate", 0, name_.y + name_.height + 20, text_style_Pers, false);
  let birth = add_text("17.05.1995", space, birth_.y, "Verdana", false);

  let nation_ = add_text("Nationality", 0, birth_.y + birth_.height + 20, text_style_Pers, false);
  let nation = add_text("Switzerland, Spain", space, nation_.y, text_style_Pers, false);

  let Civi_ = add_text("Civil Status", 0, nation_.y + nation_.height + 20, text_style_Pers, false);
  let Civi = add_text("Single", space, Civi_.y, text_style_Pers, false);

  let Add_ = add_text("Address", 0, Civi_.y + Civi_.height + 20, text_style_Pers, false);
  let Add = add_text("On Inquiry", space, Add_.y, text_style_Pers, false);

  let mobi_ = add_text("Mobile", 0, Add.y + Add.height + 20, text_style_Pers, false);
  let mobi = add_text("On Inquiry", space, mobi_.y, text_style_Pers, false);

  let mail_ = add_text("E-Mail", 0, mobi_.y + mobi_.height + 20, text_style_Pers, false);
  let mail = add_text("davidsanchez062@gmail.com", space, mail_.y, text_style_Pers, false);

  field.addChild(picture, name_, name, birth_, birth, nation, nation_, Civi_, Civi, Add_, Add, mobi_, mobi, mail_, mail);

  return field;
}

function Education([x,y,width]){

    let field = new PIXI.Graphics();
    let space = 400;
    field.x = x;
    field.y = y;

    let text_style_Edu = { ...text_style, wordWrap: true,wordWrapWidth : 1000 };
    text_style_Edu.fontSize = 20;

    let time_uzh = add_text("2022 - 2025",0,0,text_style_Edu);
    let uzh = add_text("Bsc Mathematics / Computer Science (120/60)",space,time_uzh.y,text_style_Edu);
    let uzh2 = add_text("University of Zurich",space,uzh.y+uzh.height+3,text_style_Edu);


    let time_eth = add_text("2021 - 2022",0,uzh2.y+uzh2.height+10,text_style_Edu);
    let eth = add_text("Bsc Mathematics",space,time_eth.y,text_style_Edu);
    let eth2 = add_text("ETH Zurich",space,eth.y+eth.height+3,text_style_Edu);   

    let time_eth3 = add_text("2020 - 2021",0,eth2.y+eth2.height+10,text_style_Edu);
    let eth3 = add_text("Bsc Computer Science",space,time_eth3.y,text_style_Edu);
    let eth4 = add_text("ETH Zurich",space,eth3.y+eth3.height+3,text_style_Edu);
   
    let time_pass = add_text("08.2018 - 08.2019",0,eth4.y+eth4.height+10,text_style_Edu);
    let pass = add_text("University entrance exam (Gymnasiale Matura)",space,time_pass.y,text_style_Edu);
    let pass2 = add_text("AME in Aarau",space,pass.y+pass.height+3,text_style_Edu);

    let time_bm = add_text("08.2017 - 08.2018",0,pass2.y+pass2.height+10,text_style_Edu);
    let bm = add_text("Higher education entrance exam (Berufsmatura)",space,time_bm.y,text_style_Edu);
    let bm2 = add_text("KV Reinach in Lenzburg",space,bm.y+bm.height+3,text_style_Edu);

    let time_kv = add_text("08.2012 - 08.2015",0,bm2.y+bm2.height+10,text_style_Edu);
    let kv = add_text("Business Apprenticeship E-Profile",space,time_kv.y,text_style_Edu);
    let kv2 = add_text("tesa tape CH AG in Bergdietikon",space,kv.y+kv.height+3,text_style_Edu);

    let attach_con_eth2 = new PIXI.Container();

    field.addChild(time_uzh,uzh,uzh2,time_eth,eth,eth2,attach_con_eth2,time_eth3,eth3,eth4,time_pass,pass,pass2,time_bm,bm,bm2,time_kv,kv,kv2);
    
    
    return field;
}

function Experience([x,y,width]){
    
    let field = new PIXI.Graphics();
    let space = 400;
    field.x = x;
    field.y = y;

    let text_style_exp = { ...text_style, wordWrap: true,wordWrapWidth : 1000 };
    text_style_exp.fontSize=20;

    let time_civi = add_text("01.2020 - 08.2020",0,0,text_style_exp);
    let civi = add_text("Civil Service : Dataf management employee",space,time_civi.y,text_style_exp);
    let civi2 = add_text("University of Zurich",space,civi.y+civi.height+3,text_style_exp);
    let civi3 = add_text("Updating and maintaining database",space,civi2.y+civi2.height+3,text_style_exp);

    let time_trd = add_text("05.2016 - 08.2020",0,civi3.y+civi3.height+10,text_style_exp);
    let trd = add_text("Algorithmic Trader / independant",space,time_trd.y,text_style_exp);
    let trd2 = add_text("-Self teaching  of the following activities",space,trd.y+trd.height+3,text_style_exp);
    let trd3 = add_text("Data retrieval (Stocks, Futures)",space, trd2.y+trd2.height+3,text_style_exp);
    let trd4 = add_text("Coding software to convert formats of data (python,c++)",space, trd3.y+trd3.height+3,text_style_exp);
    let trd5 = add_text("Researching and developing of trading strategies and risk models (futures, options, stocks)",space, trd4.y+trd4.height+3,text_style_exp);
    let trd6 = add_text("Coding of Tradingstrategies on Multicharts(C#)",space, trd5.y+trd5.height+3,text_style_exp);
    let trd7 = add_text("Conducting backtests and optimization on Multicharts",space, trd6.y+trd6.height+3,text_style_exp);

    let time_arm = add_text("11.2015 - 02.2017",0,trd7.y+trd7.height+10,text_style_exp);
    let arm = add_text("Lietenant Swiss Armed Forces",space,time_arm.y,text_style_exp);
    let arm2 = add_text("Preparing, commanding , overseeing education of soldiers",space,arm.y+arm.height+3,text_style_exp);
    let arm3 = add_text("Coordination and planning of platoon (30 people) and reporting to superiors",space,arm2.y+arm2.height+3,text_style_exp);
    let arm4 = add_text("Deployment at World Economic Forum 2017",space,arm3.y+arm3.height+3,text_style_exp);

    let time_ass = add_text("08.2015 - 10.2015",0,arm4.y+arm4.height+3,text_style_exp);
    let ass = add_text("Assistant Project Management",space,time_ass.y,text_style_exp);
    let ass1 = add_text("sfb Bildungszentrum Für Technologie and Management in Bergdietikon",space,ass.y+ass.height+3,text_style_exp);
    let ass2 = add_text("-Correcting and improving of website",space,ass1.y+ass1.height+3,text_style_exp);
    let ass3 = add_text("-Data preparation",space,ass2.y+ass2.height+3,text_style_exp);
    let ass4 = add_text("Data Analysis",space,ass3.y+ass3.height+3,text_style_exp);
    let ass5 = add_text("Support of team",space,ass4.y+ass4.height+3,text_style_exp);

    let time_app = add_text("08.2012 - 08.2015",0,ass5.y+ass5.height+3,text_style_exp);
    let app = add_text("Commercial Employee (Apprenticeship) each Department 6 months",space,time_app.y,text_style_exp);
    let app2 = add_text("tesa tape CH AG",space,app.y+app.height+3,text_style_exp);
    let app3 = add_text("-Human Ressources",space,app2.y+app2.height+3,text_style_exp);
    let app4 = add_text("-Sales Department",space,app3.y+app3.height+3,text_style_exp);
    let app5 = add_text("-Purchasing Department",space,app4.y+app4.height+3,text_style_exp);
    let app6 = add_text("-Marketing ",space,app5.y+app5.height+3,text_style_exp);
    let app7 = add_text("Accounting",space,app6.y+app6.height+3,text_style_exp);
    let app8 = add_text("Product Development",space,app7.y+app7.height+3,text_style_exp);


   


    field.addChild(time_civi,civi,civi2,civi3,time_trd,trd,trd2,trd3,trd4,trd5,trd6,trd7,time_arm,arm,arm2,arm3,time_ass,ass,ass1,ass2,ass3,ass4,ass5,time_app,app,app2,app3,app4,app5,app6,app7,app8);

    return field;

}

function skills([x,y]){

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


    let Lang_tableH = new HybridPlot("skill_table1",Lang_table);

    Lang_tableH.x = x;
    Lang_tableH.y = 0;


    let OS_table = Plotly.newPlot('skill_table_OS',dataOS,layoutOS,{displaylogo:false});

    let OS_tableH = new HybridPlot("skill_table_OS",OS_table);


    OS_tableH.x = x;
    OS_tableH.y = Lang_tableH.y+layoutLan["height"]+topspace;

    let DB_table = Plotly.newPlot('skill_table_DB',dataDB,layoutDB,{displaylogo:false});
    let DB_tableH = new HybridPlot('skill_table_DB',DB_table);

    DB_tableH.x = x;
    DB_tableH.y = OS_tableH.y+layoutOS["height"]+topspace;

    let PL_table = Plotly.newPlot('skill_table_PL',dataPL,layoutPL,{displaylogo:false});
    let PL_tableH = new HybridPlot('skill_table_PL',PL_table);

    PL_tableH.x = x;
    PL_tableH.y = DB_tableH.y+layoutDB["height"]+topspace;

    let O_table = Plotly.newPlot('skill_table_O',dataO,layoutO,{displaylogo:false});
    let O_tableH = new HybridPlot('skill_table_O',O_table);

    O_tableH.x = x;
    O_tableH.y = PL_tableH.y+layoutPL["height"]+topspace;

    let Con = new Hybrid(null);


    Con.addChild(Lang_tableH,OS_tableH,DB_tableH,PL_tableH,O_tableH);
    Con.HEIGHT=1200;
    Con.y=y+10;
    return Con;

}



//interactive CV app
async function show_CV([width,x,y]){
    // here comes complete CV application
    let field = new DynamicGraphics(x,y,width,500,true);

    

    var spac = 60;

    var leftspace=75;

    let button_pers = add_text("Personal Information",0,0,{...text_style, wordWrap:true,wordWrapWidth:1000},true);
    let button_edu = add_text("Education",0,0,{...text_style, wordWrap:true,wordWrapWidth:200},true);
    let button_exp = add_text("Experience",0,0,{...text_style, wordWrap:true,wordWrapWidth:200},true);
    let button_skills = add_text("Skills",0,0,{...text_style, wordWrap:true,wordWrapWidth:200},true);


    let con_pers = new DynamicGraphics();
    let con_edu = new DynamicGraphics();;
    let con_exp = new DynamicGraphics();;
    let con_skills = new Hybrid(null);

    con_pers.x = leftspace;
    con_pers.y= spac;

    con_edu.x = leftspace;
    con_edu.y = con_pers.y+button_pers.height+spac;
    

    con_exp.x = leftspace;
    con_exp.y = con_edu.y+button_edu.height+spac;
    

    con_skills.x = leftspace;
    con_skills.y = con_exp.y+button_exp.height+spac;
    

    con_pers.addChild(button_pers);
    con_edu.addChild(button_edu);
    con_exp.addChild(button_exp);
    con_skills.addChild(button_skills);

    field.addChild(con_pers);
    field.addChild(con_edu);
    field.addChild(con_exp);
    field.addChild(con_skills);



    // NOTE for some reason does not work with button.x directly...
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
    let param2 = [x,spac,200];

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