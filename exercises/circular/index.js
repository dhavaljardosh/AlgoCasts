// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    if(list.size()==1){
        return false;
    }
    var prev = list.next;
    var next = list.next.next;
    var count = 0;
    // while(1){
    //     if(prev == next){
    //         return true;
    //     }
    //     else{
    //         count++;
    //         if(count==list.size()){
    //             return false;
    //         }

    //     }
    // }
}

module.exports = circular;
