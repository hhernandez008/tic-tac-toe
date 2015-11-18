/**
 * Created by team us on 11/4/2015.
 */

var easy = 3;
var hard = 5;
var currentGameLevel = easy;

var game = new tictactoeBoard(".center"); //Input where the game board be displayed?


$(document).ready(function () {

    //hide win modal
    $('#winner').modal('hide');

    //default game board size 3x3 (easy)
    game.setBoard(currentGameLevel);

    //click handler for ducks/tic-tac-toe squares
    $(".center").on("click", ".target", function () {
        var player = game.canIClick(this); //if the player can click the square return true
        if(player) {
            $(".playerOne").toggle();
            $(".playerTwo").toggle();
        }
    });


    //game board switch button
    $( ".switch" ).click(function() {
        $( ".switch" ).toggle();
    });

    $(".3x3").click(function() {
        $('.background-three').removeClass('hidden');
        $('.background-five').addClass('hidden');
        game.setBoard(easy);
        currentGameLevel = easy;
    });

    $(".5x5").click(function() {
        $('.background-three').addClass('hidden');
        $('.background-five').removeClass('hidden');
        game.setBoard(hard);
        currentGameLevel = hard;
    });

    //reset click handler
    $(".reset").click(function () {
        game.reset(currentGameLevel);
        $('.target').find('img').attr('src', 'images/goose-100.png');
    });

});//end ready function




