/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1  Laun Tucker
 Part 2/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");  // display to browser console "fight!!!" (starting)
    //player name
    var fighter1 =["Spider_man",20,100];  // Declares array. for fighter 1
    var fighter2= ["Bat_man",20,100];      // Declares array for fight 2

    var round=1; 			// declaring rounds start at 0


    // Fighting Function
    function fight(){        //declaring the functions actions

        console. log("FIGHT!!");   // Console log "Fight"

        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);  //alert for user input

        for (var i=0; i<10;i++) // declaring rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min); // setting math random formula for damage
            var minDamage1 = fighter1[1] * .5; //random health deduction for player 1
            var minDamage2 = fighter2[1] * .5; //random health deduction for player 2
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); // kind of confused here
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); // kind of confused here

            //inflict damage
            fighter1[2]-=f1; //declare result of health damage player 1
            fighter2[2]-=f2; //declare result of health damage player 2

            console.log(fighter1[2]+" "+fighter2[2]); //console log the results

            //check for victor
            var result = winnerCheck(); //checks for winner
            console.log(result); //logs results to browser
            if (result==="no winner") // if no winner loops back around
            {
                round++;  //Declares round presently on
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]); //alerts round is over

            } else{ //declaring the "else" function
                alert(result);//alerts user results
                break;
            };

          };
    };

    function winnerCheck(){  //declaring function for winnercheck
        var result="no winner"; // declaring var result in no winner
        if (fighter1[2]<1 && fighter2[2]<1) // declaring "if" function if no winner / tie
        {
            result = "You Both Die";  //declaring result and alerting 
        } else if(fighter1[2]<1){ //declaring else/if player1 health is less then player2
            result =fighter2[0]+" WINS!!!" //declaring Player 2 wins
        } else if (fighter2[2]<1) //declaring if player two is less then 1 of player 1
        {
            result = fighter1[0]+" WINS!!!" //declaring player1 wins
        };
       return result; //result logged
    };

    /*******  The program gets started below *******/ 
    fight(); //function ends

})();