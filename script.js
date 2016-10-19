/**
 * Created by Floris on 14-10-2016.
 */
$(document).ready(function(){

    //Hover over navigation button
    $(".navButton").hover(function(){
        $(this).css("background-color", "#8C8C8C");
    },function(){
        $(this).css("background-color", "#1c6ca6");
    });

    // Click on navigation button
    $(".navButton").mousedown(function(){
        $(this).css("border-color", "#ff3333");
    });
    $(".navButton").mouseup(function(){
        $(this).css("border-color", "#ffffff");
    });
    $("#navLink1").click(function() {
        $('html, body').animate({
            scrollTop: $("#content1").offset().top
        }, 1200);
    });
});