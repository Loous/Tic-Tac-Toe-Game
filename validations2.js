const d = document;

const $wrapper2 = d.querySelector(".wrapper"),
    $wrapper = d.querySelectorAll(".wrapper div"),
    $turn = d.querySelector(".turn");




/**This message appear if the player X or Y won */

function player(ply){

        
    let x = d.createElement("span"),
        button = d.createElement("button");

    x.classList.add("player");
    button.classList.add("buttonJ");
    
    x.textContent = `player ${ply} Won`;
    button.textContent = "Play Again";

    $wrapper2.appendChild(x);
    $wrapper2.appendChild(button);

    




}

/**This message appear if the end game */

function endGame(){
    let x = d.createElement("span"),
        button = d.createElement("button");

    x.classList.add("player");
    button.classList.add("buttonJ");
    
    x.textContent = `End of the Game`;
    button.textContent = "Play Again";

    $wrapper2.appendChild(x);
    $wrapper2.appendChild(button);






}

export {player, endGame}



