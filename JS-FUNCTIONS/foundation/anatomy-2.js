// Anonymous Function

(function(a,b,c){
    return a = b+ c
})





// Function expression

const sum = function (a, b){
    return a + b
}
const result = sum(7,59)
console.log(sum(7,59))

const x = sum
console.log(x(10,30))
