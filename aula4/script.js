/*var jogador1 = 0;
var jogador2 = 0;
var placar; 


//if ternário]
jogador1  !=  -1 && jogador2 != -1 ? console.log("Jogadores válidos!") :
console.log("Jogadores inválidos.");

if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou ponto!");
    placar = jogador1 > jogador2;
    
}else if (jogador2 > 0 && jogador1 == 0 ) {
    console.log("O jogador 2 marcou ponto!");
    placar = jogador2 > jogador1;

}{
    console.log("Ninguém marcou ponto");
}


switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("O jogador 1 é o vencedor")
        break;
        case placar = jogador2 > jogador1:
            console.log("O jogador dois é o vencedor");
            break;
        default:
            console.log("Empate")
}*/




//O operador lógico AND (&&) (conjunção lógica) para um conjunto de operandos é verdadeiro se e somente se todos os seus operandos forem verdadeiros



let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

let object = { propriedade1: "valor", propriedade2: "valor2", proriedade3: "valor3"}

//for = executa uma função até que ela seja falsa 
for (let indice = 0; indice < array.length; indice++){
    console.log(indice)
}

for (let i  in array){
    console.log(i);
}

for (i in object){
console.log(i);
}


//com array
for ( i of array) {
console.log(i);
}

//com objetos
for (i of obeject.propriedade1){
    console.log(i);
}





//São estruturas condicionais que repetem uma instrução até atingir
//determinada condição:

//• For;
//• For/in;
//• For/of;
//• While;
//• Do/while;



//While executa uma instrução “enquanto” determinada condição for
//verdadeira, a verificação é feita antes da execução;


var a = 0;

while (a < 0){
    a++;
    console.log(a);
}


do {
    a++;
    console.log(a);
}while (a < 10);
