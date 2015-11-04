/**
 * Created by Heather on 11/4/2015.
 */
var xTurn = false;
var gameLevel = null;

$(document).ready(function(){
    $(".modal").on("click", function(){

    });

    //create board (3x3 or 5x5)
    var $container = $("<div>").addClass("col-xs-2");
    var $animationContainer = $("<div>").append("<div>");
    $container.append($animationContainer);
    var $row = $("<div>").addClass("row");






    $(".tictac").on("click",".row>div",function(){
        var self = this;
        var squareName = $(self).attr("square");
        console.log(squareName);
        whoseTurn(self, squareName);
    });

    //turn off click handler if box filled



});//end ready function

function whoseTurn(self, square){
    emptySquares(square);
    if (xTurn) {
        $(self).text("X");
        xTurn = false;
    } else {
        $(self).text("O");
        xTurn = true;
    }
} //end whoseTurn