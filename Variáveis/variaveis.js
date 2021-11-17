function returnCar() {//declaração com var

    var car = 'Land Rover';

    if (car === 'Land Rover') {

        var car = 'Ferrari';

        console.log('Dentro do if: ' + car);

    }

    console.log('Fora do if: ' + car);

}

returnCar();

/*Note que agora a string “Ferrari” só foi identificada dentro do if(). Fora dele a string “Land Rover” continuou a ser identificada, que era o que esperávamos.
Podemos perceber assim que usar o let nos ajuda a evitar confusões no código quanto ao escopo de execução.
Vamos ver mais um exemplo sobre essa diferença com outro recurso que usamos bastante: laços de repetição.*/

//se desejarmos manipular o valor de uma variável let, somos obrigados a declará-la previamente.
//já com var o valor pode ser passado antes de declarar a mesma





function returnCar() {//declaração utilizando let

    let car = 'Land Rover';

    if (car === 'Land Rover') {

        let car = 'Ferrari';

        console.log('Dentro do if: ' + car);

    }

    console.log('Fora do if: ' + car);

}


const IP = '127.0.0.1';

console.log(IP);
//declarar uma variável como const não significa necessariamente que seu valor não pode ser mudado. Significa que não podemos sobrescrever o seu identificador: 
/*const IP = '127.0.0.1';

IP = '192.168.0.1';

console.log(IP); */
//Porém se a const for um objeto ou um array, suas propriedades podem ser alteradas

const USER_ADMIN = {
    name: 'Bruno A',
    login: 'root'
};

USER_ADMIN.login = 'admin';

console.log(USER_ADMIN)

//Uma outra regra interessante sobre constantes é que devemos obrigatoriamente definir um valor para ela quando a declararmos, diferentemente do que ocorre com o var e let. Imagine que simplesmente informamos o identificador de uma constante




