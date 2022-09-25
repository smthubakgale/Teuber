/*
    Thubakgale MS - 201701870
    27-10-2021
 */
// Slide 1
function slide_in(param) {
    var target = $(param).attr("name");

    document.getElementById(target + "B").style.top = "0";
    document.getElementById(target + "A").style.top = "0";
}
function slide_out(param) {
    var target = $(param).attr("name");

    document.getElementById(target + "B").style.top = "-100%";
    document.getElementById(target + "A").style.top = "-100%";
}
// Slide 2
function slide_out2(param) {
    var childs = $(param).children().toArray();
    // Is Overlay Area
    $.each(childs, (index, item) => {
        // Exit if child
        $(item).click(function () {
            return false;
        });
        Proceed();
    });
    // Close
    function Proceed() {
        var target = $(param).attr("name");

        var Ovr = $("#" + target + "0");
        var O1 = $("#" + target + "1");

        Ovr.css("display", "none");

        O1.css("transition", "none");
    }
    //
};
function slide_in2(param) {
    var target = $(param).attr("name").split("-");
    var name = target[0];
    var dir = target[1];
    var speed = target[2];

    var Ovr = $("#" + name + "0");
    var O1 = $("#" + name + "1");
    var O2 = $("#" + name + "2");

    var p1 = 0, w1 = 0, h1 = 0;

    if (dir == "pop") {
        Ovr.css("background-color", "rgba(0, 0, 0, 0.7)");
    }
    if (dir == "up_s") {
        dir = "up";
        Ovr.css("background-color", "rgba(0, 0, 0, 0.7)");
    }
    if (dir == "down_s") {
        dir = "down";
        Ovr.css("background-color", "rgba(0, 0, 0, 0.7)");
    }
    if (dir == "right_s") {
        dir = "right";
        Ovr.css("background-color", "rgba(0, 0, 0, 0.7)");
    }
    if (dir == "left_s") {
        dir = "left";
        Ovr.css("background-color", "rgba(0, 0, 0, 0.7)");
    }


    Ovr.css("display", "block");

    if (dir == "left") {
        p1 = O1.css("margin-left").replace("px", "");
        O1.css("margin-left", "100%");
    }
    if (dir == "right") {
        p1 = O1.css("margin-left").replace("px", "");

        w1 = O1.width();

        O1.css("margin-left", "-" + w1 + "px");
    }
    if (dir == "top") {
        p1 = O1.css("margin-top").replace("px", "");

        h1 = O1.height();

        O1.css("margin-top", "-" + h1 + "px");
    }
    if (dir == "down") {
        p1 = O1.css("margin-top").replace("px", "");

        O1.css("margin-top", "100%");
    }

    setTimeout(function () {
        if (dir == "right") {
            O1.css("transition", "all " + speed);

            O1.css("margin-left", p1 + "px");
        }
        if (dir == "left") {
            O1.css("transition", "all " + speed);

            O1.css("margin-left", p1 + "px");
        }
        if (dir == "top") {
            O1.css("transition", "all " + speed);

            O1.css("margin-top", p1 + "px");
        }

        if (dir == "down") {
            O1.css("transition", "all " + speed);
            O2.css("transition", "all " + speed);

            O1.css("margin-top", p1 + "px");
        }

    }, 500);
}

close3();
$(window).on("load", function () { close3(); });
function close3() {
    $.each($(".ss0").toArray(), (index, item) => {
        var b = $("<div/>");
        b.attr("name", $(item).attr("name"));

        slide_in2(b);
        slide_out2($("#" + b.attr("name") + "0"));
    });

};
function close2(param) {

    $("body").css("overflow", "visible");

    var target = $(param).attr("name");

    var Ovr = $("#" + target + "0");
    var O1 = $("#" + target + "1");

    Ovr.css("display", "none");

    O1.css("transition", "none");
}
// Togg
function Togg(param) {
    var target = $(param).attr("name").split("-");
    var id = target[0]
    var dir = target[1];
    var speed = target[2];

    var O1 = $("#" + id);
    var p1 = 0, w1 = 0, h1 = 0;

    if (O1.css("display") == "none") {
        if (dir == "left") {
            p1 = O1.css("margin-left").replace("px", "");
            O1.css("margin-left", "100%");
        }
        if (dir == "right") {
            p1 = O1.css("margin-left").replace("px", "");

            w1 = O1.width();

            O1.css("margin-left", "-" + w1 + "px");
        }
        if (dir == "top") {
            p1 = O1.css("top").replace("px", "");

            h1 = O1.height();

            O1.css("top", "-" + h1 + "px");
        }
        if (dir == "down") {
            p1 = O1.css("top").replace("px", "");

            h1 = O1.height();

            O1.css("top", (h1 + h1) + "px");
        }
        //
        O1.css("display", "block")
        //
        setTimeout(function () {
            if (dir == "right") {
                O1.css("transition", "all " + speed);

                O1.css("margin-left", p1 + "px");
            }
            if (dir == "left") {
                O1.css("transition", "all " + speed);

                O1.css("margin-left", p1 + "px");
            }
            if (dir == "top") {
                O1.css("transition", "all " + speed);

                O1.css("top", p1 + "px");
            }

            if (dir == "down") {
                O1.css("transition", "all " + speed);

                O1.css("top", p1 + "px");
            }

        }, 500);
    }
    else {
        O1.css("display", "none");
        O1.css("transition", "none");
    }
};
// Filter  
close4();
$(window).on("load", function () { close4(); });
function close4() {
    showfilter($(".ff1"));
    hidefilter($(".ff0"));
}
function showfilter(param) {
    if ($(param).hasClass("open")) {
        $(param).removeClass("open");

        $(param).css("box-shadow", "2px 0 10px rgba(0,0,0,0.7)");
        $("#" + $(param).attr("name")).parent().css("display", "none");
    }
    else {
        $(param).addClass("open");

        $(param).css("box-shadow", "none");
        $("#" + $(param).attr("name")).parent().css("display", "block");
    }
}
function hidefilter(param) {
    var childs = $(param).children().toArray();
    // Is Overlay Area
    $.each(childs, (index, item) => {
        // Exit if child
        $(item).click(function () {
            return false;
        });
        Proceed();
    });
    // Close
    function Proceed() {
        $("#" + $(param).attr("name")).removeClass("open");
        $("#" + $(param).attr("name")).css("box-shadow", "2px 0 10px rgba(0,0,0,0.7)");
        $(param).parent().css("display", "none");
    }
    //
};
// -------------------------------------

function get_form(param) {
    $("body").css("overflow", "hidden");

    slide_in2(param);
}
function close_form(param) {
    $("body").css("overflow-y", "visible");

    slide_out2(param);
}