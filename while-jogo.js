let resultadoDado;
let lancamento= 0 ;
while (resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.random() * 6) + 1; // Gera um numero aleatorio de 1 a 6
    lancamento ++ ;
    console.log(`lançamento ${lancamento} : Resultado do dado: ${resultadoDado}`) ;
}
console.log(` finalmente ! 0 numero 6 foi obtido apos  ${lancamento} lançamento.`);