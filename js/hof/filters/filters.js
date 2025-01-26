const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 1. Filter even numbers from an array
 */console.log(nums.filter(a=> a%2==0))

/**
 * 2. Filter numbers greater than certain value
 * filtering number greater than 5
 */ console.log(nums.filter(a=> a>5))

/**
 * 3. Filter Strings Longer Than 5 Characters
 */const names=["aisha", "aryan","abhishek","sam","sameera"]
 console.log(names.filter(a => a.length>5))

/**
 * 4. Filter Objects Based on a Property Value
 */const events=[{eventType:"click",eventEntity:"article",},{eventType:"view",eventEntity:"project"},{eventType:"click",eventEntity:"talk"}]
 //filter out evenType: views
 console.log(events.filter(a=>a.eventType=="view"))

//**
//5. Filter Out Invalid Email Addresses
// const emails=["agarwal@gmail.com","dharma","gandhi@gmail.com","rashika"]
// console.log(emails.filter(a=>(if "@gmail.com" include a)))