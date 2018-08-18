// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    add(num){
        this.s1.push(num);
        console.log(this.s1);
    }

    peek(){
        var data = null;
        while(this.s1.peek()){
            this.s2.push(this.s1.pop())
        }
        data = this.s2.data[this.s2.data.length-1]
        while(this.s2.peek()){
            this.s1.push(this.s2.pop())
        }
        return data;
    }

    remove(){
        var length = this.s1.data.length-1;
        for(var i = 0; i<=length; i++){
            this.s2.push(this.s1.pop())
        }
        var record = this.s2.pop();
        for(var i = 0; i<=length-1; i++){
            this.s1.push(this.s2.pop())
        }
        
        return record;
    }
}

module.exports = Queue;
