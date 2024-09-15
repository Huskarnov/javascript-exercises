const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) || isNaN(a) || isNaN(b)){ return 'ERROR'

    } else{
            let sum = 0;

            let first = a;
            let last = b;

            if (a > b){
                first = b;
                last = a;
            }

            for(i = first; i <= last; i++){

                sum = sum + i;
            }

            return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
