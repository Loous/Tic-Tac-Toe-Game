import { ValidateI } from "./validations.js";
import { ValidateXAxis } from "./validations.js";
import { ValidateYAxis } from "./validations.js";
import { ValidateDGAxis } from "./validations.js";
import { ValidateDGRAxis } from "./validations.js";
import { player } from "./validations2.js";
import { endGame } from "./validations2.js";


const d = document;

const $wrapper = d.querySelectorAll(".wrapper div"),
    $wrapper2 = d.querySelector(".wrapper"),
    $turn = d.querySelector(".turn");
    





function Game(){



    let c = 0,
        c2 = 0;

    const lista = [

        [],
        [],
        []



    ]

    let s = 0;

    


    for(let k = 0; k < $wrapper.length; k++){

        if(k === 3){
            s++


        }

        if(k > 3 && k % 3 === 0){
            s++


        }

        

        lista[s].push($wrapper[k])

    

    }


    let k2 = 0;


    for(let i = 0; i < $wrapper.length; i++){

        

        $wrapper[i].addEventListener("click", (e) => {

            if($wrapper[i].textContent.length > 0 || c2 === 1){
                return true;


            }else{
                

                k2++;
    
                let type = ""
    
                    
    
                if(c == 0){
                    $wrapper[i].textContent = "X";
                    type = "X";
    
            
            
                }else if(c == 1){
                    $wrapper[i].textContent = "O";
                    type = "O";
            
            
            
                }else if(c % 2 === 0){
                    $wrapper[i].textContent = "X";
                    type = "X";
                        
        
        
        
                }else if(c % 2 > 0){
                    $wrapper[i].textContent = "O";
                    type = "O";
        
        
                }
    
                ValidateI($wrapper[i], type, lista);
    
                if(ValidateXAxis(lista) === "X" || ValidateYAxis(lista) === "X" || ValidateDGAxis(lista) === "X" || ValidateDGRAxis(lista) === "X"){
                        
                    c2 = 1;
                    k2 = 0;
    
                    player("X");
    
                       
    
                }else if(ValidateXAxis(lista) === "O" || ValidateYAxis(lista) === "O" || ValidateDGAxis(lista) === "O" || ValidateDGRAxis(lista) === "O"){
                        
                    c2 = 1;
                    k2 = 0;
    
                    player("O");
    
    
                }else if(k2 === 9){
                    endGame();
    
                    c2 = 1;
    
    
    
                }else{
                        
                    if(type === "X"){
                        $turn.textContent = "Player Turn O";
                            
                            
                            
                            
                    }else if(type === "O"){
                        $turn.textContent = "Player Turn X";
                            
                            
                    }
    
                    c++;
    
                }
    
                    
                    
                if(c2 === 1){ /**We restart the game */

                    const $buttonJ = document.querySelector(".buttonJ");
                    const $player = document.querySelector(".player");

                    $buttonJ.addEventListener("click", (e) => {


                        for(let j = 0; j < $wrapper.length; j++){
                            $wrapper[j].textContent = "";
                        
                        
                        }
                        
                        for(let i = 0; i < lista.length; i++){
                                lista[i] = [];
                        
                            
                        }
                        
                                
                        let s = 0;
                        
                        for(let k = 0; k < $wrapper.length; k++){
                        
                            if(k === 3){
                                s++
                        
                        
                            }
                        
                            if(k > 3 && k % 3 === 0){
                                s++
                        
                        
                            }
                        
                                    
                        
                            lista[s].push($wrapper[k])
                        
                                
                        
                        }
                        
                        
                        
                        $wrapper2.removeChild($buttonJ);
                        $wrapper2.removeChild($player);
                        
                        $turn.textContent = "Player Turn X";

                        c = 0;
                        c2 = 0;
                        k2 = 0;
                        s = 0;
                        
                                
                                

                    })

                       
    
                }
            

            }    

    
        })



        /**Keyboard accesibility */
        

        $wrapper[i].addEventListener("keydown", (e) => {

            if(e.keyCode === 13){



                if($wrapper[i].textContent.length > 0 || c2 === 1){
                    return true;
                
    
    
                }else{

                    k2++;
    
                    let type = ""
        
                        
        
                    if(c == 0){
                        $wrapper[i].textContent = "X";
                        type = "X";
        
                
                
                    }else if(c == 1){
                        $wrapper[i].textContent = "O";
                        type = "O";
                
                
                
                    }else if(c % 2 === 0){
                        $wrapper[i].textContent = "X";
                        type = "X";
                            
            
            
            
                    }else if(c % 2 > 0){
                        $wrapper[i].textContent = "O";
                        type = "O";
            
            
                    }
        
                    ValidateI($wrapper[i], type, lista);
        
                    if(ValidateXAxis(lista) === "X" || ValidateYAxis(lista) === "X" || ValidateDGAxis(lista) === "X" || ValidateDGRAxis(lista) === "X"){
                            
                        c2 = 1;
                        k2 = 0;
        
                        player("X");
        
                           
        
                    }else if(ValidateXAxis(lista) === "O" || ValidateYAxis(lista) === "O" || ValidateDGAxis(lista) === "O" || ValidateDGRAxis(lista) === "O"){
                            
                        c2 = 1;
                        k2 = 0;
        
                        player("O");
        
        
                    }else if(k2 === 9){
                        endGame();
        
                        c2 = 1;
        
        
        
                    }else{
                            
                        if(type === "X"){
                            $turn.textContent = "Player Turn O";
                                
                                
                                
                                
                        }else if(type === "O"){
                            $turn.textContent = "Player Turn X";
                                
                                
                        }
        
                        c++;
        
                    }
        
                        
                        
                    if(c2 === 1){
                        const $buttonJ = document.querySelector(".buttonJ");
                        const $player = document.querySelector(".player");
    
                        $buttonJ.addEventListener("click", (e) => {
    
    
                            for(let j = 0; j < $wrapper.length; j++){
                                $wrapper[j].textContent = "";
                            
                            
                            }
                            
                            for(let i = 0; i < lista.length; i++){
                                    lista[i] = [];
                            
                                
                            }
                            
                                    
                            let s = 0;
                            
                            for(let k = 0; k < $wrapper.length; k++){
                            
                                if(k === 3){
                                    s++
                            
                            
                                }
                            
                                if(k > 3 && k % 3 === 0){
                                    s++
                            
                            
                                }
                            
                                        
                            
                                lista[s].push($wrapper[k])
                            
                                    
                            
                            }
                            
                            
                            
                            $wrapper2.removeChild($buttonJ);
                            $wrapper2.removeChild($player);
                            
                            $turn.textContent = "Player Turn X";
    
                            c = 0;
                            c2 = 0;
                            k2 = 0;
                            s = 0;
                            
                                    
                                    
    
                        })
    
                           
        
                    }
                

                   
    
                }

            }

            
    
    
        })


    
    }

   


}



d.addEventListener("DOMContentLoaded", () => {
    Game();




})












































































