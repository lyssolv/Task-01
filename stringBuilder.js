/* // API:

new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
plus(...str)             // takes infinite number of strings and concat with stored string;
minus(n)                 // cut last n chars from stored string;
multiply(int)            // repeat stored strings n times; Prohibited to use String.prototype.repeat();
divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace(); 
sub(from, n)             // leaves substring starting from and with length n;
get()                    // returns stored value;
 */



function BaseClassES5(str) {
    this.str = str;
    this.plus = function (...str) {
        this.str = [this.str, ...arguments].join('');
        return this;
    }

    this.minus = function(n) {
        this.str = this.str.slice(0, - n);
        return this;
    }

    this.multiply = function(n) {
        let str1 = '';
        if(this.str) {
            for (let i = 0; i < n; i++) {
                str1 += this.str;
            }
        }
        return this;
    }

    this.divide = function(n) {
        this.str = this.str.substring(0,Math.floor(this.str.length / n));
        return this;
    }

    this.sub = function(from, n) {
        this.str = this.str.slice(from, n + 1);
        return this.str;
    }

    this.get = function () {
        return this.str;
    }
}


function StringBuilder(str) {
    BaseClassES5.call(this, str);
}


let strBuilder = new StringBuilder('Hello');
console.log(strBuilder.sub(0, 1));


/* // EXAMPLE:
let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e'; */
 