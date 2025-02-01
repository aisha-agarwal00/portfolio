import { uniqueElements, union, intersection , difference, isSubset} from "./sets.mjs";
let arr=[1,1,2,3,4,1,2,6,5,6]
console.log(uniqueElements(arr))

let setA= new Set([1,2,3,4,5])
let setB= new Set([5,6,7,8,9])
console.log(union(setA, setB))
console.log(intersection(setA, setB))
console.log(difference(setA, setB))
console.log(isSubset(setA, setB))

let i= new Set([1,2,3,4])
let j= new Set([3,4])
console.log(isSubset(i, j))







