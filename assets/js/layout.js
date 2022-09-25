/*
    Thubakgale MS - 201701870
    27-10-2021
 */
/**======== Database ========*/
var pause_sync = false; var sync_done = false; var sync_id;
var layout_done = false; var page_done = false;

$(window).on("load", function () {
    if (projtype == "server") {
        syncdatabase();
        GetLayout();
        showpage();
    }
    else {
        //UserManagement("Visitor");
        UserManagement("Customer");

        sync_done = true;
        layout_done = true;
        page_done = true;

        showpage();
    }
});
var wait;
function syncdatabase() {
    sync_id = setInterval(function () {
        if (!pause_sync) {
            pause_sync = true;

            wait = true;
            var resp = hPost("Layout", "post1", "");
            wait = false;
            sync_done = true;
        }
    }, 3000);
}
function showpage() {
    var a = setInterval(function () {
        if (sync_done && layout_done && page_done)
        { 
              reload();  
            // Mobile Base
            if ($("#ismobile").css("display") == "block") {
                $(".h_mobile").css("display", "block");
            }
            else {
                $(".h_mobile").css("display", "none");
            }
            // Loader
            clearInterval(a);

            $(".ldr_dv").css("background-color", "white");

            $(".lodr1").css("display", "block");
            $(".lodr2").css("display", "none");

            _loader("N");
            //
        }
        else {
            $(".ldr_dv").css("background-color", "#F2F2F2");

            $(".lodr1").css("display", "none");
            $(".lodr2").css("display", "block");

            _loader("Y");
        }
    }, 250);
}
function hGet(ctrl, funct, paramt) {
    if (devtype == "web") {
        var resp = "";
        var inp = {
            "control": ctrl + 'Controller',
            "func": funct,
            "param": paramt
        };

        $.ajax({
            async: false,
            type: "GET",
            url: "/Home/Get0",
            data: inp,
            contentType: "application/json;",
            success: function (response) {
                resp = response;
            },
            error: function (response) {
                alert("error");
            }
        });

        return resp;
    }
    if (devtype == "desktop") {
        var resp = "";
        var inp = {
            controller: ctrl + 'Controller',
            func: funct,
            param: paramt
        };
        var jsonData = JSON.stringify(inp);
        $.ajax({
            async: false,
            type: "GET",
            url: '/Home/Get0',
            data: { json: jsonData },
            datatype: "text",
            success: function (response) {
                resp = response;
            },
            error: function (response) {
                alert("error: " + ctrl + " , " + funct + " , " + paramt);
            }
        });

        return resp;
    }
    if (devtype == "mobile1") {
        var res = cSharp(paramt, 'get', ctrl + 'Controller/' + funct);

        if (res.indexOf("{") == -1) {
            return JSON.parse(res);
        }

        var resp = JSON.parse(res);
        var a = [];
        $.each(resp, (index, item) => {
            var b = JSON.parse(item);
            var c = jsonUpper(JSON.stringify(b));
            a.push(c);
        });

        return a;
    }
}
function hPost(ctrl, funct, paramt) {
    if (devtype == "web") {
        var resp = "";
        var inp = {
            controller: ctrl + 'Controller',
            func: funct,
            param: paramt
        };

        $.ajax({
            async: false,
            type: "POST",
            url: "/Home/Post0",
            data: JSON.stringify(inp),
            contentType: "application/json;",
            success: function (response) {
                resp = response;
            },
            error: function (response) {
                alert("error");
            }
        });

        return resp;
    }
    if (devtype == "desktop") {
        var resp = "";
        var inp = {
            controller: ctrl + 'Controller',
            func: funct,
            param: paramt
        };

        var jsonData = JSON.stringify(inp);
        $.ajax({
            async: false,
            type: "POST",
            url: '/Home/Post0',
            data: { json: jsonData },
            datatype: "text",
            success: function (response) {
                resp = response;
            },
            error: function (response) {
                alert("error: " + ctrl + " , " + funct + " , " + paramt);
            }
        });

        return resp;
    }
    if (devtype == "mobile1") {
        var resp = cSharp(paramt, 'post', ctrl + 'Controller/' + funct);

        return resp;
    }
}

