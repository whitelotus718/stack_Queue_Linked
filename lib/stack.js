// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    push(value){
        if(!this.top){
            this.top = new Node(value)
        } else {
            let oldTop = this.top
            let newTop = new Node(value)
            oldTop.next = newTop;
            this.top = newTop;
        }
        return value;
    }
}

const JS = new Stack
JS.push(1)
console.log(JS)
console.log(JS.push(2), JS)

// console.log(JS.size())

exports.Node = Node;
exports.Stack = Stack;
