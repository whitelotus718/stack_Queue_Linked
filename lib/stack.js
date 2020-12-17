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
            newTop.next = oldTop;
            this.top = newTop;
        }
        this.length++
        return this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        } else {
            let oldTop = this.top;
            let newTop = oldTop.next;
            this.top = newTop;
            this.length--;
            oldTop.next = null;
            return oldTop.value;
        }
    }
}

// const JS = new Stack
// JS.push(1)
// JS.push(3)
// JS.push(4)
// console.log(JS)
// console.log(JS.pop(), "ln 70")
// console.log(JS, "ln 71")
// JS.pop()
// console.log(JS, "ln 72")
// console.log(JS.pop(), JS, "ln 73")
// console.log(JS.push(2), JS)

// // console.log(JS.size())

exports.Node = Node;
exports.Stack = Stack;
