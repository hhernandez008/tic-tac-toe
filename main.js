/**
 * Created by team us on 11/4/2015.
 */


var xTurn = false;
var gameSquares = [];
var easy = 3;
var hard = 5;


$(document).ready(function () {

    //default game board size 3x3 (easy)
    setBoard(easy);

    //click handler for ducks/tic-tac-toe squares
    $(".center").on("click", ".target", function () {
        var rowIndex = $(this).attr("rowIndex");
        var squareIndex = $(this).attr("squareIndex");
        canIClick(this, rowIndex, squareIndex);
    });


    //game board switch button
    $( ".switch" ).click(function() {
        $( ".switch" ).toggle();
    });

    $("#3x3").click(function() {
        $('.background-three').removeClass('hidden');
        $('.background-five').addClass('hidden');
        setBoard(easy);
    });

    $("#5x5").click(function() {
        $('.background-three').addClass('hidden');
        $('.background-five').removeClass('hidden');
        setBoard(hard);
    });

    //reset click handler
    $(".reset").on("click", function () {
        reset();
    })

});//end ready function

/**
 * dynamically creates game board, adding properties respectively, and appending to .center
 * @type {number}
 */
function setBoard(gameLevel){
    clearBoard();
    for (i = 0; i < gameLevel; i++) {
        gameSquares[i] = [];
        var mainChild_row = $("<div>", {
            class: "row"
        });
        console.log(i + " row created");
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
} //end setBoard

/**
 * clear the game board for changing from 3x3  to 5x5
 */
function clearBoard(){
    $(".row").remove();
    gameSquares=[];
}

/**
 * determines if game square has been clicked, if it has then the function returns, if it hasn't been clicked then runs
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
 * determines if x's or o's turn. O's go first.
 * @param self
 * @param i
 * @param j
 */
function whoseTurn(self, i, j) {

    var $first = $(self).find('.div1');
    var $second = $(self).find('.div2');

    if (xTurn) {
        $first.addClass('one1 expand1');
        $second.addClass('one2 expand2');
        gameSquares[i][j]= 'X';
        win("X", gameSquares);
        xTurn = false;
    } else {
        $first.addClass('two expandCircle');
        gameSquares[i][j]= 'O';
        win("O", gameSquares);
        xTurn = true;
    }
}

/**
 * reset the game board, removes animation for X's & O's
 */
function reset() {
    $(".target").children().removeClass("playerX playerO");
    $('.row').addClass('reset-row');
    setTimeout(function(){
        $('.row').removeClass('reset-row');
    }, 2000);
}

/**
 * Determine if the current player has won the game
 * @param player
 * @param array
 * @returns {string}
 */
function win(player, array){
    var arr = array;
    var count = 0;
    var i = 0;
    //check horizontal
    for(var x = 0; x<arr.length; x++){
        for(var j = 0; j<arr.length; j++){
            if(arr[x][j]==player){
                count+=1;
            }
        }
        if(count===arr.length){
            return 'win';
        }else{
            count = 0;
        }
    }
    //check vertical
    while(i<arr.length){
        for(var y = 0; y<arr.length;y++){
            if(arr[y][i]==player){
                count+=1;
            }
        }
        if(count===arr.length){
            return 'win';
        }else{
            count = 0;
            i+=1;
        }
    }

    i=0;

    //check diagonal left to right
    for(var z = 0; z<arr.length;z++){

        if(arr[z][i]==player){
            count+=1;
        }
        i+=1;
    }
    if(count===arr.length){
        return 'win';
    }else{
        count = 0;
        i=arr.length-1; //make i=2 so we go backwards on the next check
    }

    //check diagonal right to left
    for(var k = 0; k<arr.length;k++){
        if(arr[k][i]==player){
            count+=1;
        }
        i-=1;
    }
    if(count===arr.length){
        return 'win';
    }else{
        count = 0;
        i=0;
    }

}




