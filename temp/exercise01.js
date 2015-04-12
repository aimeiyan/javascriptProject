/**
 * Created by feng on 4/11/15.
 */
function IsPrimeNumber(number){
    if(number < 2){
        return false
    }
    for(var i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false
        }
    }
    return true;
}

判断类型和边界条件