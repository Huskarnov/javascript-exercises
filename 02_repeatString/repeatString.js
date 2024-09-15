const string = "hello";
const repetitions = 10;

const repeatString = function(string, repetitions) {
    
        let stringSum = "";

        if (repetitions < 0){return 'ERROR';
            }else{

                    for (i = repetitions; i > 0; i--){
                        stringSum += string};
                    
                    
        return stringSum;
    }

};

repeatString(string, repetitions);

// Do not edit below this line
module.exports = repeatString;
