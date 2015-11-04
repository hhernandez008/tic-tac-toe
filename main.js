/**
 * Created by Heather on 11/4/2015.
 */
var xTurn = false;

$(document).ready(function () {
    $(".center").on("click", ".row>div", function () {
        var self = this;
        var squareName = $(self).attr("square");
        console.log(squareName);
        whoseTurn(self, squareName);
    });

    //turn off click handler if box filled

// for loop for 3x3 game board
    var easy = 2;
    var hard = 4;
    for (i = 0; i <= easy; i++) {
        var mainChild_row = $("<div>", {
            class: ""
        });
        for (j = 0; j <= easy; j++) {
            var mainChild_div = $("<div>", {
                class: ""
            });
            $(mainChild_row).append(mainChild_div);

        }
        $(".center").append(mainChild_row);
    }


});//end ready function

function whoseTurn(self, square) {
    emptySquares(square);
    if (xTurn) {
        $(self).text("X");
        xTurn = false;
    } else {
        $(self).text("O");
        xTurn = true;
    }
} //end whoseTurn