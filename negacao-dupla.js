//Valores falsy
console.log(!!0); //false
console.log(!!"") // false
console.log(!!null); // false

// Valores truthy
console.log(!!1);          //true
console.log(!!"texto");    //true
console.log(!![]);         //true (Arrays vazios são o objetos,logo são truthy)
console.log(!!{});         //true (Obetos vazios são truth)