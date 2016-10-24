/**
 * Created by Floris on 14-10-2016.
 */
$(document).ready(function(){

    //Hover over navigation button
    $(".navButton").hover(function(){
        $(this).css("background-color", "#8C8C8C");
    },function(){
        $(this).css("background-color", "#ffffff");
    });

    // Click on navigation button
    /*  Scroll functions    */
    $("#toTop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });
    $("#navLink1").click(function() {
        $('html, body').animate({
            scrollTop: $("#content1").offset().top - 40
        }, 1200);
    });
    $("#navLink2").click(function() {
        $('html, body').animate({
            scrollTop: $("#content2").offset().top - 40
        }, 1200);
    });
});
