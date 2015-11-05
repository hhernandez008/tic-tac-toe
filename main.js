/**
 * Created by team us on 11/4/2015.
 */


var xTurn = false;
var gameSquares = [];


$(document).ready(function () {
    $(".center").on("click", ".target", function () {
        var rowIndex = $(this).attr("rowIndex");
        var squareIndex = $(this).attr("squareIndex");
        canIClick(this, rowIndex, squareIndex);
    });

    /**
     * dynamically creates game board, adding properties respectively, and appending to .center
     * @type {number}
     */
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
    /**
     * targets all class target elements and adds class col-xs-2 if gameSquares.length is equal to 3, appends images/goose-100.png
     * to target. otherwise appends images/goose-60.png to target and adds class col-xs-1
     */
    if (gameSquares.length = 3) {
        var imageEasy = $("<img>", {
            src: 'images/goose-100.png'
        });
        $(".target").addClass('col-xs-2');
        $(".target").append(imageEasy);
    } else {
        var imageHard = $("<img>", {
            src: 'images/goose-60.png'
        });
        $(".target").addClass('col-xs-1');
        $(".target").append(imageHard);
    }

});//end ready function

/**
 * determines if game square has been clicked, if it has then the function returns, if it hasnt been clicked then runs
 * function whoseTurn
 * @param element
 * @param i
 * @param j
 */
function canIClick(element, i, j) {
    if (gameSquares[i][j] != '') {
        return;
    } else {
        whoseTurn(element, i, j);
    }
}

/**
 * determines if x's or o's turn
 * @param self
 * @param i
 * @param j
 */
function whoseTurn(self, i, j) {

    if (xTurn) {
        $(self).text("playerX");
        gameSquares[i][j] = 'X';
        xTurn = false;
    } else {
        $(self).text("playerO");
        gameSquares[i][j] = 'O';
        xTurn = true;
    }
}

/**
 * reset the game board, removes class playerX and playerO
 */

function reset() {
    $(".target").children().removeClass("playerX playerO");
}