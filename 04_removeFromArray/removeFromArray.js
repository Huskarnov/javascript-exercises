
const removeFromArray = function(array) {

        let originalArray = [...arguments[0]];
        let box = [];   

        if (arguments.length > 1){

            for (iargu = 1; iargu < arguments.length; iargu++){
                
                for (i = 0; i < 4; i++){
                    
                        if (originalArray[i] === arguments[iargu]){

                        delete originalArray[[i]];
                        
                    }
                    
                }

            }
            



            for (i = 0; i < originalArray.length; i++){
                if (originalArray[i]){
                    box.push(originalArray[i])
                }
                
            }

        }else{
            box = [...array];
        }

    return box;
};


// Do not edit below this line
module.exports = removeFromArray;
