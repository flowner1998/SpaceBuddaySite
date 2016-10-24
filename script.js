/**
 * Created by Floris on 14-10-2016.
 */

/* Variables */
var links = ["#toTop","#navLink1","#navLink2","#navLink3","#navLink4","#navLink5"];
var activeLink = [false, false, false, false, false, false];

/* Functions */

function setLinks(current){
    for(var i = 0; i<=6; i++){
        activeLink[i] = false;
        if(i == current){
            activeLink[i] = true;
        }
    }
}
function setLinkColors()
{
    for(var i = 0; i <=6; i++) {
        if (activeLink[i]) {
            $(links[i]).css("color", "red");
        } else {
            $(links[i]).css("color", "black");
        }
    }
}

/* Script */
$(document).ready(function(){

    //Hover over navigation button
    $(".navButton").hover(function(){
        $(this).css("background-color", "lightgrey");
    },function(){
        $(this).css("background-color", "white");
    });

    // Click on navigation button
    /*  Scroll functions    */
    $("#toTop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
        setLinks(0);
        setLinkColors();
    });

    $("#navLink1").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top - 40
        }, 1200);
        setLinks(1);
        setLinkColors();
    });

    $("#navLink2").click(function() {
        $('html, body').animate({
            scrollTop: $("functie").offset().top - 40
        }, 1200);
        setLinks(2);
        setLinkColors();
    });
});

