let recursos = {
    beleza: 10,
    inteligencia: 10,
    dinheiro: 10
};

function mostrarRecursos() {
    console.log(`Beleza: ${recursos.beauty}`);
    console.log(`Inteligência: ${recursos.inteligencia}`);
    console.log(`Dinheiro: ${recursos.dinheiro}`);
}

function fase1() {
    console.log("Fase 1: Você encontra um desafio.");
    console.log("Escolha 1: Tentar impressionar com sua beleza.");
    console.log("Escolha 2: Usar sua inteligência para resolver o problema.");
    
    let escolha = prompt("Digite 1 ou 2: ");
    
    if (escolha === '1') {
        console.log("Você impressionou alguém! Ganhou 2 beleza.");
        recursos.beauty += 2;
    } else if (escolha === '2') {
        console.log("Você resolveu o problema com sua inteligência! Ganhou 2 inteligência.");
        recursos.inteligencia += 2;
    } else {
        console.log("Escolha inválida.");
    }
}

function fase2() {
    console.log("Fase 2: Você encontra um dilema financeiro.");
    console.log("Escolha 1: Investir dinheiro em um projeto.");
    console.log("Escolha 2: Economizar seu dinheiro.");
    
    let escolha = prompt("Digite 1 ou 2: ");
    
    if (escolha === '1') {
        console.log("Seu investimento falhou! Perdeu 5 dinheiro.");
        recursos.dinheiro -= 5;
    } else if (escolha === '2') {
        console.log("Você economizou com sucesso! Ganhou 3 dinheiro.");
        recursos.dinheiro += 3;
    } else {
        console.log("Escolha inválida.");
    }
}

function fase3() {
    console.log("Fase 3: Uma competição de talentos.");
    console.log("Escolha 1: Usar sua beleza para ganhar a competição.");
    console.log("Escolha 2: Usar sua inteligência para convencer o jurado.");
    
    let escolha = prompt("Digite 1 ou 2: ");
    
    if (escolha === '1') {
        console.log("Você ganhou! Perdeu 2 beleza.");
        recursos.beauty -= 2;
    } else if (escolha === '2') {
        console.log("Você convenceu! Ganhou 3 inteligência.");
        recursos.inteligencia += 3;
    } else {
        console.log("Escolha inválida.");
    }
}

function verificarRecursos() {
    if (recursos.beauty <= 0 || recursos.inteligencia <= 0 || recursos.dinheiro <= 0) {
        console.log("Você ficou sem recursos! O jogo recomeça.");
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

        
        if (recursos.beauty > 0 && recursos.inteligencia > 0 && recursos.dinheiro > 0) {
            console.log("Parabéns! Você completou o jogo.");
            break;
        }
    }
}

jogar();
