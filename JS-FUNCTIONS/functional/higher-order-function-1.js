/**Functions that operate on onther functions,
 * either by taking them as arguments or by
 * returning them, are called higher-order functions.
 */

 function run(fn){
     return fn()
 }

 function sayHello(){
     console.log('Hello!')
 }

 run(sayHello)

 run(function(){
 console.log('run!!!')

 })

 const result = run(Math.random)
    console.log(result)
