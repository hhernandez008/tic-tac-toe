var tictactoeBoard = function(gameContainer){

    var self = this;
    var xTurn = false;

    self.gameSquares = [];

    /**
     * determines if game square has been clicked, if it has then the function returns, if it hasn't been clicked then runs
     * function whoseTurn
     * @param element
     */
    self.canIClick = function (element) {
        var rowIndex = $(element).attr("rowIndex");
        var squareIndex = $(element).attr("squareIndex");
        if (self.gameSquares[rowIndex][squareIndex] == '') {
            self.whoseTurn(element);
        }
    };

    /**
     * determines if x's or o's turn. O's start first game, subsequent games started by loser of previous game.
     * @param element
     */
    self.whoseTurn = function (element) {
        var rowIndex = $(element).attr("rowIndex");
        var squareIndex = $(element).attr("squareIndex");

        var $first = $(element).find('.div1');
        var $second = $(element).find('.div2');

        if (xTurn) {
            $('audio').attr('autoplay', 'autoplay').trigger('load');
            $first.addClass('one1 expand1');
            $second.addClass('one2 expand2');
            self.gameSquares[rowIndex][squareIndex] = 'X';
            self.win("X");
            xTurn = false;
        } else {
            $('audio').attr('autoplay', 'autoplay').trigger('load');
            $first.addClass('two expandCircle');
            self.gameSquares[rowIndex][squareIndex] = 'O';
            self.win("O");
            xTurn = true;
        }
    };


    /**
     * dynamically creates game board, adding properties respectively, and appending to .center
     * @type {number}
     */
    self.setBoard = function(gameLevel){
        self.clearBoard();
        for (i = 0; i < gameLevel; i++) {
            self.gameSquares[i] = [];
            var mainChild_row = $("<div>", {
                class: "row"
            });
            //console.log(i + " row created");
            for (j = 0; j < gameLevel; j++) {
                var mainChild_div = $("<div>", {
                    class: "target",
                    rowIndex: i,
                    squareIndex: j
                });
                var $animationContainer = $("<div>").addClass('div1');
                var $animationContainer2 = $("<div>").addClass('div2');
                $(mainChild_div).append($animationContainer).append($animationContainer2);
                $(mainChild_row).append(mainChild_div);
                self.gameSquares[i][j] = '';
            }
            $(gameContainer).append(mainChild_row);
        }

        /*targets all elements just created with class target and adds class col-xs-2 if gameSquares.length is equal
        to 3, appends images/goose-100.png to target. otherwise appends images/goose-60.png to target and adds class
         col-xs-1*/
        if (self.gameSquares.length == 3) {
            var imageEasy = $("<img>", {
                src: 'images/goose-100.png'
            });
            //$(".target").addClass('col-xs-2');
            $(".target").append(imageEasy);
        } else {
            var imageHard = $("<img>", {
                src: 'images/goose-60.png'
            });
            //$(".target").addClass('col-xs-1');
            $(".target").append(imageHard);
        }
    }; //end setBoard

    /**
     * clear the game board for changing from 3x3  to 5x5
     */
    self.clearBoard = function(){
        $(".row").remove();
        self.gameSquares=[];
    };



    /**
     * Determine if the current player has won the game, display a modal show whose won
     * @param player
     * @returns {string}
     */
    self.win = function(player){
        var $modal = $(".modal-body");
        var count = 0;

        var gameLevel = self.gameSquares.length;
        //check horizontal
        for(var x = 0; x<gameLevel; x++){
            for(var j = 0; j<gameLevel; j++){
                if(self.gameSquares[x][j]==player){
                    count+=1;
                }
            }
            if(count===gameLevel){
                $modal.text("Congratulations! " + player + "'s Win.");
                $('#winner').modal('show');
                self.resetBoardArray(gameLevel);
                return 'win';
            }else{
                count = 0;
            }
        }
        //check vertical
        var i = 0;
        while(i<gameLevel){
            for(var y = 0; y<gameLevel;y++){
                if(self.gameSquares[y][i]==player){
                    count+=1;
                }
            }
            if(count===gameLevel){
                $modal.text("Congratulations! " + player + "'s Win.");
                $('#winner').modal('show');
                self.resetBoardArray(gameLevel);
                return 'win';
            }else{
                count = 0;
                i+=1;
            }
        }

        i=0;

        //check diagonal left to right
        for(var z = 0; z<gameLevel;z++){

            if(self.gameSquares[z][i]==player){
                count+=1;
            }
            i+=1;
        }
        if(count===gameLevel){
            $modal.text("Congratulations! " + player + "'s Win.");
            $('#winner').modal('show');
            self.resetBoardArray(gameLevel);
            return 'win';
        }else{
            count = 0;
            i=gameLevel-1; //make i=2 so we go backwards on the next check
        }

        //check diagonal right to left
        for(var k = 0; k<gameLevel;k++){
            if(self.gameSquares[k][i]==player){
                count+=1;
            }
            i-=1;
        }
        if(count===gameLevel){
            $modal.text("Congratulations! " + player + "'s Win.");
            $('#winner').modal('show');
            self.resetBoardArray(gameLevel);
            return 'win';
        }else{
            count = 0;
            i=0;
        }
        var catsCounter = 0;
        //cats game //check each row horizontally, each index of each row.. if one turns out to be a string, it's not a cats game.. so return.. else.. cats game!
        for(var p = 0; p<gameLevel; p++){
            for(var m = 0; m<gameLevel; m++){
                if(self.gameSquares[p][m]==='X' || self.gameSquares[p][m]==='O'){
                    catsCounter += 1;
                }
                if( catsCounter === (gameLevel*gameLevel) ){
                    console.log('cats');
                    $('.target').find('img').attr('src', 'images/cat.png');
                    $modal.text("Cats Game :P  Meow Meow");
                    $('#winner').modal('show');
                }
            }
        }


    }; //end win function


    /**
     * reset the game board, remove animation for X's & O's
     */
    self.reset = function(gameLevel) {
        $(".target").children().removeClass("one1 expand1 one2 expand2 two expandCircle");
        $('.row').addClass('reset-row');
        setTimeout(function(){
            $('.row').removeClass('reset-row');
        }, 2000);
        self.resetBoardArray(gameLevel);
    };

    /**
     * Reset the array used to determine a win.
     * @param gameLevel
     */
    self.resetBoardArray = function(gameLevel){
        self.gameSquares = [];
        for (i = 0; i < gameLevel; i++) {
            self.gameSquares[i] = [];
            for (j = 0; j < gameLevel; j++) {
                self.gameSquares[i][j] = '';
            }
        }
    };

};

