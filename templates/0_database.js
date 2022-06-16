
$(window).on("load", function ()
{
    getcache();
    table0();
});
// 0. DefaultTable  
var deftb = ["infotable", "columntable", "databasetable", "pagestable", "usertypetable", "webapitable","usecasetable", "organizationcharttable", "projectscheduletable",
    "use_case_diagram"];
 
function getcache()
{
    return;
    try {
        $.each(deftb, (k, nm) => {
            var obj = localStorage.getItem("teubers_" + nm);
            if (obj != null)
            { 
                var f = "var " + nm + " = " + JSON.parse(obj).value + ";" 
                $.globalEval(f)
            }

        })

        setTimeout(function ()
        { 
            if (typeof (databasetable) != "undefined") {
                $.each(databasetable, (k, item) => {
                    if (item.TID.indexOf(".") == 0) {
                        var nm = item.Name.toLocaleLowerCase().trim().replace("/ /g", "");
                        var obj = localStorage.getItem("teubers_" + nm);

                        if (obj != null) {
                            var f = "var " + nm + " = " + JSON.parse(obj).value + ";"
                            $.globalEval(f)
                        }
                    }
                })
            }
        },10000)
    }
    catch(er) { }
}

function setcache()
{
    return;
    var d0 = new Date();
    var d3 = new Date();
    d3.setDate(d0.getDate() + 30);

    try
    {
        $.each(deftb, (k, nm) =>
        { 
            var itm = {
                value: JSON.stringify(window[nm]) ,
                expiry: d3 ,
            }
            var itm = JSON.stringify(itm); 
            localStorage.setItem("teubers_" + nm, itm);

        })

        if (typeof (databasetable) != "undefined")
        { 
            $.each(databasetable, (k, item) =>
            {
                if (item.TID.indexOf(".") == 0)
                {
                    var nm = item.Name.toLocaleLowerCase().trim().replace("/ /g", "");
                     
                    var itm = JSON.stringify({
                        value: JSON.stringify(window[nm]),
                        expiry: d3,
                    });

                    localStorage.setItem("teubers_" + nm, itm);
                }
            })
        }
    }
    catch(er) { }
}

function reseter(stt, nm)
{ 
    if (stt && nm == "columntable") {
        window.columntable = [{ "ViewId": "", "Name": "", "EditorClass": "", "SQLType": "", "TID": "1" }];
    }
    if (stt && nm == "infotable") {
        window.infotable = [{ "Task": "", "Description": "", "TableName": "", "TID": "1" }];
    }
    if (stt && nm == "databasetable") {
        window.databasetable = [{ "Name": "", "Type": "", "CustomColumn": "", "TableName": "", "TableColumn": "", "TID": "1" }];
    }
    if (stt && nm == "pagestable") {
        window.pagestable = [{ "WebPage": "", "PageDescription": "", "TemplateReferences": "", "TID": "1" }];
    }
    if (stt && nm == "usertypetable") {
        window.usertypetable = [{ "UserType": "", "TID": "1" }];
    }
    if (stt && nm == "webapitable") {
        window.webapitable = [{ "WebAPI": "", "Model": "", "Service": "", "TID": "1" }];
    }
    if (stt && nm == "usecasetable") {
        window.usecasetable = [{ "WebPage": "", "UserType": "", "CRUD": "", "Task": "", "Actor": "", "Scenario": "", "Extension": "", "WebAPI": "", "Model": "", "Service": "", "SQLCommand": "", "Class": "", "SQLCondition": "", "TID": "1" }];
    }
    if (stt && nm == "organizationcharttable") {
        window.organizationcharttable = [{ "Role": "", "Rate": "", "FirstName": "", "LastName": "", "ProfilePic": "", "TID": "1" }];
    }
    if (stt && nm == "projectscheduletable") {
        window.projectscheduletable = [{ "Task": "", "PrimaryPerson": "", "SecondaryPerson": "", "Start": "", "End": "", "Progress": "", "Type": "", "TID": "1" }];
    }
    if (stt && nm == "use_case_diagram") {
        window.use_case_diagram = [{ "WebPage": "", "UserType": "", "CRUD": "", "Task": "", "TableName": "", "TID": "1" }];
    }
}

