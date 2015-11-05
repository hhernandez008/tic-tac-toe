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
        $(".board-one").append(mainChild_row);
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


//game board switch button
    $( ".switch" ).click(function() {
        $( ".switch" ).toggle();
    });

    $("#3x3").click(function() {
        $('.background-three').removeClass('hidden');
        $('.background-five').addClass('hidden');
    });

    $("#5x5").click(function() {
        $('.background-three').addClass('hidden');
        $('.background-five').removeClass('hidden');
    });

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
        gameSquares[i][j]= 'X';
        win("X", gameSquares);
        xTurn = false;
    } else {
        $(self).text("playerO");
        gameSquares[i][j]= 'O';
        win("O", gameSquares);
        xTurn = true;
    }
}

/**
 * reset the game board, removes class playerX and playerO
 */
function reset() {
    $(".target").children().removeClass("playerX playerO");
}

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
    //check diagnol left to right
    for(var z = 0; z<arr.length;z++){
        console.log('i  ' + i);
        console.log(arr[z][i]);
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
    //check diagnol right to left
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


