// //Ejercicio 1
// let uno = "tres"
// objeto_demo['dos']
// // Rta: deveria devolver 2.
// objeto_demo[uno]
// //Rta: deveria devolver 3

// //Ejercicio 2
// capitales['lugar']
// //Rta: no devuelve nada. 
// capitales.lugar
// //Rta: no devuelve nada. 
// capitales[lugar]
// //Rta: delvuelve Montevideo.
// capitales['Argentina']
// //Rta: devuelve Buenos Aires
// capitales.Argentina
// //Rta: devuelve Buenos Aires
// capitales[Argentina]
// //Rta: no devuelve nada.

// //Registro
// let User = {
//     nameUser: "Lean",
//     age: 18,
//     address: "Calle falsa 123",
//     birthdate: "03/05/2006",
//     password: "123"
// }

// //Mi auto
// let myCar = {
//     brand: "Toyota",
//     age: 3, 
//     new: false,
//     model: "2.0",
//     price: 20000,
//     color: "red",
//     setModel: function(model){
//         this.model=model
//     },
//     setPrice: function(price){
//         this.price=price
//     },
//     setColor: function(color){
//         this.color = color
//     }
// }
// let propertyKey = "model"
// let anotherPropertyKey = "price"
// let nextProperty = "color"
// myCar.setColor(nextProperty)
// for(let property in myCar){
//     console.log(property + ": " + myCar[property])
// }
// myCar[propertyKey]
// //Rta: devuelve 2.0
// myCar["model"]
// //Rta: devuelve 2.0
// myCar[nextProperty]
// //Rta: devuelve el valor de la propiedad color
// myCar["color"]
// //Rta: devuelve el valor de la propiedad color

// //Aumentar la nota 
// class Student{
//     constructor(name, note){
//         this.name=name,
//         this.note=note
//     }
//     incraseNote(){
//         if(this.note > 5){
//             this.note = this.note + 2;
//         }
//         if(this.note > 10){
//             this.note = 10;
//         }
//     }
//     info(){
//         return'Name: '+this.name+', Note: '+this.note+''
//     }
// }
// let students = [
//     new Student("Juan", 6),
//     new Student("Mario", 8),
//     new Student("Julia", 10),
//     new Student("Sofia", 2)
// ];
// console.log("After:")
// students.forEach(student => {
//     console.log(student.info())
// });
// console.log("Before:")
// students.forEach(student => {
//     student.incraseNote()
//     console.log(student.info())
// });

// //Base de datos de peliculas
// class Movie{
//     constructor(youAreSee, title, rating){
//         this.youAreSee = youAreSee,
//         this.title = title,
//         this.rating = rating
//     }
//     info(){
//         return ''+this.youAreSee+' '+this.title+' - '+this.rating+ ' stars'
//     }
// }
// let movies = [
//     new Movie("Viste", "Busqueda implacable", 5),
//     new Movie("No viste", "Norbit", 3),
//     new Movie("Viste", "Mini espías", 2),
//     new Movie("No viste", "La vida es bella", 5)
// ]
// movies.forEach(movie => {
//     console.log(movie.info())
// });

// //Números duplicados
// let numbers = [2, 4, 5, 37, 0]
// let duplicateNumbers = {
//     n: [],
//     setN: function(num){
//         this.n.push(num*2)
//     },
//     info: function(i){
//         console.log("El valor del indice "+i+" es: "+this.n[i])
//     }
// }
// for(let i = 0; i < numbers.length; i++){
//     duplicateNumbers.setN(numbers[i])
//     duplicateNumbers.info(i)
// }

// //Desafio + 27
// let people = [{ name: 'Ana', age: '28'},
//     { name: 'María', age: '24'}, { name: 'José', age: '31'}
// ]
// let peopleOver27 = people.filter(people => people.age > 27)
// console.log(peopleOver27)

// //Camino al oscar
// //1
// let actorsVowels = []
// let mainActors = ['Tom Hanks', 'Jhonny Deep', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher']
// function startWithVowels(name){
//     const vowels = ['A', 'E', 'I', 'O', 'U']
//     return vowels.includes(name.charAt(0).toUpperCase())
// }
// for(let i = 0; i < mainActors.length; i++){
//     let partName = mainActors[i].split(' ') 
//     if(partName.some(partName => startWithVowels(partName))){
//         actorsVowels.push(mainActors[i])
//     }
// }
// console.log(actorsVowels)
// //2
// let movies = []
// let mainActorsByFilm = {
//     "Titanic" : "Leonardo DiCaprio",
//     "El Padrino" : "AL Pacino",
//     "Matrix" : "Keanu Reeves",
//     "Iron Man" : "Robert Downey Jr",
//     "Soy Leyenda" : "Will Smith",
//     "Bastardos Sin Gloria" : "Brad Pitt" 
// }
// let values = Object.values(mainActorsByFilm)
// values.forEach(value => {
//     mainActors.push(value)
// })
// console.log(mainActors)
// //3
// let keys = Object.keys(mainActorsByFilm)
// keys.forEach(key => {
//     movies.push(key)
// })
// console.log(movies)
// //4, 5, 6
// let movieByActor = {}
// const actor = 'Keanu Reeves'
// const mov = ['John wick', 'matrix']
// movieByActor[actor] = mov
// console.log(movieByActor)

// //Posición adecuada
// let people = [
//     { name: "Alba", age: 15 },
//     { name: "Estrella", age: 30 },
//     { name: "Belen", age: 20 },
//     { name: "Santiago", age: 4 },
//     { name: "Katherine", age: 55 }
// ]
// people.sort((a, b) => a.age - b.age)
// for(let i = 0; i < people.length; i++){
//     people[i].position = i
// }
// console.log(people)

// //Software Factory
// let ecommerce = [
//     {name: "Samsung TV", price: 6000, articles: 10},
//     {name: "DELL notewok", price: 4000, articles: 30},
//     {name: "Auriculares Sony", price: 1500, articles: 15},
//     {name: "Monitor Philips", price: 12000, articles: 20},
//     {name: "Teclado logitech", price: 3000, articles: 5},
// ]
// function totalArticles(ecommerce){
//     return ecommerce.map(product => {
//         let totalPrice = product.price * product.articles
//         return {[product.name]: totalPrice}
//     })
// }
// let total = []
// total = totalArticles(ecommerce);
// console.log(total)