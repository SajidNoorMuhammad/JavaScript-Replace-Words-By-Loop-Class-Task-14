//Write a program to replace the word without using replace method.

// var str= "Ali"
// var word= "Hello, My name is Ali. Hello, My name is Ali. Hello, My name is Ali."

// for (var i=0; i<word.length; i++){
//     if (word.slice(i, i+18) ===   str){
//         word = word.slice(0,i) + "Sajid Noor Muhammad" + word.slice(i + 18)
//     }
// }
// console.log(word)

var str= "x"
var word= "Hello, My name is Ali. Hello, My name is Ali. Hello, My name is Ali."

for (var i=0; i<word.length; i++){
    if(word.slice(i,i+18) === str){
        word += (word.slice(0,i) + "Sajid Noor Muhammad" + word.slice(i + 18))
    }
}

document.write(word)