/**
 * Created by feng on 4/11/15.
 */

function reverse(array) {
    var l = array.length;
    var d = [];
    for (var i = l-1; i < l; i--) {
        d.push(array[i]);
    }

    console.log(d,'====');
    d.reverse();
    return d
}

var a = 'abcdefgh';
reverse(a);
console.log(a);
