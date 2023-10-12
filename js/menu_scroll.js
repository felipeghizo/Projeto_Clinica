$(function(){
    $("li a").click(function(){
        var href = $(this).attr("href");
        var OffsetTop = $(href).offset().top;
        OffsetTop -= 50;

        $("html, body").animate({"scrollTop": OffsetTop}, 1000);

        return false;
    });
});