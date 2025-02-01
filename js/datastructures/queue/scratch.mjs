import   {Queue, reverseQueue, isPalindrome, CircularQueue, simulateQueue} from "./queue.mjs";


let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

console.log(q)
console.log(q.dequeue())
console.log(q.isEmpty())
console.log(q.peek())
console.log(q)
//console.log(reverseQueue(q))

let rqueue= [1,2,3,4,5,6]
console.log(reverseQueue(rqueue))

//console.log(isPalindrome('racecar'))
console.log(isPalindrome('aisha'))


