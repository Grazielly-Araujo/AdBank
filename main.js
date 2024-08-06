let banco = [];
let numeroConta = 1;

function inserir() {
    let nome, idade, telefone;    
    let saldoInicial = 1000;
    let tentativas = 0;
    let contaCriada = false; // Variável de controle para verificar se a conta foi criada

    while (!nome || !idade || !telefone) {  // enquanto as variaveis estiverem vazias, irá pedir novamente
        nome = prompt("Digite seu nome completo: ");
        idade = prompt("Data de nascimento (DD/MM/AAAA): ");
        telefone = prompt("Telefone: ");
        tentativas++;

        if (tentativas >= 2) { // quantidade de tentativas de controle de erro!
            alert("Número de tentativas erradas excedido!");
            break;
        }
    }

    // Verificar se a conta foi criada com sucesso antes de exibir o alerta
    if (nome && idade && telefone) {
        contaCriada = true;
    }

    if (contaCriada) {
        alert(`Obrigado ${nome}, sua conta foi criada com sucesso!\nNº da conta ${numeroConta}`);
        banco.push(nome, idade, telefone, saldoInicial, numeroConta++);
    }
}
// em contrução

function transferir(){

    let contaDestino = prompt("Digite o número da conta de destino: ");
    let contaOrigem = prompt("Digite o número da conta de origem: ");
    let valorTransferir = parseInt("Digite o valor da transferêcia: R$ ");

}

function exibir(){
    let i = parseInt(prompt("Digite o Número da conta que deseja exibir: "));

    // Verifica se o índice é válido
    if (i >= 0 && i < banco.length) {
        for (let i = 0; i < banco.length; i++) {
        alert(banco[i]);
    }
    } else {
        alert("Número da conta inválido. Tente novamente.");
    }

}