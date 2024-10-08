let recursos = {
    beleza: 10,
    inteligencia: 10,
    dinheiro: 10
};

function mostrarRecursos() {
    alert(`Recursos atuais:\nBeleza: ${recursos.beleza}\nInteligência: ${recursos.inteligencia}\nDinheiro: ${recursos.dinheiro}`);
}

function fase1() {
    let escolha = prompt("Fase 1: Você encontra um desafio.\nEscolha 1: Tentar impressionar com sua beleza.\nEscolha 2: Usar sua inteligência para resolver o problema.\nDigite 1 ou 2:");

    if (escolha === '1') {
        alert("Você impressionou alguém! Ganhou 5 beleza.");
        recursos.beleza += 5;  
    } else if (escolha === '2') {
        alert("Você resolveu o problema com sua inteligência! Ganhou 3 inteligência.");
        recursos.inteligencia += 3;
    } else {
        alert("Escolha inválida. Você não ganhou nem perdeu recursos.");
    }
}

function fase2() {
    let escolha = prompt("Fase 2: Você encontra um dilema financeiro.\nEscolha 1: Investir dinheiro em um projeto.\nEscolha 2: Economizar seu dinheiro.\nDigite 1 ou 2:");

    if (escolha === '1') {
        alert("Seu investimento falhou! Perdeu 5 dinheiro.");
        recursos.dinheiro -= 5;
    } else if (escolha === '2') {
        alert("Você economizou com sucesso! Ganhou 5 dinheiro.");
        recursos.dinheiro += 5;  
    } else {
        alert("Escolha inválida. Você não ganhou nem perdeu recursos.");
    }
}

function fase3() {
    let escolha = prompt("Fase 3: Uma competição de talentos.\nEscolha 1: Usar sua beleza para ganhar a competição.\nEscolha 2: Usar sua inteligência para convencer o jurado.\nDigite 1 ou 2:");

    if (escolha === '1') {
        alert("Você ganhou! Perdeu 3 beleza.");
        recursos.beleza -= 3;  
    } else if (escolha === '2') {
        alert("Você convenceu! Ganhou 5 inteligência.");
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

function jogar() {
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

jogar();
