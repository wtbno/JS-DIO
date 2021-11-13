// Tipos de função

//Declarativa

function funcao(){
    console.log("Menssagem de função declativa")
}

funcao();

//a função requer um nome (funcao)



//com nomeação, onde a nomeação é opcional
var funcao = function funcao(){
    console.log("função de expressão")
}

funcao();


//Arrow function

/*São funções de expressão de sintaxe curta. Arrow functions
sempre serão anônimas, e portanto não podem ser nomeadas.
deve ser declarada com parênteses "()", seguido de "=>" e depois
chaves "{}"

Ex. 1: var funcao = () => {
${instrucao};
}*/

var funcao = () => {
    console.log("Função arrow")
    
}

