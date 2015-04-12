/**
 * Created by feng on 4/11/15.
 */


//二叉树递归
function convert(from, to){
    //判断两个字符串是否相同
    if(from.split('').sort().join('') != to.split('').sort().join('')){
        return [];
    }

    var res = [];

    function proceed(stack, pos, prefix, ops){
        //找到一个解
        if(prefix === to){
            res.push(ops);
            return;
        }

        //不能pop
        if(to.indexOf(prefix) != 0){
            return;
        }

        if(pos < from.length){
            //先尝试push进堆栈
            proceed(stack+from.charAt(pos), pos+1, prefix, ops+'i');
        }
        if(stack.length){
            //再尝试pop出来
            proceed(stack.slice(0,-1), pos, prefix+stack.slice(-1), ops+'o');
        }
    }

    proceed('', 0, '', '');

    return res;
}

document.write(convert("abacd", "abcda") + "<br/>");
document.write(convert("aadaa", "aaaad") + "<br/>");
document.write(convert("abc", "abd"));