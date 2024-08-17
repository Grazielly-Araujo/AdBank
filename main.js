let banco = [[]];
let numero_da_Conta = 1;

function inserir() {
    let nome = prompt("Digite seu nome completo:");
    let dataNascimento = prompt("Data de nascimento (DD/MM/AAAA):");
    let telefone = prompt("Telefone:");
    let saldo = 1000;
    
    // Validação para garantir que todos os campos sejam preenchidos
    if (!nome || !dataNascimento || !telefone) {
        alert("Erro: Todos os campos devem ser preenchidos corretamente!");

    } else {
        alert(`Obrigado ${nome}, sua conta foi criada com sucesso!`);
        
        let conta = {numero_da_Conta, nome, dataNascimento, telefone, saldo}
        banco.push(conta);
        numero_da_Conta++;
        
        // Exibindo a conta recém-criada
        alert(`Detalhes da sua conta:\nNúmero da Conta: ${conta.numero_da_Conta}\nNome: ${conta.nome}\nData de Nascimento: ${conta.dataNascimento}\nTelefone: ${conta.telefone}\nSaldo Atual: R$${conta.saldo}`);
        
    }

    
}

function transferir(){

    let num_conta_destino = parseInt(prompt("Digite o número da conta de destino: "));
    let numContaOrigem = parseInt(prompt("Digite o número da conta de origem: "));
    let valorTransferir = parseInt(prompt("Digite o valor da transferêcia: R$ "));
    
    // ver se colocou os numeros corretamente
    if (isNaN(num_conta_destino) || isNaN(numContaOrigem) || isNaN(valorTransferir)) {
        alert("coloque numeros validos");
        return;
    }

// achar a conta no banco
    let contaDestino = banco.find(function(conta) {
        return conta.numero_da_Conta === num_conta_destino;
    });

    let contaOrigem = banco.find(function(conta) {
        return conta.numero_da_Conta === numContaOrigem;
    });

    if (contaDestino && contaOrigem) {
        // ver se a conta que vc quer enviar o valor tem saldo
        if (contaOrigem.saldo >= valorTransferir) {
        // faz a transferencia
            contaOrigem.saldo -= valorTransferir;
            contaDestino.saldo += valorTransferir;
            alert(`Dinheiro enviado \nSaldo da conta de origem: R$${contaOrigem.saldo}\nSaldo da conta de destino: R$${contaDestino.saldo}`);
            
        } else {
            alert("Saldo insuficiente.");
        }
    } else {
        alert("Conta de origem ou destino não encontrada!");
    }

}

function exibir(){
    let numero_da_conta_informado = parseInt(prompt("Digite o Número da conta que deseja exibir: "));
    let indice = -1
    banco.forEach((buscar_conta, i)=>{
        if (buscar_conta.numero_da_Conta === numero_da_conta_informado && indice === -1){
            indice = i
        }
    });
    if (indice !== -1) {
        let conta = banco[indice];
        alert(`Detalhes da Conta:\nNúmero da Conta: ${conta.numero_da_Conta}\nNome: ${conta.nome}\nData de Nascimento: ${conta.dataNascimento}\nTelefone: ${conta.telefone}\nSaldo Atual: R$${conta.saldo}`);
    } else {
        alert("Conta não encontrada!");
    }
}

// function exibirTodasAsContas(){
//     // Exibir a string completa com todos os vetores
//     let resultado = "Contas Registradas:\n";
//     banco.forEach((conta, index) => {
//     resultado += `Conta ${index + 1}:\n`;
//     resultado += `Número da Conta: ${conta.numeroConta}\n`;
//     resultado += `Nome: ${conta.nome}\n`;
//     resultado += `Data de Nascimento: ${conta.dataNascimento}\n`;
//     resultado += `Telefone: ${conta.telefone}\n`;
//     resultado += `Saldo Atual: R$${conta.saldo}\n\n`;
//     });
//     document.write(resultado);
// }
