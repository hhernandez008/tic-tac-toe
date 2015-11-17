var player = function(boolean) {
    var self = this;
    var xTurn = boolean;

    /**
     * determines if game square has been clicked, if it has then the function returns, if it hasn't been clicked then runs
     * function whoseTurn
     * @param element
     * @param i
     * @param j
     */
    self.canIClick = function (element) {
        var rowIndex = $(element).attr("rowIndex");
        var squareIndex = $(element).attr("squareIndex");
        if (board.gameSquares[i][j] != '') {
            return;
        } else {
            self.whoseTurn(element, i, j);
        }
    };

    /**
     * determines if x's or o's turn. O's go first.
     * @param element
     * @param i
     * @param j
     */
    self.whoseTurn = function (element, i, j) {

        var $first = $(element).find('.div1');
        var $second = $(element).find('.div2');

        if (xTurn) {
            $('#gun-fire').attr('autoplay', 'autoplay').trigger('load');
            $('#quack').attr('autoplay', 'autoplay').trigger('load');
            $first.addClass('one1 expand1');
            $second.addClass('one2 expand2');
            self.gameSquares[i][j] = 'X';
            win("X", self.gameSquares);
            xTurn = false;
        } else {
            $('#gun-fire').attr('autoplay', 'autoplay').trigger('load');
            $('#quack').attr('autoplay', 'autoplay').trigger('load');
            $first.addClass('two expandCircle');
            self.gameSquares[i][j] = 'O';
            self.win("O", self.gameSquares);
            xTurn = true;
        }
    };
    return xTurn;
};