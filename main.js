let banco = [];
let numeroConta = 1;

function inserir() {
    let nome = prompt("Digite seu nome completo: ");
    let idade = prompt("Data de nascimento (DD/MM/AAAA): ");
    let telefone = prompt("Telefone: ");
    let saldoInicial = 1000;
        
    if (!nome || !idade || !telefone) { // quantidade de tentativas de controle de erro!
        alert("Preencher todos os campos!");
        
    }else{
        alert(`Obrigado ${nome}, sua conta foi criada com sucesso!\nNº da conta ${numeroConta}`);
        banco.push(nome, idade, telefone, saldoInicial, numeroConta++);
    }

}
// em construção

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