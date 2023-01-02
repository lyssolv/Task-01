/* // API:
new IntBuilder(int) // constructor takes starting integer, if not passed starts with 0;
.plus(...n)         // take infinite number of integers and sum all with stored value;
.minus(...n)        // take infinite number of integers and subtract from stored value; 
.multiply(n)        // multiply param n on stored value;
.divide(n)          // leaves integer part of division stored value on n; 
.mod(n)             // leaves remainder of the division stored value with on n;
.get()              // returns stored value;

random(from, to)   // static method; from, to: integer; values limits the range of random values; */


class BaseClassES {
    constructor(int) {
        this.int = int || 0;
    }

    plus (...n) {
        this.int = n.reduce((sum,arg)=> sum+arg,this.int);
        return this;
      }

    minus(...n) {
        this.int = n.reduce((sum,arg)=> sum - arg,this.int);
        return this;
    }

    multiply(n) {
        this.int *= n;
        return this;
    }

    divide(n) {
        this.int = (Math.trunc(this.int/n));
        return this;
    }

    mod(n) {
        this.int = this.int % n;
        return this;
    }

    get() { 
        return this.int; 
    }

    static random(from, to) {
        return Math.round((Math.random() * (to - from)) + from);
    }
  }


  class IntBuilder extends BaseClassES {

  }


  let intBuilder = new IntBuilder(7);
  console.log(intBuilder.mod(3));
  console.log(IntBuilder.random(10, 100));


/* let intBuilder = new IntBuilder(10); // 10;
intBuilder
  .plus(2, 3, 2)                     // 17;
  .minus(1, 2)                       // 14;
  .multiply(2)                       // 28;
  .divide(4)                         // 7;
  .mod(3)                            // 1;
  .get();                            // -> 1; */