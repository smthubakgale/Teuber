
//------ Video
function closevid(param)
{
    $(".vdplyL").attr("src", "");
    slide_out2(param);
}
function closevid2()
{
    $(".vdplyL").attr("src", "");
    close2('#vdply_0');
}

function videoplayer(param)
{ 
    var state = true;
    if (typeof (projtype) == "undefined") {
        state = false;
    }
    else
    {
        if (projtype == "html")
        {
            state = false;
        }
    }
     
    if (!state)
    {
        var path = window.location.pathname;
        var a = path.lastIndexOf("/"); 
        path = path.substring(0, a);
        var url = "file://" + path + "/assets/docs/demo.mp4";
        $(".vdplyL").attr("src", url); 
    }
    else
    { 

      
    } 
    var a = $("<div/>");
    a.attr("name", "vdply_-down-1.5s");
    slide_in2(a);
}
function videoplayer2(param)
{
    var url = $(param).attr("name"); 
    $(".vdplyL").attr("src", url);
    var pop = $(param).attr("state");
    sho_mn(pop);
}
//----- PDF
function closepdf(param) {
    $(".pdfvwL").attr("src", "");
    slide_out2(param);
}
function closepdf2() {
    $(".pdfvwL").attr("src", "");
    close2('#pdfvw_0');
}

function pdfview(param) {
    var state = true;
    if (typeof (projtype) == "undefined") {
        state = false;
    }
    else {
        if (projtype == "html") {
            state = false;
        }
    }

    if (!state) {
        var path = window.location.pathname;
        var a = path.lastIndexOf("/");
        path = path.substring(0, a);
        var url = "file://" + path + "/assets/docs/demo.pdf";
        $(".pdfvwL").attr("src", url);
    }
    else {


    }
    var a = $("<div/>");
    a.attr("name", "pdfvw_-down-1.5s");
    slide_in2(a);
}
// Word 
function docx_download(param) {
    var state = true;
    if (typeof (projtype) == "undefined") {
        state = false;
    }
    else {
        if (projtype == "html") {
            state = false;
        }
    }

    if (!state) {
        var path = window.location.pathname;
        var a = path.lastIndexOf("/");
        path = path.substring(0, a);
        var url = "file://" + path + "/assets/docs/demo.docx";
        $(".pdfvwL").attr("src", url);
        setTimeout(function () { $(".pdfvwL").attr("src", ""); },2000)
        
    }
    else {


    } 
}
// Power-Point
function pptx_download(param) {
    var state = true;
    if (typeof (projtype) == "undefined") {
        state = false;
    }
    else {
        if (projtype == "html") {
            state = false;
        }
    }

    if (!state) {
        var path = window.location.pathname;
        var a = path.lastIndexOf("/");
        path = path.substring(0, a);
        var url = "file://" + path + "/assets/docs/demo.pptx";
        $(".pdfvwL").attr("src", url);
        setTimeout(function () { $(".pdfvwL").attr("src", ""); },2000)
        
    }
    else {


    } 
}
// Excel
function xls_download(param) {
    var state = true;
    if (typeof (projtype) == "undefined") {
        state = false;
    }
    else {
        if (projtype == "html") {
            state = false;
        }
    }

    if (!state) {
        var path = window.location.pathname;
        var a = path.lastIndexOf("/");
        path = path.substring(0, a);
        var url = "file://" + path + "/assets/docs/demo.xls";
        $(".pdfvwL").attr("src", url);
        setTimeout(function () { $(".pdfvwL").attr("src", ""); },2000)
        
    }
    else {


    } 
}
//