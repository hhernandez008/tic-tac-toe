/**
 * Created by Heather on 11/4/2015.
 */
var xTurn = false;
var gameSquares = [];


$(document).ready(function(){

    $(".center").on("click", ".target", function(){
        whoseTurn(this);
    });

// for loop for 3x3 game board
    var easy = 2;

    for (i = 0; i <= easy; i++) {
        gameSquares[i] = [];
        var mainChild_row = $("<div>", {
            class: "row"
        });
        for (j = 0; j <= easy; j++) {
            var mainChild_div = $("<div>", {
                class: "target"
            });
            var $animationContainer = $("<div>");
            var $animationContainer2 = $("<div>");
            $(mainChild_div).append($animationContainer).append($animationContainer2);
            $(mainChild_row).append(mainChild_div);
            gameSquares[i][j] = mainChild_div;

        }
        $(".center").append(mainChild_row);
    }
console.log(gameSquares.length);
// targets all class target elements and adds class col-xs-2 if gameSquares.length is equal to 3
    if (gameSquares.length = 3) {
        $(".target").addClass('col-xs-2');
    }

});//end ready function





function whoseTurn(self){

    if (xTurn) {
        $(self).text("playerX");
        xTurn = false;
    } else {
        $(self).text("playerO");
        xTurn = true;
    }
} //end whoseTurn

//reset the game board
function reset(){
    $(".target").children().removeClass("playerX playerO");


}