/**
 * Created by Heather on 11/4/2015.
 */
var xTurn = false;

$(document).ready(function(){
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