function table0()
{
    $.each(deftb, (k, itm) =>
    {
        reseter(!window.hasOwnProperty(itm) , itm)
    })

    table1();
}
// 1. ColumnTable
function table1()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "columntable";
    var c = [
        ["View Id",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Name",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Editor Class",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["SQL Type",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
    ];
    //
    try
    { 
        // Views  
        // Editors  
        // Helpers 
           attributes(c, tn, true);
           loadtable(c, b, a, tn );
        // 
    }
    catch (er)
    {
        //alert(er);
    }
    table2();
}
// 2. DatabaseTable
function table2()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "databasetable";
    var c = [
        ["Name",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Type",
            $("<div/>").html($(a.find(".row_cn").children()[12]).clone()),
            "row_mc12"], 
        ["Custom Column",
            $("<div/>").html($(a.find(".row_cn").children()[14]).clone()),
            "row_mc14"],
        ["Table Name",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["Table Column",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["Column Width",
            $("<div/>").html($(a.find(".row_cn").children()[6]).clone()),
            "row_mc2"],
        ["DefaultValue",
            $("<div/>").html($(a.find(".row_cn").children()[14]).clone()),
            "row_mc14"],
        ["Level",
            $("<div/>").html($(a.find(".row_cn").children()[6]).clone()),
            "row_mc2"],
    ];
    //
    try
    { 
        // Views  
        // Editors  
        c[1][1].children().first().find(".srdt").html(JSON.stringify(columntable.select("x.Name").sort()));
         
        c[3][1].children().first().find(".row_ic").find("span").first().attr("onclick","datacol2(this)");
        c[4][1].children().first().find(".row_ic").find("span").first().attr("onclick", "datacol(this)");
         
        c[5][1].children().first().find(".inpx").html("162");
        c[6][1].children().first().find(".inpx").html("");
        // Helpers 
           attributes(c, tn, true);
           loadtable(c, b, a, tn );
        // 
    }
    catch (er)
    {
       // alert(er);
    }
    table3();
}
// 3. PagesTable
function table3()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "pagestable";
    var c = [
        ["WebPage",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"], 
        ["Page Description",
            $("<div/>").html($(a.find(".row_cn").children()[2]).clone()),
            "row_mc6"], 
        ["Template References",
            $("<div/>").html($(a.find(".row_cn").children()[2]).clone()),
            "row_mc6"]
    ];
    //
    try
    { 
        // Views 
           c[0][1].children().first().find(".inpx").css("width", "150px");  
           c[1][1].children().first().find(".inpx").css("width", "250px");    
           c[2][1].children().first().find(".inpx").css("width", "300px"); 
        // Editors 
        // Helpers 
           attributes(c, tn, true);
           loadtable(c, b, a, tn );
        // 
    }
    catch (er)
    {
       // alert(er);
    }
    table4();
} 
// 4. UserTypeTable
function table4()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "usertypetable";
    var c = [
        ["User Type",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"], 
    ];
    //
    try
    { 
        // Views 
           c[0][1].children().first().find(".inpx").css("width", "300px");  
        // Editors

        // Helpers 
           attributes(c, tn, true);
           loadtable(c, b, a, tn );
        // 
    }
    catch (er)
    {
        //alert(er);
    }
    table5();
}  
// 5. InfoTable
function table5()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "infotable";
    var c = [
        ["Task",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Description",
            $("<div/>").html($(a.find(".row_cn").children()[2]).clone()),
            "row_mc6"],
        ["Data Table",
            $("<div/>").html($(a.find(".row_cn").children()[1]).clone()),
            "row_mc7"],
        ["Analytic Table",
            $("<div/>").html($(a.find(".row_cn").children()[1]).clone()),
            "row_mc7"],
    ];
    //
    try
    { 
        // Views 
           c[0][1].children().first().find(".inpx").css("width", "200px"); 
           c[1][1].children().first().find(".inpx").css("width", "300px");
           c[2][1].children().first().find(".inpx").css("width", "200px");

           c[2][1].children().first().find(".row_ic").find("span").first().attr("onclick", "datacol3(this)");
        // Editors
           var l = $(".tbln");
           var fs = [];
           var nm = [];
           $.each(l, (k, item) =>
           {
               fs.push($(item).prop("id"));
               nm.push($(item).find(".nm").html());
           })
           c[1][1].children().first().find(".srdt").html(JSON.stringify(fs)); 
        // Helpers
           loadmenu(fs, nm);
           attributes(c, tn, true);
           loadtable(c, b, a, tn );
        // 
    }
    catch (er)
    {
        alert(er);
    }
    table6(); 
}
// 6. OrgChartTable
function table6()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "organizationcharttable";
    var c = [
        ["Role",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Rate",
            $("<div/>").html($(a.find(".row_cn").children()[6]).clone()),
            "row_mc2"],
        ["Names",
            $("<div/>").html($(a.find(".row_cn").children()[14]).clone()),
            "row_mc14"],
        ["Last Name",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Profile Pic",
            $("<div/>").html($(a.find(".row_cn").children()[3]).clone()),
            "row_mc5"],
        ["Idx",
            $("<div/>").html($(a.find(".row_cn").children()[15]).clone()),
            "row_mc1"],
    ];
    //
    try {
        // Views  
        c[0][1].children().first().find(".inpx").css("width", "200px");
        c[1][1].children().first().find(".inpx").css("width", "100px");
        c[2][1].children().first().find(".inpx").css("width", "200px");

        c[5][1].children().first().find(".inpx").css("width", "50px");
        c[5][1].children().first().find(".row_ic").remove();
        // Editors 
        c[5][1].children().first().find(".inpx").addClass("idx");
        c[5][1].children().first().find(".inpx").html("1");
        // Helpers 
        attributes(c, tn, true);
        loadtable(c, b, a, tn);
        // 
    }
    catch (er) {
        alert(er);
    }
    table7();
}
// 7. ProjScheTable
function table7()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "projectscheduletable";
    var c = [
        ["Task",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Primary Person",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["Secondary Person",
            $("<div/>").html($(a.find(".row_cn").children()[1]).clone()),
            "row_mc7"],
        ["Start",
            $("<div/>").html($(a.find(".row_cn").children()[7]).clone()),
            "row_mc3"],
        ["End",
            $("<div/>").html($(a.find(".row_cn").children()[7]).clone()),
            "row_mc3"],
        ["Progress",
            $("<div/>").html($(a.find(".row_cn").children()[12]).clone()),
            "row_mc12"],
        ["isMilestone",
            $("<div/>").html($(a.find(".row_cn").children()[12]).clone()),
            "row_mc12"],
    ];
    //
    try {
        // Views 
        c[0][1].children().first().find(".inpx").css("width", "300px");
        c[1][1].children().first().find(".inpx").css("width", "80px");
        c[2][1].children().first().find(".inpx").css("width", "80px");

        c[5][1].children().first().find(".inpx").css("width", "100px");
        c[6][1].children().first().find(".inpx").css("width", "80px");

        // Editors 
        c[1][1].children().first().find(".srdt").html(JSON.stringify(organizationcharttable.select("x.Idx").sort()));
        c[1][1].children().first().find(".srdt").addClass("proj_sch1");

        c[2][1].children().first().find(".srdt").html(JSON.stringify(organizationcharttable.select("x.Idx").sort()));
        c[1][1].children().first().find(".srdt").addClass("proj_sch2");

        c[5][1].children().first().find(".srdt").html(JSON.stringify(["Not-Started", "In-Progress", "Completed"]));

        c[6][1].children().first().find(".srdt").html(JSON.stringify(["Yes", "No"]));
        c[6][1].children().first().find(".inpx").html("No");
        // Helpers 
        attributes(c, tn, true);
        loadtable(c, b, a, tn);
        // 
    }
    catch (er) {
        alert(er);
    }
    table8();
}
// 8. Web Api Table
function table8()
{
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "webapitable";
    var c = [ 
        ["WebAPI",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Model",
            $("<div/>").html($(a.find(".row_cn").children()[5]).clone()),
            "row_mc1"],
        ["Service",
            $("<div/>").html($(a.find(".row_cn").children()[4]).clone()),
            "row_mc4"]
    ];
    //
    try {
        // Views   

        // Editors     

        // Helpers 
        attributes(c, tn, true);
        loadtable(c, b, a, tn);
        // 
    }
    catch (er) {
        alert(er);
    }
    table9();
}
// 9. Use Case Table
function table9()
{ 
    var a = datatable.clone();
    var b = $("<div/>").html(a.find(".col_sc").children().first().clone());
    var tn = "usecasetable";
    var c = [
        ["WebPage",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["UserType",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["CRUD",
            $("<div/>").html($(a.find(".row_cn").children()[12]).clone()),
            "row_mc12"],
        ["Task",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["Actor",
            $("<div/>").html($(a.find(".row_cn").children()[12]).clone()),
            "row_mc12"],
        ["Scenario",
            $("<div/>").html($(a.find(".row_cn").children()[4]).clone()),
            "row_mc4"],
        ["Extension",
            $("<div/>").html($(a.find(".row_cn").children()[13]).clone()),
            "row_mc13"],
        ["WebAPI",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["Model",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["Service",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["SQLCommand",
            $("<div/>").html($(a.find(".row_cn").children()[12]).clone()),
            "row_mc12"],
        ["Class",
            $("<div/>").html($(a.find(".row_cn").children()[0]).clone()),
            "row_mc8"],
        ["SQLCondition",
            $("<div/>").html($(a.find(".row_cn").children()[4]).clone()),
            "row_mc4"],
    ];
    //
    try {
        // Views   

        // Editors   
        c[0][1].children().first().find(".srdt").html(JSON.stringify(pagestable.select('x.WebPage')));
        c[0][1].children().first().find(".srdt").addClass("use_case_c1");

        c[1][1].children().first().find(".srdt").html(JSON.stringify(usertypetable.select('x.UserType')));
        c[1][1].children().first().find(".srdt").addClass("use_case_c2");

        c[2][1].children().first().find(".srdt").html(JSON.stringify(["Create", "Read", "Update", "Delete"]));

        c[3][1].children().first().find(".srdt").html(JSON.stringify(infotable.select('x.Task')));
        c[3][1].children().first().find(".srdt").addClass("use_case_c3");

        c[4][1].children().first().find(".srdt").html(JSON.stringify(["Actor", "System"]));

        var t1 = [];
        $.each(databasetable, (k, itm) =>
        {
            if (itm.TID.indexOf(".") == -1)
            {
                t1.push(itm.Name);
            }
        })


        c[7][1].children().first().find(".srdt").html(JSON.stringify(webapitable.select('x.WebAPI')));
        c[7][1].children().first().find(".srdt").addClass("use_case_c4");

        c[8][1].children().first().find(".srdt").html(JSON.stringify(webapitable.select('x.Model')));
        c[8][1].children().first().find(".srdt").addClass("use_case_c5");

        c[9][1].children().first().find(".srdt").html(JSON.stringify(webapitable.select('x.Service')));
        c[9][1].children().first().find(".srdt").addClass("use_case_c6");

        c[10][1].children().first().find(".srdt").html(JSON.stringify(["Insert Row", "Select Row", "Update Row", "Delete Row"]));

        c[11][1].children().first().find(".srdt").html(JSON.stringify(t1));
        c[11][1].children().first().find(".srdt").addClass("use_case_c7");
        // Helpers 
        attributes(c, tn, true);
        loadtable(c, b, a, tn);
        // 
    }
    catch (er) {
        alert(er);
    }
    table10();
}
// 10. Entities 
function table10()
{
    var c = [];
    var id = "";
    var nm = "";
    var a1 = 2;
    var start = false; 

    $.each(databasetable, (k, item) =>
    {
        var x1 = $("<div/>").html(datatable.clone()).html(); 
        var a = $("<div/>").html(x1).children().first();
        var b = $("<div/>").html(a.find(".col_sc").children().first().clone());

        try {

            var a2 = (item.TID.indexOf(".") == -1) ? 1 : 2;

            if (a1 == 1 && a2 == 1 )
            {
                if (start)
                {
                    proceed(a, b, c, id , nm);
                    c = [];
                }
                start = true;
            }
            if (a1 == 2 && a2 == 1 )
            {
                if (start)
                {
                    proceed(a, b, c, id , nm);
                    c = [];
                }
                start = true;
            }

            if (a1 == 2 && a2 == 1)
            {
                id = (item.Name.replace(/ /g, "") + "").toLowerCase();
                nm = item.Name;
                start = true;
            }
            else if (a1 == 1 && a2 == 2 || a1 == 2 && a2 == 2) {

                if (item.Name.trim() == "")
                {
                    return;
                }
                var vid = parseInt(columntable.where({ Name: item.Type })[0].ViewId);
                 
                var o = $("<div/>").html('<div class="rcg2"><div><div class="inpx idx" style="width: 162px;"> 1 </div></div ></div >'); 
                var c1 = item.Name;
                var c2 = (item.Type == "Idx") ? o : $("<div/>").html($(a.clone().find(".row_cn").children()[vid]).clone()); 
                var c3 = columntable.where({ Name: item.Type })[0].EditorClass;
                // Editor
                if (item.CustomColumn != "")
                {
                    var r1 = JSON.stringify(item.CustomColumn);
                    c2.children().first().find(".srdt").html(r1); 
                }
                if (item.TableName != "")
                {
                    var tbn = (item.TableName.replace(/ /g, "") + "").toLowerCase();
                    var tcl = (item.TableColumn.replace(/ /g, "") + ""); 
                     
                    var tb = this[tbn];
                    var dg = (typeof (tb) == "undefined") ? [] : tb.select("x." + tcl);
                    var r1 = JSON.stringify(dg);
                    c2.children().first().find(".srdt").html(r1);
                }
                var w = (typeof (item.ColumnWidth) == "undefined") ? 162 : item.ColumnWidth; 
                var d = (typeof (item.DefaultValue) == "undefined") ? "" : item.DefaultValue;
                 
                c2.children().first().find(".inpx").css("width", w + "px"); 
                if (item.Type == "Select Tag")
                {
                    var f = (d+"").split(",");  
                    c2.children().first().find(".srdt").html(JSON.stringify(f));

                }
                else {
                    c2.children().first().find(".inpx").html(d);
                }

                if (item.Type == "Search Set")
                { 
                    var cl = item.Name.toLowerCase().replace(/ /g, "");
                    var z = id + "_" + cl;
                    c2.children().first().find(".srdt").addClass(z);
                }
                //
                c.push([c1, c2, c3]);
            } 

            a1 = a2;

            if (k + 1 == databasetable.length)
            {
                proceed(a, b, c, id, nm);
            }
        }
        catch (er) { 
        }
    }); 
    var kr = $("#infotable").clone(); 
    function proceed(a, b , c , tn , nm)
    { 
        $("." + tn + "_mnu").mousedown(function ()
        { 
            if ($(".mnuE").find("#" + tn).length == 0)
            { 
                var p = kr.clone();
                p.attr("id", tn);
                p.removeClass("tbli");
                p.addClass("tbln");
                p.find(".nm").html(nm);
                p.css("display", "none");
                p.find(".mtb").addClass("mtbd");

                var p1 = $(".mnuE").html();
                var p2 = $("<div/>").html(p).html();

                $(".mnuE").html(p1 + p2);

                attributes(c, tn, true);
                loadtable(c, b, a, tn);
                align();
            }
        });

    }

    settables();
} 
// Helpers  
$(window).on("load", function () { set_pop(); });
function show_pop(tag) {
    var nm = $(tag).attr("name");
    $("." + nm).css("display", "flex");
}
function set_pop() {
    var a = $(".hide_ps");
    $.each(a, (k, tag) => {
        $(tag).attr("state", "off");
        var childs = $(tag).children();
        // Is Overlay Area
        $.each(childs, (index, item) => {
            var p = $(item).attr("ignore") + "";

            if (p == "true") {
                $(item).click(function () {
                    $(tag).attr("state", "off");
                });
            }
            else {
                $(item).click(function () {
                    $(tag).attr("state", "on");
                });
            }
        });
        $(tag).click(function () {
            var state = $(this).attr("state");
            if (state == "off") {
                $(this).css("display", "none");
            }
            else {
                $(this).css("display", "flex");
                $(this).attr("state", "off");
            }
        })
    });
}

function loadmenu(a, b)
{
    var c = $(".mnu").children().first();
    var str = "";

    var g = [];

    var b = colm(1);
    $.each(b, (k, item) =>
    {
        g.push(item)
    });
    g = g.sort();

    $.each(g, (k, itm1) => { 

        var id = (itm1.replace(/ /g, "") + "").toLowerCase();
        var name = itm1;
        var d = c.clone();

        d.html(name);
        d.attr("name",id);
        d.addClass(id + "_mnu");
        d.addClass("infc");
        d.removeClass("infb");
        d.removeProp("onclick");
        d.css("font-size","13px");

        str += $("<div/>").html(d).html();
    });
    $(".dbitms").html(str);
}
function attributes(arr, tn, tid)
{
    var fd = [];
    $.each(arr, (k, item) => {
        var z = item[0].replace(/ /g, "");
        fd.push(z);
    });
    if (tid) {
        fd.push("TID");
    }
    var ld = JSON.stringify(fd);
    $("#" + tn).find(".dwn").attr("tbl", ld);
    $("#" + tn).find(".dwn").attr("tbn", tn);
}
function loadtable(c, b, a, tn , r = false)
{
    var h = "";
    var t = "";

    $.each(c, (k, item) => {
        b.find(".rcg").html(item[0]);
        h += b.html();
        t += item[1].html();
    });

    a.find(".col_sc").html(h);
    a.find(".row_cn").html(t);

    if (a.find(".row_mc6").length == 0)
    {
        a.find(".edpP").remove();
    }
    vw_md(a, r);

    $.each(a.find(".row_mc"), (k, item) => {
        var fn = false;
        $.each(c, (i, itm3) => {
            if ($(item).hasClass(itm3[2])) {
                fn = true;
            }
        })
        if (!fn) {
            $(item).remove();
        }
    })
    //
    $("#" + tn).find(".tb_area").html(a.html());
    if (tn == "infotable")
    {
      //$("#" + tn).css("display", "block");
    }
    setTimeout(function ()
    {
        $("#" + tn).focus().trigger("resize");
    },100);
} 
function vw_md(a, r)
{
    proc(); 
    if (a.html().trim().substring(0, 4) == "<!--")
    {
        var st = a.attr("tbst");
        if (st != "true")
        {
            a.attr("tbst", "true");
            a.resize(function ()
            { 
                a.find(".dwn1").focus().trigger("click");
                a.find(".dwn1").focus().trigger("click");
            })
        }
    }
    function proc() {
         
        if (a.html().trim().substring(0, 4) != "<!--")
        {
            return;
        }

        if (r) {
            a.find(".row_mn").css("display", "none");
            a.find(".row_mc").css("display", "none");
            a.find(".edpP").css("display", "none");

            var to = a.find(".row_con").parent().parent().parent();
            var w = to.outerWidth();
            var w1 = a.find(".row_cn").outerWidth();
            var w2 = a.find(".row_sc").outerWidth();
            var wc = (w1 + w2);

            var wp = a.find(".row_con").outerWidth();

            var z = (100 * (wp / wc)) + "%";
            a.find(".row_con").attr("zmd", "true");
            a.find(".row_con").attr("wd", a.find(".row_con").parent().outerWidth());
            a.find(".row_con").css("zoom", z);


            a.find(".row_con").css("width", w * (wc / wp) * (90 / 100) + "px");
            var mg = w * (5 / 100); 
            a.find(".row_con").css("margin-left", mg+"px"); 

            a.find(".row_ic").css("display", "none");
            a.find(".row_i").attr("disb", "true");
            a.find(".row_ap").find("span").css("display", "none");
            a.find(".row_con").removeClass("tab_lm1");
            a.find(".row_cp").removeClass("tab_lm2");
            a.find(".row_lp").removeClass("tab_lm2");
            a.find(".row_lp").removeClass("row_lp1");
            a.find(".row_ap").removeClass("row_ap1");
            a.find(".row_r").removeClass("row_r1");
            a.find(".col_sp").removeClass("col_sp1");
            a.find(".row_cp").css("overflow", "unset");
            a.find(".row_lb").css("display", "none");
        }
        else {
            a.find(".row_ic").css("display", "block");
            a.find(".row_i").attr("disb", "false");
            a.find(".row_ap").find("span").css("display", "block");

            var to = a.find(".row_con").parent().parent().parent();
            var w = to.outerWidth();

            a.find(".row_con").css("width", (90 / 100) * w + "px");
            a.find(".row_con").css("margin-left", "unset");
            a.find(".row_con").css("margin", "auto");

            a.find(".row_con").addClass("tab_lm1");
            a.find(".row_cp").addClass("tab_lm2");
            a.find(".row_lp").addClass("tab_lm2");
            a.find(".row_lp").addClass("row_lp1");
            a.find(".row_ap").addClass("row_ap1");
            a.find(".row_r").addClass("row_r1");
            a.find(".col_sp").addClass("col_sp1");
            a.find(".row_con").attr("zmd", "false");
            a.find(".row_con").css("zoom", "100%");
            a.find(".row_cp").css("overflow", "scroll");
            a.find(".row_lb").css("display", "block");
        }
    }
}
function settables() { align(); set_hide(); }

function ed_print(tag)
{
    var ttl = $(tag).parent().parent().parent().find(".nm").html(); 
    var md = $(tag).parent().find(".dwn1").attr("mode");

    if (md == "on")
    {
        $(tag).parent().find(".dwn1").focus().trigger("click");
    }
    var k = $(tag).parent().parent().parent().find(".tb_area");
    var w = k.find(".row_sp").outerWidth(); 
    var p = k.clone();

    var arr = [];
    $.each(p.find(".row_sp").children(), (k, item) =>
    {
        var t = $(item).find(".row_i").html();
        arr.push(t);
    })
    
    p.find(".row_ap").remove();
    p.find(".row_lp").remove();

    // Header
    var tid = p.find(".col_sc").children().first().clone(); 
    tid.html("TID");

    var a1 = $("<div/>").html(tid).html();
    var a2 = p.find(".col_sc").html();
    p.find(".col_sc").html(a1 + a2);

    var b = p.find(".row_cp").children();
    $.each(b, (k, item) =>
    {
        var c = $(item).children().first().clone();
        c.find(".inpx").html(arr[k]);
        c.find(".inpx").outerWidth(w);
        c.css("color","#E48380");
        c.css("font-weight","700");

        var b1 = $("<div/>").html(c).html();
        var b2 = $(item).html();

        $(item).html(b1 + b2);
    })
    
    var arr2 = []
    var d = p.find(".col_sc").children(); 
    $.each(d, (k, item) =>
    {
        var t = $(item).html(); 
        arr2.push(t);
    })

    var e = p.find(".row_cp").children().first().clone();
    $.each(e.children() , (k, item) =>
    {
        $(item).find(".inpx").html(arr2[k]);
        $(item).css("border-top", "solid 1.5px #CCD6EB");
        $(item).css("color", "#34444C");
        $(item).css("font-weight", "700");
        $(item).css("text-align", "center");
    });

    var f1 = $("<div/>").html(e).html();
    var f2 = p.find(".row_cp").html();

    p.find(".row_cp").html(f1 + f2);
    // Scrollable 
    p.find(".col_sp").css("display","none");
    // 
    p.find(".row_cn").css("border-right", "none");
    var sr = $("#jq").attr("src"); 
    var hd = '<script src="' + sr + '"></script>'; 
    var htm = $("<div/>").html(p).html();
    var pre = '<div class="prnt_mode" style="padding-left: 15px; color: #717A7F; font-size:22px; text-align:center; padding:15px; font-weight:700;">'
            + ttl + '</div >';
    var post = '<div style="padding-right: 10px; color: #717A7F; font-size:13px; font-weight: 700; margin-top:15px; text-align:center;">'
             +  'generated by <span style="color: #E48380;"> Teuber </span>' 
             + '</div>';

    var o = window.open("", "_blank", "width=900,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
    o.document.open();
    o.document.write("<!doctype html><html><head><title>"+ttl+" - Teuber <\/title> " + hd + "<\/head><body onload=\"print();\">" + pre + htm + post + "<\/body><\/html>");
    o.document.close();
}
function ed_mode(tag) {
    var a = $(tag).parent().parent().parent();
    var b = $(tag).attr("mode");

    if (b == "on") {
        $(tag).attr("mode", "off");
        $(tag).find(".fa").removeClass("fa-toggle-on");
        $(tag).find(".fa").addClass("fa-toggle-off");

        vw_md(a, true);
    }
    else {
        $(tag).attr("mode", "on");
        $(tag).find(".fa").removeClass("fa-toggle-off");
        $(tag).find(".fa").addClass("fa-toggle-on");

        vw_md(a, false);
    }

    var z = $(tag).parent().parent().parent().parent();
    z.focus().trigger("resize");
} 
function showtbl(tag)
{
    var nm = $(tag).attr("name");
    $(".tbli").css("display", "none");
    $(".tbln").css("display", "none");
    $("#" + nm).css("display", "block");
    $("#" + nm).focus().trigger("resize");

    var g = $("#" + nm).find(".mtb"); 
    if (!g.hasClass("mtbo") && !g.hasClass("mtbr"))
    { 
        $("#" + nm).find(".dwn").first().focus().trigger("click");
    }
    // Project Schedule Table
    if (nm == "projectscheduletable")
    {
        $(".proj_sch1").find(".srdt").html(JSON.stringify(organizationcharttable.select("x.Idx").sort()));
        $(".proj_sch2").html(JSON.stringify(organizationcharttable.select("x.Idx").sort())); 
    }
    // Use Case Table
    if (nm == "usecasetable")
    {
        $(".use_case_c1").html(JSON.stringify(pagestable.select('x.WebPage')));
        $(".use_case_c2").html(JSON.stringify(usertypetable.select('x.UserType')));
        $(".use_case_c3").html(JSON.stringify(infotable.select('x.Task'))); 
        $(".use_case_c4").html(JSON.stringify(webapitable.select('x.WebAPI')));
        $(".use_case_c5").html(JSON.stringify(webapitable.select('x.Model')));
        $(".use_case_c6").html(JSON.stringify(webapitable.select('x.Service')));

        var t1 = [];
        $.each(databasetable, (k, itm) => {
            if (itm.TID.indexOf(".") == -1) {
                t1.push(itm.Name);
            }
        })

        $(".use_case_c7").html(JSON.stringify(t1));
    }
    // Database Table
    var f = write2v();
    $.globalEval(f);

    try {
        var tid = ""; var cnt = true;
        $.each(databasetable, (k, item) => {
            if (cnt)
            {
                var id = (item.Name.replace(/ /g, "") + "").toLowerCase();

                if (id == nm)
                { 
                    tid = item.TID;
                    cnt = false;
                }
            }
        })
         
        var prc = []; var pok = [];
        $.each(databasetable, (k, item) =>
        {
            if (item.TID.indexOf(tid) == 0 && item.TID != tid && tid != "")
            { 
                if (item.Type == "Search Set")
                { 
                    if (item.TableName!= "" && item.TableColumn != "")
                    {
                        var q = item.TableName + ":" + item.TableColumn;

                        if (pok.indexOf(q) == -1)
                        {
                            pok.push(q);
                            prc.push(item);
                        }
                    }
                }
            }
        })

        $.each(prc, (k, item) => {

            var tb = item.TableName.toLowerCase().trim().replace(/ /g, "");
            var cl = item.TableColumn.replace(/ /g, "");

            var arr = window[tb].select("x." + cl);
           
            var cl = item.Name.toLowerCase().replace(/ /g, "");
            var z = nm + "_" + cl;
            $("." + z).html(JSON.stringify(arr));
        })
        //
    }
    catch(er) {
        //alert(er)
    }

    $(".mnu").attr("vsb", nm);
}

function tog(tag) {
    var st = $(tag).attr("state");
    if (typeof (st) == "undefined") {
        st = "on";
    }

    if (st == "on") {
        $(tag).attr("state", "off");
        $(".mnu").css("display", "none");
    }
    else {
        $(tag).attr("state", "on");
        $(".mnu").css("display", "block");
    }
    var nm = $(".mnu").attr("vsb");
    $("#" + nm).focus().trigger("resize");
} 
function togt(tag) {
    var nm = $(tag).attr("name");

    var st = $("." + nm).attr("stt");

    if (st == "off") {
        $("." + nm).attr("stt", "on");
        $("." + nm).css("display", "none");
        $(tag).find(".fa").removeClass("fa-caret-up");
        $(tag).find(".fa").addClass("fa-caret-down");
    }
    else {
        $("." + nm).attr("stt", "off");
        $("." + nm).css("display", "block");
        $(tag).find(".fa").removeClass("fa-caret-down");
        $(tag).find(".fa").addClass("fa-caret-up");
    }
}
 
function colm(lvl) {
    var fn = [];
    $.each(databasetable, (k, item) => {
        var a = item.TID;
        var b = (a.indexOf(".") == -1) ? a : a.replace(/./g, "");
        var c = a.length - b.length + 1;

        if (c == lvl) {
            fn.push(item.Name);
        }
    });
    return fn;
}

function datacol3(tag) {

    var fn = [];
    $.each(colm(1), (k, item) =>
    {
        var nm = item.toLowerCase();
        fn.push(nm)
    })
    if (fn.length != 0)
    {
        $(tag).find("span").html(JSON.stringify(fn));
        edtag(tag);
    }
}
function datacol2(tag) {
    // Link
    var e = $(tag).parent().parent().parent().parent();
    e.addClass("tmp");
    var q = e.parent().children();
    var ps = 0;
    $.each(q, (k, item) => {
        if ($(item).hasClass("tmp")) {
            ps = k;
        }
    })
    e.removeClass("tmp");
    var f = $(e.parent().parent().find(".row_sp").children()[ps]).find(".row_i").html();

    if (f.indexOf(".") == -1) {
        return;
    }

    var pr = f.substring(0, f.lastIndexOf("."));
    var zr = e.parent().parent().find(".row_sp").children();
    $.each(zr, (k, item) => {
        if ($(item).find(".row_i").html() == pr) {
            ps = k;
        }
    })
    var u = $(e.parent().children()[ps]).find(".inpx").html();
    //
    var a = $(tag).parent().parent().parent().parent().children().first().next().find(".inpx").html();

    var clear = false;
    if (a == "") {
        clear = true;
    }

    if (clear) {
        $(tag).parent().parent().parent().find(".inpx").html("");
    }
    else {
        var fn = [];
        $.each(colm(1), (k, item) => {
            if (item != u) {
                fn.push(item);
            }
        })
        if (fn.length != 0) {
            $(tag).find("span").html(JSON.stringify(fn));
            edtag(tag);
        }
    }
}
function datacol(tag) {
    var a = $(tag).parent().parent().parent().prev().find(".inpx").html();

    var clear = false;
    if (a == "") {
        clear = true;
    }

    var b = databasetable.where({ Name: a });
    var fn = [];
    $.each(b, (k, itm1) => {
        $.each(databasetable, (i, itm2) => {
            var c = itm1.TID + ".";
            var d = itm2.TID;

            if (d.indexOf(c) == 0) {
                fn.push(itm2.Name);
            }
        })
    });

    if (fn.length == 0) {
        clear = true;
    }

    if (clear) {
        $(tag).parent().parent().parent().find(".inpx").html("");
    }
    else {
        $(tag).find("span").html(JSON.stringify(fn));
        edtag(tag);
    }
}
// IO
function write0(tag)
{
    var f = write00($(tag));

    $(tag).parent().parent().parent().find(".jcb").css("display", "block");
    $(tag).parent().parent().parent().find(".jcd").html(f);
}
function write00(obj)
{
    var a = JSON.parse(obj.attr("tbl"));
    var b = obj.parent().parent().parent().find(".row_cp").children();
    var u = obj.parent().parent().parent().find(".row_sp").children();
    var arr = [];

    $.each(b, (k, itm1) => {
        var c = $(itm1).children();
        var str = '{ ';
        $.each(a, (i, itm2) => {
            if (itm2 != "TID") {
                var x = $(c[i]).find(".inpx");
                var y = "";

                if (x.find("img").length > 0) {
                    y = '"' + processJSON(x.find("img").attr("src")) + '"';
                }
                else if (x.find(".liv").length > 0) {
                    var h = [];

                    $.each(x.find(".liv"), (n, itm3) => {
                        h.push(processJSON($(itm3).html()));
                    })
                    y = JSON.stringify(h);
                }
                else {
                    st = processJSON(x.html().trim());
                    st = replaceAll(st, "\n", "@*");
                    function replaceAll(str, a, b) {

                        while (str.indexOf(a) != -1) {
                            str = str.replace(a, b);
                        }
                        return str;
                    }
                    y = '"' + st + '"';
                }
                str += '"' + itm2 + '" : ' + y + ' , ';
            }
        });
        if (a.indexOf("TID") != -1) {
            str += '"TID" : "' + $(u[k]).find(".row_i").html().trim() + '" ';
        }
        else {
            str = str.substring(0, str.length - 2);
        }

        str += ' }';
        try { 
            var w = JSON.parse(String(str));
            arr.push(w);
        }
        catch (err) {
            //alert(err);
            //alert(str)
            //alert(str.substr(60 , 68))
        }
    })
    var e = obj.attr("tbn");
    var f = 'var ' + e + ' = ' + JSON.stringify(arr) + ' ; ';

    return f;
}
function read0(tag)
{ 
    var q = $(tag).parent().parent();
    if (q.hasClass("mtbd")) {
        q.addClass("mtbr");
    }
    else {
        q.addClass("mtbo");
    }

    var b = $(tag).parent().parent().parent().find(".row_cp").children().first().clone();
    var u = $(tag).parent().parent().parent().find(".row_sp").children().first().clone();

    var a = JSON.parse($(tag).attr("tbl"));
    var e = $(tag).attr("tbn"); 
    var tb = this[e];

    var str1 = "";
    var str2 = "";

    $.each(tb, (k, itm1) => {
        var tid = "";
        var k2 = b.clone();
        var er = false;
        $.each(a, (i, itm2) => {
             
            if (itm2 == "TID") {
                try {
                    tid = itm1[itm2];
                }
                catch {
                    tid = "1";
                    er = true;
                }
            }
            else {
                if (!er) {

                    try {
                        var y = "";
                        var x = itm1[itm2];

                        x = (x.indexOf("@#") != -1) ? x.replace(/@#/g, '"') : x;
                        x = replaceAll(x, "@*", "\n");
                        function replaceAll(str, a, b) {

                            while (str.indexOf(a) != -1) {
                                str = str.replace(a, b);
                            }
                            return str;
                        }

                        if (x.indexOf("data:image") != -1) {
                            var g = $("<img/>");
                            g.addClass("ed_im5");
                            g.attr("src", x);
                            y = $("<div/>").html(g).html();
                        }
                        else if (typeof (x) == "object") {
                            var cn = $("<div/>");
                            cn.html("");
                            $.each(x, (k, itm3) => {
                                var ob = $("<div/>");
                                ob.addClass("liv");
                                ob.html(itm3);
                                cn.append(ob);
                            });
                            y = cn.html();
                        }
                        else {
                            y = x;
                        }
                        $(k2.children()[i]).find(".inpx").html(y);
                    }
                    catch (e) { }
                }
            }
        });
        // TID
        var k1 = u.clone();
        k1.find(".row_i").html(tid);
        str1 += $("<div/>").html(k1).html();
        // Content
        str2 += $("<div/>").html(k2).html();
        //
    })
    $(tag).parent().parent().parent().find(".row_sp").html(str1);
    $(tag).parent().parent().parent().find(".row_cp").html(str2);
    $("#" + e).focus().trigger("resize");
}
function copy0(tag)
{
    var a = JSON.parse($(tag).attr("tbl"));
    var b = $(tag).parent().parent().parent().find(".row_cp").children();
    var u = $(tag).parent().parent().parent().find(".row_sp").children();
    var arr = [];

    $.each(b, (k, itm1) => {
        var c = $(itm1).children();
        var str = '{ ';
        $.each(a, (i, itm2) => {
            if (itm2 != "TID") {
                var x = $(c[i]).find(".inpx");
                var y = "";

                if (x.find("img").length > 0) {
                    y = '"' + processJSON(x.find("img").attr("src")) + '"';
                }
                else if (x.find(".liv").length > 0) {
                    var h = [];

                    $.each(x.find(".liv"), (n, itm3) => {
                        h.push(processJSON($(itm3).html()));
                    })
                    y = JSON.stringify(h);
                }
                else {
                    y = '"' + processJSON(x.html().trim()) + '"';
                }
                str += '"' + itm2 + '" : ' + y + ' , ';
            }
        });
        if (a.indexOf("TID") != -1) {
            str += '"TID" : "' + $(u[k]).find(".row_i").html().trim() + '" ';
        }
        else {
            str = str.substring(0, str.length - 2);
        }

        str += ' }';
        try {
            var w = JSON.parse(String(str));
            arr.push(w);
        }
        catch (err) {
           // alert(err);
           // alert(str)
        }
    })
    var e = $(tag).attr("tbn");
    var f = 'var ' + e + ' = ' + JSON.stringify(arr) + ' ; ';

    var aux = document.createElement("input"); 
    aux.setAttribute("value" , f); 
    document.body.appendChild(aux); 
    aux.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(aux);
}

function write1(tag)
{ 
    var str = write1v();
    $(tag).parent().parent().parent().find(".jcb2").css("display", "block");
    $(tag).parent().parent().parent().find(".jcd2").html(str);

}
function write1v()
{ 
    var a = $(".mtbd");
    var unread = [];
    var read = [];
    var undefined = [];
    var str = "";

    $.each(a, (k, itm1) => {
        var b = $(itm1);
        if (b.hasClass("mtbr")) {
            var c = b.find(".dwn").first().attr("tbn");
            if (window.hasOwnProperty(c)) {
                read.push(c);
            }
            else {
                undefined.push(c);
            }
        }
    });

    var d = $(".dbitms").children();
    $.each(d, (k, itm1) => {
        var e = $(itm1).attr("name");
        var exist = false;
        $.each(read, (i, itm2) => { if (e == itm2) { exist = true; } });

        if (!exist) {
            if (window.hasOwnProperty(e)) {
                unread.push(e);
            }
            else {
                undefined.push(e);
            }
        }
    });

    $.each(read, (z, itm) => {
        var f = write00($("#" + itm).find(".mtb").find(".dwn").first());
        str += f;
    })

    $.each(unread, (k, itm) => {
        var f = 'var ' + itm + ' = ' + JSON.stringify(this[itm]) + ' ; ';
        str += f;
    });

    var cc = [];
    var id = "";
    var a1 = 2;
    var start = false;

    $.each(databasetable, (k, item) => {
        try {
            var nm = item.Name.toLowerCase().trim().replace(/ /g, "");

            var a2 = (item.TID.indexOf(".") == -1) ? 1 : 2;

            if (a1 == 1 && a2 == 1) {
                if (start) {
                    if (undefined.indexOf(id) != -1) { 
                        str += proceed(cc , nm);
                        cc = [];
                    }
                }
                start = true;
            }

            if (a1 == 2 && a2 == 1) {
                if (start) {
                    if (undefined.indexOf(id) != -1) {
                        str += proceed(cc , nm);
                        cc = [];
                    }
                }
                start = true;
            }
            if (a1 == 2 && a2 == 1) {
                id = (item.Name.replace(/ /g, "") + "").toLowerCase();
                start = true;
            }
            else if (a1 == 1 && a2 == 2 || a1 == 2 && a2 == 2) {
                if (undefined.indexOf(id) != -1) { cc.push(item.Name); }
            }

            a1 = a2;

            if (k + 1 == databasetable.length) {
                if (undefined.indexOf(id) != -1) {
                    str += proceed(cc , nm);
                    cc = [];
                }
            }
        }
        catch (er) {
            //alert(er);
        }
    });


    function proceed(c, n) {
         
        var a = $("#" + n);
        var b = (a.find(".mtbr").length == 0) && (typeof (this[n]) == "undefined");

        var f = "";

        if (b) {
            var st = "[ ";
            $.each(c, (w, itm1) => {
                if (w == 0) {
                    st += '{ ';
                }

                if (itm1 == "Idx") {

                    st += '"' + itm1 + '" : "1"';
                }
                else {

                    st += '"' + itm1 + '" : "" ';
                }

                if (w != c.length) {
                    st += ', ';
                }
                if (w + 1 == c.length) {
                    st += ' "TID":"1" } ';
                }

            });
            st += "]";

            f = 'var ' + id + ' = ' + st + ' ; ';
        }
        else {

            f = write00($("#" + n).find(".mtb").find(".dwn").first());
        }
        return f;
    }

    return str;
}
function copy1()
{
    var f = write1v();

    var aux = document.createElement("input");
    aux.setAttribute("value", f);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function write2()
{
    var a = $("<div/>");
    a.attr("name", "filedata");
    showtbl(a);

    var str = write2v(); 
    $(".jcd3").html(str);

}
function write2v()
{
    var a = $(".mtb");
    var unread = [];
    var read = [];
    var undefined = [];
    var str = "";

    $.each(a, (k, itm1) => {
        var b = $(itm1);
        if (b.hasClass("mtbr") || b.hasClass("mtbo"))
        {
            var c = b.find(".dwn").first().attr("tbn");
            if (window.hasOwnProperty(c))
            {
                read.push(c);
            }
            else {
                undefined.push(c);
            }
        }
    });

    var d = $(".dbitms").children();
    var dd = [];
    $.each(d, (k, itm1) => {  dd.push($(itm1).attr("name")); });
    $.each(deftb, (k, itm1) => { dd.push(itm1); });
     
    $.each(dd, (k, itm1) =>
    {
        var e = itm1;
        var exist = false;
        $.each(read, (i, itm2) => { if (e == itm2) { exist = true; } });

        if (!exist) {
            if (window.hasOwnProperty(e)) {
                unread.push(e);
            }
            else {
                undefined.push(e);
            }
        }
    });

     
    $.each(read, (z, itm) => {
        var f = write00($("#" + itm).find(".mtb").find(".dwn").first()); 
        str += f;
    })

    $.each(unread, (k, itm) => {
        var f = 'var ' + itm + ' = ' + JSON.stringify(this[itm]) + ' ; ';
        str += f;
    });
     
    var f = write1v();
    str += f;

    return str;
}
function copy2()
{
    var f = write2v();
     
    var aux = document.createElement("input");
    aux.setAttribute("value", f);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux); 
}

function build1(tag)
{
    var obj = $(tag);
    var tb = [];
    var e = "";

    var q = obj.parent().parent();
    if (q.hasClass("mtbo"))
    {
        var a = JSON.parse(obj.attr("tbl"));
        var b = obj.parent().parent().parent().find(".row_cp").children();
        var u = obj.parent().parent().parent().find(".row_sp").children();
        var arr = [];

        $.each(b, (k, itm1) => {
            var c = $(itm1).children();
            var str = '{ ';
            $.each(a, (i, itm2) => {
                if (itm2 != "TID") {
                    var x = $(c[i]).find(".inpx");
                    var y = "";

                    if (x.find("img").length > 0) {
                        y = '"' + processJSON(x.find("img").attr("src")) + '"';
                    }
                    else if (x.find(".liv").length > 0) {
                        var h = [];

                        $.each(x.find(".liv"), (n, itm3) => {
                            h.push(processJSON($(itm3).html()));
                        })
                        y = JSON.stringify(h);
                    }
                    else {
                        y = '"' + processJSON(x.html().trim()) + '"';
                    }
                    str += '"' + itm2 + '" : ' + y + ' , ';
                }
            });
            if (a.indexOf("TID") != -1) {
                str += '"TID" : "' + $(u[k]).find(".row_i").html().trim() + '" ';
            }
            else {
                str = str.substring(0, str.length - 2);
            }

            str += ' }';
            try {
                var w = JSON.parse(String(str));
                arr.push(w);
            }
            catch (err) {
               // alert(err);
               // alert(str)
            }
        })
        e = obj.attr("tbn");
        tb = arr;

        $(".mnuE").html("");
        window[e] = tb;
        table1();
         
        read0(tag);
    }
    else
    {
        var e = obj.attr("tbn");
        tb = this[e];

        $(".mnuE").html("");
        window[e] = tb;
        table1();
    }

    $("#infotable").css("display", "none");
}

function popfade(msg) {
    $(".clbrd").find(".vl").html(msg);
    $(".clbrd").fadeIn(800);
    $(".clbrd").fadeOut(1800);
}
function closefile()
{
    $("#filecont").attr("src", "");
    $("#filecont").html("");

    $.each(deftb, (k, itm) =>
    {
        reseter(true, itm)
    })
    table1();
}
function openfile(tag) {
    $(tag).parent().find(".fl").trigger("click");
}
function readfile(tag) {
     
    var file = tag.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = function ()
    { 
        const myDecipher = decipher('teuberhs')
        var g = myDecipher(reader.result); 
        $.globalEval(g)
        table1();
         
        uploaded = true;
        setcache();
    };

}

function savefile()
{ 
    var f = write2v();

    const myCipher = cipher('teuberhs') 
    var g = myCipher(f);

    download("tbrdata.txt", g);
}
function download(filename, text)
{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}
const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}

// Test Web API
function testapi()
{ 
    var a = test("post1");
    popfade("POST result : " + a);
    var b = test("get1");
    popfade("GET result : " + b);

    function test(func)
    { 
        var inp = {
            "control": 'TestController',
            "func": func,
            "param": $("#api_param").val()

        };
        var a = $("#api_url").val() + '/Home/Get0';

        var ret = "";
        $.ajax({
            async: false,
            type: "GET",
            url: 'https://testing-webapi.herokuapp.com/Home/Get0?json={%22control%22:%22TestController%22,%22func%22:%22get1%22,%22param%22:%22sam%22}' ,
            dataType : "jsonp" .
            success: function (response) {
                ret = response;
            },
            failure: function (response) {
                alert(JSON.stringify(response));
            },
            error: function (response) {
                alert(JSON.stringify(response));
            }
        });
        return ret;
    }
}
//
//
