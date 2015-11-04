/**
 * Created by Heather on 11/4/2015.
 */
var xTurn = false;
var gameSquares = [];


$(document).ready(function(){
    $(".modal").on("click", function(){

    });


    $(".center").on("click",".row>div",function(){

        var self = this;
        var squareName = $(self);
        console.log(squareName);
        whoseTurn(self, squareName);
    });

    //turn off click handler if box filled

// for loop for 3x3 game board
    var easy = 2;
    var hard = 4;
    for (i = 0; i <= easy; i++) {
        gameSquares[i] = [];
        var mainChild_row = $("<div>", {
            class: "row"
        });
        for (j = 0; j <= easy; j++) {
            var mainChild_div = $("<div>", {
                class: "target"
            });
            var $animationContainer = $("<div>").append("<div>");
            $(mainChild_div).append($animationContainer);
            $(mainChild_row).append(mainChild_div);
            gameSquares[i][j] = mainChild_div;

        }
        $(".center").append(mainChild_row);
    }
if

});//end ready function


function whoseTurn(self){

    if (xTurn) {
        $(self).addClass("playerX");
        xTurn = false;
    } else {
        $(self).addClass("playerO");
        xTurn = true;
    }
} //end whoseTurn