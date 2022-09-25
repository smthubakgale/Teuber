//alert("Desktop App");

device("mobile1");
API();
$(window).resize(function () {
    layout_fit();
    hybrid_fit();
});