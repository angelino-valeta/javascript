var num = [5,6,8,3,12,9]

num.push(19) // add new element
num.sort() // order
var n9 = num.indexOf(9)
console.log(`number 9 its in the position ${n9}`)
console.log(`this arrys have ${num.lenght} elements` )
console.log(`the first element of array is ${num[0]}`)


for(var pos = 0; pos < num.length; pos++){
    
    console.log(`${pos} -- ${num[pos]}`)
    
}

//or

for(var pos in num){
    
    console.log(`the position ${pos} have the number ${num[pos]}`)

    
}