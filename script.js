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
    $(".navButton").mouseenter(function(){
        $(this).effect("highlight",{color: 'OrangeRed'},400);
    });

    // Click on navigation button
    /*  Scroll functions    */
    $("#toTop").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
        setLinks(0);
        setLinkColors();
    });

    $("#navLink1").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#intro").offset().top - 40
        }, 1200);
        setLinks(1);
        setLinkColors();
    });

    $("#navLink2").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#functie").offset().top - 40
        }, 1200);
        setLinks(2);
        setLinkColors();
    });

    $("#navLink3").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#gebruik").offset().top - 40
        }, 1200);
        setLinks(3);
        setLinkColors();
    });

    $("#navLink4").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#media").offset().top - 40
        }, 1200);
        setLinks(4);
        setLinkColors();
    });

    $("#navLink5").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#functie").offset().top - 40
        }, 1200);
        setLinks(5);
        setLinkColors();
    });
});

