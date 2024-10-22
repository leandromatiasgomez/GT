//1-En este ejercicio deberás pensar qué devuelve cada Función sin ejecutarla en la consola:
//  function test1(x, y) {
//      return y - x
//  }
//  test1(10, 40)
//Rta: devuelve 30
//  function test2(x, y) {
//      return x * 2
//      console.log(x)
//      return x / 2
//  }
// test2(10)
//Rta: devuelve 20

//Matemática Simple
//Variables
// let n1 = 5
// let n2 = 1
// //1-Triplicador
// function triplicador(n){
//     return n*3
// }
// console.log("The triple of "+n1+" is: "+triplicador(n1))
// //2-Multiplicador
// function multiplicador(n1, n2){
//     return n1*n2;
// }
// console.log("The product of "+n1+" and "+n2+" is: "+multiplicador(n1, n2))
// //3-Division
// function division(n1, n2){
//     return n1/n2
// }    
// console.log("The result of divide by "+n1+" and "+n2+" is: "+division(n1, n2))
// //4-Resto
// function resto(n1, n2){
//     return n1%n2
// }  
// console.log("The rest of divide by "+n1+" and "+n2+" is: "+resto(n1, n2))
// //5-Matemática
// function mat(n){
//     n = triplicador(n)
//     n = multiplicador(n, 12)
//     n = division(n, 12)
//     n = resto(n, 3)
//     return n
// }
// console.log("The result: "+mat(n1))

//contarDeA_n
// function contarDeA_n(contar_de_a, contar_hasta){
//     let contador = 1;
//     if(contar_de_a <= contar_hasta){
//         for(let i = contar_de_a; i < contar_hasta; i++){
//             contador++;
//         }
//         return console.log("The number of numbers from "+contar_de_a+" to "+contar_hasta+" is: "+contador)
//     }
//     else{
//         return console.log("Error")
//     }
// }
// contarDeA_n(2, 10)

// //FizzBuzz2
// function fizzBuzz2(word1, word2){
//     let line = prompt("Enter up to what number you want FizzBuzz2 count: ")
//     let num = parseInt(line)
//     line = prompt("Enter the first multiple: ")
//     let fizzNum = parseInt(line)
//     line = prompt("Enter the second multiple: ")
//     let buzzNum = parseInt(line)

//     for(let i = 0; i < num; i++){
//         if(i%(fizzNum*buzzNum)==0){
//             console.log(word1 + " " + word2);
//         }
//         else if(i%fizzNum == 0){
//             console.log(word1)
//         }
//         else if(i%buzzNum == 0){
//             console.log(word2)
//         }
//     }
// }
// fizzBuzz2("hello", "world");