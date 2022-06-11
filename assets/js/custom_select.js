/*
// Onchange Example
function sel_1(val) {
    alert(val);
}
// Link Style Example
style_select("selc_1",
    {
        "select_tag_ref": ".zzz",
        "selected_ref": ".zzz",
        "selected_text_ref": ".zzz",
        "selected_icon_cover_ref": ".zzz",
        "selected_icon_ref": ".zzz",
        "options_ref": ".zzz",
        "option_ref": ".zzz",
    });
*/
// Methods
function style_select(id, tags) {
     
    var tag = "#ref" + id;

    var a = setInterval(function ()
    {
        if ($(tag).length != 0)
        { 
            clearInterval(a);

            if (typeof (tags.select_tag_ref) != "undefined") {
                $(tag).find(".select_tag_ref").addClass(tags.select_tag_ref);
            }
            if (typeof (tags.selected_ref) != "undefined") {
                $(tag).find(".selected_ref").addClass(tags.selected_ref);
            }
            if (typeof (tags.selected_text_ref) != "undefined") {
                $(tag).find(".selected_text_ref").addClass(tags.selected_text_ref);
            }
            if (typeof (tags.selected_icon_cover_ref) != "undefined") {
                $(tag).find(".selected_icon_cover_ref").addClass(tags.selected_icon_cover_ref);
            }
            if (typeof (tags.selected_icon_ref) != "undefined") {
                $(tag).find(".selected_icon_ref").addClass(tags.selected_icon_ref);
            }
            if (typeof (tags.options_ref) != "undefined") {
                $(tag).find(".options_ref").addClass(tags.options_ref);
            }
            if (typeof (tags.option_ref) != "undefined") {
                $(tag).find(".option_ref").addClass(tags.option_ref);
            }

        }
    }, 250);

}
$(window).on("load", function () { create_select() });
function create_select() {
    var a = $("*").filter(function () { return $(this).hasClass("select_tag") });
    $.each(a, (idx0, itm0) => {
        var id = $(itm0).prop("id");
        var opts = [];
        var obj = $(itm0).find("option");
        for (var k = 0; k < obj.length; k++) {
            opts.push(obj[k].text);
        }
         
        var template = '<div class="select_tag_ref">'
            + '<div class="selected_ref" name="sel_1" state="on" onclick="expsel(this)">'
            + '<div class="selected_text_ref">'
            + 'Selected Option'
            + '</div>'
            + '<div class="selected_icon_cover_ref" style="">'
            + '<span class="selected_icon_ref fa fa-caret-down"></span>'
            + '</div>'
            + '</div>'
            + '<div class="options_ref" value="#" onchange="change_ref(this)" id="sel_1">'
            + '<div class="option_ref" onclick="opt_click(this)">'
            + 'Item 1'
            + '</div>'
            + '<div class="option_ref" onclick="opt_click(this)">'
            + 'Item 2'
            + '</div>'
            + '<div class="option_ref" onclick="opt_click(this)">'
            + 'Item 3'
            + '</div>'
            + '</div>'
            + '</div>';
        var tm = $("<div/>");
        tm.attr("id", "ref" + id);
        tm.html(template);
        tm.insertBefore("#" + id);
        $("#" + id).remove();
        // Update
        var tag = "#ref" + id;
        $(tag).find(".selected_ref").attr("name", id);
        $(tag).find(".options_ref").attr("id", id);
        if (opts.length != 0) {
            $(tag).find(".selected_text_ref").html(opts[0]);
            var opt = $(tag).clone().find(".option_ref").first();
            var fin = $("<div/>");

            for (var k = 1; k < opts.length; k++) {
                var a = opt.clone();
                a.html(opts[k]);
                fin.append(a);
            }
            $(tag).find(".options_ref").html(fin.html());
        }
        //
    });
}
function opt_click(param) {
    var opt = $(param).html().trim();
    $(param).parent().parent().find(".selected_text_ref").html(opt);
    expsel($(param).parent().parent().find(".selected_ref"));

    var func = $(param).parent().prop("id");
    $(param).parent().attr("value", opt);
    window[func](opt);
}
function expsel(param) {
    var n = $(param).attr("name");
    var s = $(param).attr("state");
    var h = $(param).parent().find("#" + n).outerHeight();
     

    if (s == "on")
    {
        if (false)
        {
            $(param).parent().find(".selected_ref").css("margin-bottom", h+ "px");
            $(param).parent().find(".options_ref").css("margin-top", - h+ "px");
        }

        $(param).parent().find("#" + n).css("display", "block");
        $(param).attr("state", "off");

    }
    else {
        $(param).parent().find(".selected_ref").css("margin-bottom", "0px");
        $(param).parent().find(".options_ref").css("margin-top", "0px");

        $(param).parent().find("#" + n).css("display", "none");
        $(param).attr("state", "on");
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
        return (width < 751);
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
// 