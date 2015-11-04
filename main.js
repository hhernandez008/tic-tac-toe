/**
 * Created by Heather on 11/4/2015.
 */
var xTurn = false;
var gameLevel = 3;
var gameSquares = [];

$(document).ready(function(){
    $(".modal").on("click", function(){

    });

    //create board (3x3 or 5x5)
    for(var i = 0; i < gameLevel; i++){
        gameSquares[i] = [];
        var $row = $("<div>").addClass("row");
        $(".center").append($row);
        for(var j = 0; j < gameLevel; j++){
            var $container = $("<div>").addClass("col-xs-2").attr("id",j);
            var $animationContainer = $("<div>").append("<div>");
            $container.append($animationContainer);
            $($row).append($container);
            gameSquares[i][j] = $container;
        }
    }




    $(".center").on("click",".row>div",function(){
        var self = this;
        var squareName = $(self);
        console.log(squareName);
        whoseTurn(self, squareName);
    });

    //turn off click handler if box filled



});//end ready function

function whoseTurn(self, square){
    if (xTurn) {
        $(self).text("X");
        xTurn = false;
    } else {
        $(self).text("O");
        xTurn = true;
    }
} //end whoseTurn