function ValidateI(item, type, lista){

    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista[i].length; j++){
            if(lista[i][j] === item){
                lista[i][j] = type;

                

            }

        }

    }



}




/**We validate the X axis */


function ValidateXAxis(lista){

    let x = 0,
        o = 0;



    for(let i = 0; i < lista.length; i++){
        
        for(let j = 0; j < lista[i].length; j++){

            

            if(lista[i][j] === "X"){
                x++;


            }else if(lista[i][j] === "O"){
                o++;



            }


            if(j === 2){
                if(x === 3){
                    return "X";
                    




                }else{
                    x = 0;



                }

                if(o === 3){
                    return "O";
                    



                }else{
                    o = 0;



                }


            }

            
            

        }

    }


    


}


/**We validate the Y axis */


function ValidateYAxis(lista){
    let x = 0,
        o = 0;
        

    for(let j = 0; j < lista.length; j++){
        for(let i = 0; i < lista.length; i++){
            
            if(lista[i][j] === "X"){
                x++;



            }else if(lista[i][j] === "O"){
                o++;


            }

            if(i === 2){
                if(x === 3){
                    return "X";
                    

                }else{
                    x = 0;

                }

                if(o === 3){
                    return "O";
                    


                }else{
                    o = 0;

                }

            }

            

        }




    }




}



/**We validate the first Diagonal axis */


function ValidateDGAxis(lista){
    let x = 0,
        o = 0;
        



    for(let i = 0; i < lista.length; i++){
        if(lista[i][i] === "X"){
            x++;


        }else if(lista[i][i] === "O"){
            o++;



        }


        if(x === 3){
            return "X";
            



        }else if(o === 3){
            return "O";
            


        }
     

    }



}

/**We validate the second Diagonal axis */

function ValidateDGRAxis(lista){

    let x = 0,
        o = 0,
        c = 2;
        


    for(let i = 0; i < lista.length; i++){
        if(lista[i][c] === "X"){
            x++;


        }else if(lista[i][c] === "O"){
            o++;



        }

        if(x === 3){
            return "X";
            


        }else if(o === 3){
            return "O";
            


        }

        c--;

     

    }


}

export {ValidateI, ValidateXAxis, ValidateYAxis, ValidateDGAxis, ValidateDGRAxis}






