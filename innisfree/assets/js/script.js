$(document).ready(function(){
    $(".pc-lnb-menu").click(function(){
        $(".pc-lnb-open").fadeToggle(400);
        $('body').toggleClass('band');
    });
});