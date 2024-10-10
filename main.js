let recursos = {
    beleza: 10,
    inteligencia: 10,
    dinheiro: 10
};

function mostrarRecursos() {
    alert(`Recursos atuais:\nBeleza: ${recursos.beleza}\nInteligência: ${recursos.inteligencia}\nDinheiro: ${recursos.dinheiro}`);
}

function fase1() {
    let escolha = prompt("Fase 1: Você encontra um principe.\nEscolha 1: Tentar impressionar com sua beleza.\nEscolha 2: Usar sua inteligência para conquistá-lo.\nDigite 1 ou 2:");

    if (escolha === '1') {
        alert("Você impressionou ele! Ganhou 5 beleza.");
        recursos.beleza += 5;  
    } else if (escolha === '2') {
        alert("Você conquistou ele com a sua inteligencia e ganhou um cargo no Palácio! Ganhou 3 inteligência.");
        recursos.inteligencia += 3;
    } else {
        alert("Escolha inválida. Você não ganhou nem perdeu recursos.");
    }
}

function fase2() {
    let escolha = prompt("Fase 2: Você encontra um baú com moedas escondidas no castelo.\nEscolha 1: Comprar um vestido com as moedas.\nEscolha 2: Guardar as moedas.\nDigite 1 ou 2:");

    if (escolha === '1') {
        alert("Seu vestido foi taxado na alfandega do Reino! Perdeu 5 dinheiro.");
        recursos.dinheiro -= 5;
    } else if (escolha === '2') {
        alert("Você investiu seu dinheiro ! Ganhou 5 dinheiro.");
        recursos.dinheiro += 5;  
    } else {
        alert("Escolha inválida. Você não ganhou nem perdeu recursos.");
    }
}

function fase3() {
    let escolha = prompt("Fase 3: Há um baile acontecendo para escolher a esposa do principe.\nEscolha 1: Usar sua beleza para ser escolhida pelo principe.\nEscolha 2: Usar sua inteligência para convencer o rei a ser sua nora.\nDigite 1 ou 2:");

    if (escolha === '1') {
        alert("Você foi escolhida! Perdeu 3 beleza.");
        recursos.beleza -= 3;  
    } else if (escolha === '2') {
        alert("Você convenceu o rei! Ganhou 5 inteligência.");
        recursos.inteligencia += 5; 
    } else {
        alert("Escolha inválida. Você não ganhou nem perdeu recursos.");
    }
}

function verificarRecursos() {
    if (recursos.beleza <= 0 || recursos.inteligencia <= 0 || recursos.dinheiro <= 0) {
        alert("Você ficou sem recursos! O jogo recomeça.");
        recursos = { beleza: 10, inteligencia: 10, dinheiro: 10 }; 
    }
}

function start() {
    while (true) {
        mostrarRecursos();
        fase1();
        verificarRecursos();
        mostrarRecursos();

        fase2();
        verificarRecursos();
        mostrarRecursos();

        fase3();
        verificarRecursos();
        mostrarRecursos();

        if (recursos.beleza > 0 && recursos.inteligencia > 0 && recursos.dinheiro > 0) {
            alert("Parabéns! Você completou o jogo.");
            break;
        }
    }
}

start();
