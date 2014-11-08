/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");  // display to browser console "fight!!!" (starting)
    //player name
    var playerOneName = "Spiderman";  // Declares var. for player 1
    var playerTwoName = "Batman";      // Declares var. for player 2

    //player damage
    var player1Damage = 20;  //declares var. for damage deducted player1
    var player2Damage = 20;  //declares var. for damage deducted player2

    //player health
    var playerOneHealth = 100; // Beginning Health for player 1
    var playerTwoHealth = 100; // Beginning Health for player 2

    //initiate round
    var round=0; 			// declaring rounds start at 0

    function fight(){        //declaring the functions actions
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //alert for user input
        for (var i = 0; i < 10; i++) // declaring rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min); // setting math random formula for damage
            var minDamage1 = player1Damage * .5; //random health deduction for player 1
            var minDamage2 = player2Damage * .5; //random health deduction for player 2
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // kind of confused here
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // kind of confused here

            //inflict damage
            playerOneHealth-=f1; //declare result of health damage player 1
            playerTwoHealth-=f2; //declare result of health damage player 2

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //console log the results 

            //check for victor
            var result = winnerCheck(); //checks for winner
            console.log(result); //logs results to browser
            if (result==="no winner") // if no winner loops back around
            {
                round++;  //Declares round presently on
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //alerts round is over

            } else{ //declaring the "else" function
                alert(result);//alerts user results
                break;
            };

          };
    };

    function winnerCheck(){  //declaring function for winnercheck
        var result="no winner"; // declaring var result in no winner
        if (playerOneHealth<1 && playerTwoHealth<1) // declaring "if" function if no winner / tie
        {
            result = "You Both Die";  //declaring result and alerting 
        } else if(playerOneHealth<1){ //declaring else/if player1 health is less then player2 
            result =playerTwoName+" WINS!!!" //declaring Player 2 wins
        } else if (playerTwoHealth<1) //declaring if player two is less then 1 of player 1
        {
            result = playerOneName+" WINS!!!" //declaring player1 wins
        };
       return result; //result logged
    };

    /*******  The program gets started below *******/ 
    fight(); //function ends

})();