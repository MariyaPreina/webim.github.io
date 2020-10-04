$(function () {

    /* Fixed header*/
    let header = $("#header");
    let header2 = $("#header-sm");
    let webim = $("#webim");
    let webimH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        webimH = webim.height();
        scrollPos = $(this).scrollTop();

        if(scrollPos > webimH) {
            header.addClass("fixed");
            header2.addClass("fixed");
        } else {
            header.removeClass("fixed");
            header2.removeClass("fixed");
        }
    });


    /* Nav Toggle */
    let nav = $("#navigation");
    let navToggle = $("#navToggle")

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


});