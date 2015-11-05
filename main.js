/**
 * Created by Heather on 11/4/2015.
 */
var xTurn = false;
var gameSquares = [];


$(document).ready(function () {
    $(".center").on("click", ".target", function () {
        var rowIndex = $(this).attr("rowIndex");
        var squareIndex = $(this).attr("squareIndex");
        canIClick(this, rowIndex, squareIndex);
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
                class: "target",
                rowIndex: i,
                squareIndex: j
            });
            var $animationContainer = $("<div>");
            var $animationContainer2 = $("<div>");
            $(mainChild_div).append($animationContainer).append($animationContainer2);
            $(mainChild_row).append(mainChild_div);
            gameSquares[i][j] = '';
        }
        $(".center").append(mainChild_row);
    }
    console.log(gameSquares.length);
// targets all class target elements and adds class col-xs-2 if gameSquares.length is equal to 3
    if (gameSquares.length = 3) {
        $(".target").addClass('col-xs-2');
    }
});
//end ready function

/**
 * this function checks whether a square has been clicked, if it has then the function returns, if it hasn't then
 * function whoseTurn runs.
 * @param element
 * @param i
 * @param j
 */
function canIClick(element, i, j) {
    if (gameSquares[i][j] != '') {
        return;
    } else {
        whoseTurn(element,i, j);
    }
}
/**
 * this function resets the board, removing the classes playerX and playerO
 */
function reset() {
    $(".target").children().removeClass("playerX playerO");
}

function whoseTurn(self,i, j) {

    if (xTurn) {
        $(self).text("playerX");
        gameSquares[i][j]= 'X';
        xTurn = false;
    } else {
        $(self).text("playerO");
        gameSquares[i][j]= 'O';
        xTurn = true;
    }
} //end whoseTurn

