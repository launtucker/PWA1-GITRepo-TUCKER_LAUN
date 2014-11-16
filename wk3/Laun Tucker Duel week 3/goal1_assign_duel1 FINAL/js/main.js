/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 3  Laun Tucker
 Part 3/3 of series
 */

// self-executing function
(function(){

    console.log("FIGHT!!!");  // display to browser console "fight!!!" (starting)

    //Defining dom pieces;
    var fighter1_txt = document.querySelector("kabal").querySelector("p");
    var fighter2_txt = document.querySelector("kratos").querySelector("p");
    var round_txt = document.querySelector("h5");

    console.log()

    //click event
    button.addEventListener("click", fight, false);

    //Array of objects for 2 fighters
    var fighters = [
        {
            name:"Spider Man",
            damage:20,
            health:100
        },
        {
            name:"Bat Man",
            damage:20,
            health:100
        }];
    var round = 1;


    //INITIALIZE DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start";
    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

    //Create fight function
    function fight(){
        //alert fighters
        fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

        //inflict damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);

        //check for winner
        var result = winnerCheck();
        console.log(results);

        round_txt.innerHTML = "ROUND #" + " Results";
        round++;
        if(result === "no winner")
        {
            fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

        } else{
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            //disable the button
            button.removeEventListener("click", fight, false);
            //button.disabled = true

            //button.onclick = "return false";

            document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
        }

    }
}
    function winnerCheck(){  //declaring function for winnercheck
        var result="no winner"; // declaring var result in no winner
        if (fighters[0].health < 1 && fighters[1].health < 1) // declaring "if" function if no winner / tie
        {
            result = "You Both Die - GAME OVER";  //declaring result and alerting
        } else if(fighters[0].health < 1){ //declaring else/if player1 health is less then player2
            result =fighters[1].name + " WINS!!!" //declaring Player 2 wins
        } else if (fighters[1].health < 1) //declaring if player two is less then 1 of player 1
        {
            result = fighters[0].name + " WINS!!!" //declaring player1 wins
        };
       return result; //result logged
    };

    /*******  The program gets started below *******/ 
    fight(); //function ends

})();