function gb(obj, vr) {
    var ret = null;

    var a = vr.charAt(0).toUpperCase() + vr.slice(1);
    var b = vr.charAt(0).toLowerCase() + vr.slice(1);

    if (typeof (obj[a]) !== 'undefined') { ret = obj[a]; }
    if (typeof (obj[b]) !== 'undefined') { ret = obj[b]; }

    return ret;
}

/*========= Hybrid ==========*/
//--- @window actions 
var first_page = false;
var current_page = "";

function LoadP(page) {
    if (devtype == "web" || devtype == "desktop") {
        if (cs_html) {
            cs_html = false;
            var footer = "";
            //=== Load Page   
            $.get("/Content/Design/Pages/footer.html", function (data) {
                // Footer Content 
                //-- Get 
                var str = data;
                var body = str.substring(str.lastIndexOf("<body>") + 6, str.lastIndexOf("</body>"));
                body = body.replace(/href="/g, 'href="/Content/Design/Pages/');
                body = body.replace(/src="/g, 'src="/Content/Design/Pages/');
                //
                footer = body;
                Page();
            });
            function Page() {
                //=== Load Page 
                $.get("/Content/Design/Pages/" + page_name, function (data) {
                    //-- Clear  
                    $(".body").html("");
                    $("#pg_css").html("");
                    $("#pg_js").html("");
                    // Page Content 
                    //-- Get 
                    var str = data;
                    //:: 
                    var head = assets(str.substring(str.lastIndexOf("<head>") + 6, str.lastIndexOf("</head>")));
                    head = _Exclude(head, "<!--1.H_Map_API-->", "<!--2.H_Map_API-->");

                    $("#pg_css").html(head);
                    //:: 
                    var client = assets(str.substring(str.lastIndexOf("<body>") + 6, str.lastIndexOf("<main>")));
                    var body = assets(str.substring(str.lastIndexOf("<main>") + 6, str.lastIndexOf("</main>")));
                    body = body.replace("<!--@footer-->", footer);

                    $(".body").html(client + body);
                    //::   
                    var script = assets(str.substring(str.lastIndexOf("</main>") + 6, str.lastIndexOf("</body>")));
                    script = _Exclude(script, "<!--1.S_Map_API-->", "<!--2.S_Map_API-->");

                    $("#pg_js").html(script);
                    //--------------------------   
                }, 'html');
                //---
            }
        }
        else if (!cs_html) {
            //=== Redirect to Page
            var a = page.split(".")[0];
            a = a.charAt(0).toUpperCase() + a.slice(1);
            Win_Href(a);
            //---
        }
    }
    else {
        if (!first_page) {
            first_page = true;
        }
        else {
            cSharp(null, 'redirect', page);
        }
    }
};
function Redirect(page) {
    pause_sync = true;
    clearInterval(sync_id);

    var a = setInterval(function () {
        if (!wait) {
            clearInterval(a);
            Proceed();
        }
    }, 1000);

    function Proceed() {
        if (devtype == "web" || devtype == "desktop") {
            if (cs_html) {
                cs_html = false;
                var footer = "";
                //=== Load Page 
                $.get("/Content/Design/Pages/footer.html", function (data) {
                    // Footer Content 
                    //-- Get 
                    var str = data;
                    var body = str.substring(str.lastIndexOf("<body>") + 6, str.lastIndexOf("</body>"));
                    body = body.replace(/href="/g, 'href="/Content/Design/Pages/');
                    body = body.replace(/src="/g, 'src="/Content/Design/Pages/');
                    //
                    footer = body;
                    Page();
                });
                function Page() {
                    //=== Load Page 
                    $.get("/Content/Design/Pages/" + page_name, function (data) {
                        //-- Clear  
                        $(".body").html("");
                        $("#pg_css").html("");
                        $("#pg_js").html("");
                        // Page Content 
                        //-- Get 
                        var str = data;
                        //::
                        var head = assets(str.substring(str.lastIndexOf("<head>") + 6, str.lastIndexOf("</head>")));
                        head = _Exclude(head, "<!--1.H_Map_API-->", "<!--2.H_Map_API-->");

                        $("#pg_css").html(head);
                        //::
                        var client = assets(str.substring(str.lastIndexOf("<body>") + 6, str.lastIndexOf("<main>")));
                        var body = assets(str.substring(str.lastIndexOf("<main>") + 6, str.lastIndexOf("</main>")));
                        body = body.replace("<!--@footer-->", footer);

                        $(".body").html(client + body);
                        //:: 
                        var script = assets(str.substring(str.lastIndexOf("</main>") + 6, str.lastIndexOf("</body>")));
                        script = _Exclude(script, "<!--1.S_Map_API-->", "<!--2.S_Map_API-->");

                        $("#pg_js").html(script);
                        //--------------------------   
                    }, 'html');
                    //---
                }
            }
            else if (!cs_html) {
                //=== Redirect to Page
                var a = page.split(".")[0];
                a = a.charAt(0).toUpperCase() + a.slice(1);
                Win_Href(a);
                //---
            }
        }
        else {
            cSharp(null, 'redirect', page);
        }
    }
};
var cdn = [];
var inline = [];
function js() {
    var a = cdn;
    cdn = [];
    $.each(a, (index, item) => {
        $.getScript(item);
    });
    var b = inline;
    inline = [];
    $.each(b, (index, item) => {
        eval(item);
    });
}

function _Exclude(param1, param2, param3) {
    var p1 = param1.indexOf(param2, 0);
    while (p1 > 0) {
        p2 = param1.indexOf(param3);
        if (p2 > -1 && p2 > p1) {
            param1 = param1.substr(0, p1) + param1.substr(p2 + param2.length);
        }
        else {
            p1 = -1;
        }
    }

    return param1;
};
function assets(param) {
    var obj = $("<div/>").html(param);
    if (obj.find("script").length) {
        $(obj.find("script")).each(function () {
            var a = $(this).attr("src");
            var b = (typeof $(this).attr("src") === "undefined");
            if (!b) {
                if (a.indexOf("assets/") >= 0) {
                    $(this).attr("src", "/Content/Design/Pages/" + a);
                }
                else {
                    cdn.push(a);
                }
            }
            else {
                inline.push($(this).html());
            }
        });
    }
    if (obj.find("img").length) {
        $(obj.find("img")).each(function () {
            var a = $(this).attr("src");
            var b = (typeof $(this).attr("src") === "undefined");
            if (!b) {
                if (a.indexOf("assets/") >= 0) {
                    $(this).attr("src", "/Content/Design/Pages/" + a);
                }
                else {
                    cdn.push(a);
                }
            }
        });
    }
    if (obj.find("link").length) {
        $(obj.find("link")).each(function () {
            var a = $(this).attr("href");
            var b = (typeof $(this).attr("href") === "undefined");
            if (!b) {
                if (a.indexOf("assets/") >= 0) {
                    $(this).attr("href", "/Content/Design/Pages/" + a);
                }
                else {
                    cdn.push(a);
                }
            }
        });
    }

    return obj.html();
}
//--- @window events 
//:: Initial 
$(window).on("load", function () {
    hybrid_fit()
    layout_fit();
    $(".d_table").css("visibility", "visible");
});
//:: Event
$(window).resize(function () {
    hybrid_fit();
    layout_fit();
});
//--- @media events  
//:: hybrid
function hybrid_fit() {

    if (devtype == "mobile1") {
        $(".m_bnr").css("display", "none");
    }

    var width = $(window).innerWidth();

    if (Condition()) {
        $(".cnt").innerWidth((100 / 100) * width);
        $(".brdz").removeClass("browser");

        $(".cnt").removeClass("mobile");
        $(".cnt").addClass("mobile");
    }
    else {
        $(".cnt").innerWidth(380);
        $(".cnt").removeClass("mobile");

        $(".brdz").removeClass("browser");
        $(".brdz").addClass("browser");
    }
}
function Condition() {
    var width = $(window).innerWidth();
    var height = $(window).innerHeight();
    var mc = MobileCheck();


    if (mc == "Mobile") {

        if (width < height) {
            return (width < 751);
        }
        else {
            return (height < 751);
        }

    }
    else {
        if (devtype != null) {
            if (devtype == "web" || devtype == "desktop" || devtype == "mobile2") {
                return true;
            }
            if (devtype == "mobile1" ) {

                return (width < 751);
            }
        }
    }
}
function MobileCheck() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return "Mobile";
    }
    else {
        return "Web";
    }
}
function jsonUpper(param) {
    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    var res = param.replace(/\\/g, '');
    //-----------------
    var k1 = res.indexOf('{"') + 2;
    while (k1 !== 1) {
        var t = res.charAt(k1).toUpperCase();

        res = res.replaceAt(k1, t);
        k1 = res.indexOf('{"', k1 + 1) + 2;
    }
    //-----------------
    var k2 = res.indexOf(',"') + 2;
    while (k2 !== 1) {
        var t = res.charAt(k2).toUpperCase();

        res = res.replaceAt(k2, t);
        k2 = res.indexOf(',"', k2 + 1) + 2;
    }
    //-----------------
    return res;
}
function selectDynamic(arr, param, title) {
    var options = '<option value="0"> ' + title + '</option>';;
    $.each(arr, (index, item) => {
        options += '<option> ' + item + ' </option> ';
    });

    $("#" + param).find("select").html(options);
    selectTag();
};
//:: layout 
var f_pop = ""; var btst = "";
var a1 = $("#lmenu1_0").css("display");
var a2 = $("#lmenu2_0").css("display");

var preq = false;
function layout_fit() {
    if (devtype == "mobile1")
    {
        $(".m_bnr").css("display", "none");
        preq = true;
    }
    if (devtype != null)
    {
        if (devtype == "mobile1")
        {
            //--------- Preview Sections ---------
            //:: Left
            $(".web_menu").css("display", "none");

            $(".d-menu").css("display", "none");
            $(".w-menu").css("display", "block");
            //:: Right 
            $(".d2-menu").css("display", "none");
            $(".w2-menu").css("display", "none");
            //:: Top 
            $(".d3-menu").css("display", "none");
            $(".w3-menu").css("display", "none");
            $(".m3-menu").css("display", "block");
            //-------------------------------------

            $("#wb").attr("media", "not screen and ( max-width:9000px)");
            $("#mbl").attr("media", "screen and ( max-width:9000px)");


            $(".body").css("position", "fixed");
            $(".body").addClass("body_h");


            if ($(window).innerWidth() < 751)
            { 
                $(".body").css("position", "fixed");
                $(".mb_menu").css("position", "fixed");
                $(".mb_menu").css("top", $(".body").outerHeight());

                var a = $(".response_m").css("display");
                var b = $(".response_m2").css("display");

                if (a == "block" || b == "block")
                {
                    var m = ($(".hybrid").outerWidth() - $(".body").outerWidth()) / 2;

                    $(".body").css("height", $(window).outerHeight() - $(".response_m2").outerHeight());
                    $(".body").css("left", m); 
                }

                f_pop = "mobile";
                btst = "rem";
                fit($(".hybrid"));
            }
            else {
                $(".body").css("position", "unset");
                $(".mb_menu").css("position", "unset");
                $(".mb_menu").css("top", $(".body").outerHeight());

                var a = $(".main_m").css("display");
                var b = $(".main_m2").css("display");

                if (a == "flex" && b == "none")
                {

                    $(".body").css("height", $(window).outerHeight() );
                    $(".body").css("width", $(".c_page").outerWidth());
                }
                if (a == "none" && b == "block")
                { 
                    $(".body").css("height", $(window).outerHeight() );
                    $(".body").css("width", $(".c_page").outerWidth());
                } 
                f_pop = "mobile";
                btst = "rem";
                fit($(".body"));
            } 

            var h = (85/100)*$(".response_m2").outerHeight();

            $(".mb_menu").css("display", "block");
            $(".mb_menu").css("position", "fixed");
            $(".mb_menu").css("top", "0px");
            $(".mb_menu").css("height", h);
            $(".mb_menu").css("width", $(".body").outerWidth());

            $(".mb_menu2").css("display", "block");
            $(".mb_menu2").css("position", "fixed");
            $(".mb_menu2").css("top", $(window).outerHeight() - h);
            $(".mb_menu2").css("height", h);
            $(".mb_menu2").css("width", $(".body").outerWidth());


            $(".mbr_img").css("height", (90/100)*h); 

            $(".response_m").css("display", "none");
            $(".response_m2").css("display", "none");

            $("#lmenu1_0").css("display", "block");
            $("#lmenu2_0").css("display", "none");

        } 
        if (devtype == "web") {
            //--------- Preview Sections ---------
            //:: Left 
            $(".web_menu").css("display", "block");
            $(".d-menu").css("display", "none");
            $(".w-menu").css("display", "block");
            //:: Right 
            $(".d2-menu").css("display", "none");
            $(".w2-menu").css("display", "block");
            //:: Top 
            $(".d3-menu").css("display", "none");
            $(".w3-menu").css("display", "block");
            $(".m3-menu").css("display", "block");
            //-------------------------------------

            $("#wb").attr("media", "not screen and ( max-width:900px)");
            $("#mbl").attr("media", "screen and ( max-width:900px)");

            $("#wbp").attr("media", "not screen and ( max-width:900px)");
            $("#mblp").attr("media", "screen and ( max-width:900px)");

            $(".body").css("position", "fixed");
            $(".body").addClass("body_h");

            if ($(window).innerWidth() < 751) {
                $(".body").css("position", "fixed");

                var a = $(".response_m").css("display");
                var b = $(".response_m2").css("display");

                if (a == "block" || b == "block") {
                    var m = ($(".hybrid").outerWidth() - $(".body").outerWidth()) / 2;

                    $(".body").css("height", $(window).outerHeight() - $(".response_m2").outerHeight());
                    $(".body").css("top", $(".response_m2").outerHeight());
                    $(".body").css("left", m);
                }
                 
                f_pop = (projtype == "html") ? "mobile" : "web";
                btst = "rem";
                fit($(".hybrid"));
            }
            else {
                $(".body").css("position", "unset");

                var a = $(".main_m").css("display");
                var b = $(".main_m2").css("display");

                if (a == "flex" && b == "none") {
                    $(".body").css("height", $(window).outerHeight() - $(".main_m").outerHeight());
                    $(".body").css("width", $(".c_page").outerWidth());
                }
                if (a == "none" && b == "block") {
                    $(".body").css("height", $(window).outerHeight() - $(".main_m").outerHeight());
                    $(".body").css("width", $(".c_page").outerWidth());
                }

                f_pop = "web";
                btst = "add";
                fit($(".hybrid"));
            }

            $(".mb_menu").css("display", "none");
            if (preq)
            {
                $(".response_m").css("display", "block");
                $(".response_m2").css("display", "block");

                preq = false;
            }

            $("#lmenu1_0").css("display", "none");
            $("#lmenu2_0").css("display", "block");

        }
        if (devtype == "desktop") {
            //--------- Preview Sections ---------
            //:: Left 
            $(".web_menu").css("display", "none");
            $("#lmenu1_0").css("display", "none");
            $("#lmenu2_0").css("display", "none");

            $(".d-menu").css("display", "block");
            $(".w-menu").css("display", "none");
            //:: Right 
            $(".d2-menu").css("display", "block");
            $(".w2-menu").css("display", "none");

            var a = $(".ext_btn").html().trim();
            var b = $(".ext_btn2").html().trim();

            if ($(".rt_mn").css("display") == "none" && b != "") {
                $(".ext_btn2").html(a);
                $(".ext_btn").html(b);
            }
            if ($(".rt_mn").css("display") == "block" && a != "") {
                $(".ext_btn2").html(a);
                $(".ext_btn").html(b);
            }
            //:: Top 
            $(".d3-menu").css("display", "block");
            $(".m3-menu").css("display", "none");
            $(".w3-menu").css("display", "none");
            //-------------------------------------

            $("#wb").attr("media", "not screen and ( max-width:9000px)");
            $("#wb").attr("media", "screen and ( max-width:9000px)");

            $("#wbp").attr("media", "not screen and ( max-width:9000px)");
            $("#wbp").attr("media", "screen and ( max-width:9000px)");

            $(".body").css("position", "unset");
            $(".body").addClass("body_h");

            $(".body").css("height", $(window).outerHeight() - $(".main_m").outerHeight());
            $(".body").css("min-width", 0);
            $(".body").css("left", 0);

            f_pop = "desktop";
            btst = "add";
            fit($(".hybrid"));
             
        }
    }
}
function fit(cnt) {
    // Hybrid Interface 
    $(".brdz").css("min-height", $(window).outerHeight());
    $(".cnt2").css("min-height", (96 / 100) * $(window).outerHeight());
    $(".w-menu").css("min-height", $(window).outerHeight());

    $(".form").css("padding-bottom", (60 / 100) * $(window).outerHeight());
    // Web  Menu  
    $(".menu").css("min-height", (6 / 100) * $(window).outerHeight());
    // Mobile Menu  
    $(".response_m2").css("top", $(".response_m2").outerHeight());
    $(".response_m").css("top", 0);
    //=== Fixed 
    var fxd = $("*").filter(function () { return $(this).css("position") == "fixed" });

    var pos = cnt.offset();

    $.each(fxd, (index, item) => {
        $(item).css("left", pos.left);
        $(item).css("overflow-x", "hidden");

        if (!$(item).hasClass("except")) {
            $(item).css("width", cnt.outerWidth());
        }
        if ($(item).hasClass("stk_i")) {
            var w1 = cnt.outerWidth();
            var wi = $(item).innerWidth();

            $(item).css("margin-left", (w1 - wi) - 5);
        }
        if ($(item).hasClass("str_i")) {
            var w1 = cnt.outerWidth();
            var wi = $(item).innerWidth();

            alert($(item).offset().left + wi);

            $(item).css("margin-left", wi);
        }
    });
    //===== Pop Ups  
    if (f_pop == "mobile") {
        $(".ss0").css("width", cnt.outerWidth());
        $(".w-menu").css("width", "250px");

        $("#notif_1").css("width", (50 / 100) * cnt.outerWidth());
        $("#notif_1").css("margin-left", (45 / 100) * cnt.outerWidth());
        $("#notif_1").css("margin-top", $(".response_m2").outerHeight());
         
        $("#msg_1").css("width", (50 / 100) * cnt.outerWidth());
        $("#msg_1").css("margin-left", (45 / 100) * cnt.outerWidth());
        $("#msg_1").css("margin-top", $(".response_m2").outerHeight());

        $("#usr_1").css("width", (50 / 100) * cnt.outerWidth());
        $("#usr_1").css("margin-left", (45 / 100) * cnt.outerWidth());
        $("#usr_1").css("margin-top", $(".response_m2").outerHeight());
    }
    if (f_pop == "web") {
        $("#notif_1").css("width", (25 / 100) * cnt.outerWidth());
        $("#notif_1").css("margin-left", (70 / 100) * cnt.outerWidth());
        $("#notif_1").css("margin-top", $(".response_m2").outerHeight());

        $("#msg_1").css("width", (25 / 100) * cnt.outerWidth());
        $("#msg_1").css("margin-left", (70 / 100) * cnt.outerWidth());
        $("#msg_1").css("margin-top", $(".response_m2").outerHeight());

        $("#usr_1").css("width", (25 / 100) * cnt.outerWidth());
        $("#usr_1").css("margin-left", (70 / 100) * cnt.outerWidth());
        $("#usr_1").css("margin-top", $(".response_m2").outerHeight());
         
    }
    if (f_pop == "desktop") {
        $("#notif_1").css("width", (25 / 100) * cnt.outerWidth());
        $("#notif_1").css("margin-left", (70 / 100) * cnt.outerWidth());
        $("#notif_1").css("margin-top", $(".d3-menu").outerHeight());

        $("#msg_1").css("width", (25 / 100) * cnt.outerWidth());
        $("#msg_1").css("margin-left", (70 / 100) * cnt.outerWidth());
        $("#msg_1").css("margin-top", $(".d3-menu").outerHeight());

        $("#usr_1").css("width", (25 / 100) * cnt.outerWidth());
        $("#usr_1").css("margin-left", (70 / 100) * cnt.outerWidth());
        $("#usr_1").css("margin-top", $(".d3-menu").outerHeight());

    }
    if (btst == "rem") {
        // Remove Boot Strap
        $(".row").addClass("rowa");
        $(".rowa").removeClass("row");

        for (var k = 1; k < 13; k++) {
            var a = k.toString();

            $(".col-sm-" + a).addClass("col-sm-" + a + "a");
            $(".col-sm-" + a + "a").removeClass("col-sm-" + a);
        }
        //
    }
    if (btst == "add") {
        // Re-Add Boot Strap
        $(".rowa").addClass("row");
        $(".row").removeClass("rowa");

        for (var k = 1; k < 13; k++) {
            var a = k.toString();

            $(".col-sm-" + a + "a").addClass("col-sm-" + a);
            $(".col-sm-" + a).removeClass("col-sm-" + a + "a");
        }
        //
    }
    // 
}
// 
/*========= Interface ==========*/
//--- Left Menu 
function Collapse(param) {
    var target = $(param).attr("name");
    if ($("#" + target).css("display") == "none") {
        $("#" + target).css("display", "block");
    }
    else {
        $("#" + target).css("display", "none");
    }
    autoFit();
}
function Collapse2()
{  
    if ($(".lr3" ).css("display") == "none")
    { 
        $(".lr3").css("display", "flex");
    }
    else { 
        $(".lr3").css("display", "none");
    }
    autoFit();
}
function Expand(param) {
    var child = $(param).parent().find("div");

    if (child.css("display") == "none") {
        child.css("display", "block");
    }
    else {
        child.css("display", "none");
    }

};
function Expand2(param) {
    var O1 = $("." + param);
    O1.css("transition", "all " + "2.5s");

    if (O1.hasClass("open0")) {
        O1.innerHeight(0);
        O1.removeClass("open0");
        O1.find(".chv").css("display", "block");
        O1.find(".exp").css("background-color", "white");
    }
    else {
        O1.css("height", "inherit");
        O1.addClass("open0");
        O1.find(".chv").css("display", "none");
        O1.find(".exp").css("background-color", "#35455E");
    }

};
//--- Top Menu  
$("#lmenu1_1").css("min-height", $(window).innerHeight());
$("#lmenu2_1").css("min-height", $(window).innerHeight());
//--- Right Menu

/*=====*/