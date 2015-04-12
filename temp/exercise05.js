/**
 * Created by feng on 4/11/15.
 */

(function(){
    'use strict'
    class Point {

        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '('+this.x+', '+this.y+')';
        }

    }


//结合照片整理
    function add(x,y){
        return x+y;
    }

    function multicast(fn){
        return function(list){
            var args = [].slice.call(arguments)
            var ret = []
            for(var i=0;i<arrx.length;i++){
                ret.push(fn(arrx[i],y))
            }
            return ret
        }
    }

    add = multicast(add)
    document.write(add([1,2,3],4))

    var els = document.getElementsByTagName('li');
    function setColor(el, color){
        el.style.color = color;
    }

    var setColors = multicast(setColor);
    setColors(els, 'red');
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

//    first
    function registerCustomEvent(type, options){
        var evt = document.createEvent('Events');
        evt.initEvent(type, false, false);
        for(var i in options){
            evt[i] = options[i];
        }
        window.dispatchEvent(evt);
    }

    function watch(func){
        return function(){
            var evtArgs = {
                func: func,
                args: [].slice.apply(arguments),
                thisObj: this
            };

            registerCustomEvent('beforecall', evtArgs);
            evtArgs.returnValues = [func.apply(this, evtArgs.args)];
            registerCustomEvent('aftercall', evtArgs);

            return evtArgs.returnValues[0];
        }
    }

    function add(x, y){
        return x + y;
    }

    add = watch(add);

    window.addEventListener('beforecall', function(evt){
        console.log(evt);
        //evt.args[0] *= 2;
    });

    window.addEventListener('aftercall', function(evt){
        console.log(evt);
        //evt.returnValues[0] = evt.thisObj;
    });

    console.log(add.apply({}, [2, 3]));
//seconde
    function registerCustomEvent(type, options){
        var evt = document.createEvent('Events');
        evt.initEvent(type, false, false);
        for(var i in options){
            evt[i] = options[i];
        }
        window.dispatchEvent(evt);
    }

    function watch(func){
        return function(){
            var evtArgs = {
                func: func,
                args: [].slice.apply(arguments),
                thisObj: this
            };

            registerCustomEvent('beforecall', evtArgs);
            evtArgs.returnValues = [func.apply(this, evtArgs.args)];
            registerCustomEvent('aftercall', evtArgs);

            return evtArgs.returnValues[0];
        }
    }

    function add(x, y){
        return x + y;
    }

    add = watch(add);

    window.addEventListener('beforecall', function(evt){
        console.log(evt);
        //evt.args[0] *= 2;
    });

    window.addEventListener('aftercall', function(evt){
        console.log(evt);
        this.value = evt.returnValues[0];
        evt.returnValues[0] = this;
    });

    var o = {};
    o.add = add;
    console.log(o.add(2, 3).add(4, 5).value);