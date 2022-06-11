
// Percentage Width -> Pixel Width

function outerWidth(param) {
    var s = true;
    var sp = [];
    var t = param;

    while (s) {
        if (t.css("width").indexOf("%") != -1) {
            var a = parseFloat(t.css("width").replace("%", "")) / 100.00;
            sp.push(a);

            t = t.parent();
        }
        else if (t.css("width").indexOf("px") != -1) {
            var a = parseFloat(t.css("width").replace("px", ""));
            sp.push(a)
            s = false;
        }
    }
    var prod = 1;
    for (var k = 0; k < sp.length; k++) {
        prod *= sp[k];
    }
    prod = (sp.length == 0) ? 0 : prod;

    return parseFloat(prod.toFixed(2));
}  
// Form Input Row + TextBox 
$(window).on("load", function ()
{
    row(); 
})
$(window).resize(function () { row(); })
function row() {
     
    var a = $("*").filter(function () { return $(this).hasClass("fctn3") });

    $.each(a, (idx0, itm0) =>
    { 
        var item = $(itm0);

        var w0 = (100 / item.children().length) + "%";
        var g = item.attr("name").split("_")[1] + "px";
        var t = item.attr("name").split("_")[2] + "px";

        item.css("padding-top", t);

        $.each(item.children(), (idx, itm1) =>
        {
            $(itm1).css("width", w0);
            $(itm1).css("padding-right", g); 
        });


        if (item.children().length > 1)
        {
            if (!Condition())
            {
                var w = item.attr("name").split("_")[0] + "%"; 

                item.css("display", "flex");
                item.css("width", w);
                item.css("margin", "auto");
                  
            }
            else
            {
                item.css("display", "block");
                var b = item.children();
                $.each(b, (idx1, itm1) =>
                {
                    $(itm1).css("width", "90%");
                    $(itm1).css("margin", "auto");
                    if (idx1 >= 1)
                    {
                        $(itm1).css("padding-top", "10px");
                    }
                }); 
            }
        }
        if (item.children().length == 1) {
            if (!Condition()) {

                var w = item.attr("name").split("_")[0] + "%";

                item.children().first().css("width", w);
            }
            else {
                item.children().first().css("width", "90%");
                item.css("margin", "auto");
            }
            item.children().first().css("margin", "auto");
              
        }
        //

        var b = item.find(".textbox");
        $.each(b, (idx1, itm1) =>
        {
            $(itm1).css("padding", "5px");

            var w = outerWidth(item.parent());
            var h = $(itm1).parent().outerHeight();
            var p = parseFloat("" + $(itm1).attr("name"));

            //alert(w);

            $(itm1).parent().css("display", "flex");
            $(itm1).css("width", (p / 100) * w + "px");

            var rows = parseInt(h / 24);
            $(itm1).prop("rows", rows);
        });
    });
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
