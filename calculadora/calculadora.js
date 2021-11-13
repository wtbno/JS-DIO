//Exercício calculadora
function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*)  \n 4 - Divisão real (/) \n 5 - Divisão inteira (%)\n 6 - Potenciação (**) "))

    //Verificar se a op é válida    
    if (!operacao || operacao >= 7) {
        alert("Erro, operação inválida!");
        calculadora();
    } else {
        //definindo variáveis
        //todas as entradas devem ser do tipo number
        let n1 = Number(prompt("Insira o primeiro valor"));
        let n2 = Number(prompt("Insira o segundo valor "));
        let resultado; {

            if (!n1 || !n2) {
                alert("Erro-Parâmetros inválidos")
                calculadora();
            } else {

                //Definição de funções
                function soma() {
                    resultado = n1 + n2;
                    alert(`${n1} + ${n2} = ${resultado}`);
                    novaOp();
                }
                function subtracao() {
                    resultado = n1 - n2;
                    alert(`${n1} - ${n2} = ${resultado}`);
                    novaOp();
                }
                function multiplicacao() {
                    resultado = n1 * n2;
                    alert(`${n1} * ${n2} = ${resultado}`);
                    novaOp();
                }
                function divisao_real() {
                    resultado = n1 / n2;
                    alert(`${n1} / ${n2} = ${resultado}`);
                    novaOp();
                }
                function divisao_inteira() {
                    resultado = n1 % n2;
                    alert(`O resto da divisão entre ${n1} e ${n2} é igual a  ${resultado}`);
                    novaOp();
                }
                function potenciacao() {
                    resultado = n1 ** n2;
                    alert(` ${n1} elevado a ${n2} é igual a  ${resultado}`);
                    novaOp();
                }
                //Nova operação
                function novaOp() {
                    let opcao = prompt("Deseja realizar uma nova operação? \n 1 - Sim \n 2 - Não");

                    if (opcao == 1) {
                        calculadora();
                    } else if (opcao == 2) {
                        alert("Até mais!");
                    } else {
                        alert("Selecione uma opção válida!");
                        novaOp();
                    }
                }
            }
        }

        /* if (operacao == 1) {
             soma();
         } else if (operacao == 2){
             subtracao();
         }else if (operacao == 3) {
             multiplicacao ();
         }else if (operacao == 4) {
             divisao_real()
         }else if (operacao == 5) {
             divisao_inteira()
         }else if (operacao == 6) {
             potenciacao();
         }*/

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao_real();
                break;
            case 5:
                divisao_inteira();
                break;
            case 6:
                potenciacao();
                break;
        }

    }
}

calculadora();


// Shift + Alt + F