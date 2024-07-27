const prompt = require("prompt-sync")();

const {criar, lista, atualiza, remove} = require("./crud.js");

console.log("Bem Vindo(a) à Cafeteria Doces Sonhos!");

while(true) {

console.log(`
    Digite '1' para adicionar algo ao menu;
    Digite '2' para listar os itens;
    Digite '3' para atualizar algo;
    Digite '4' para remover algo;
    Digite '5' para sair.
    `)

let op = prompt("");

    switch(op) {
        case "1": criar();
        break;
        case "2": lista();
        break;
        case "3": atualiza();
        break;
        case "4": remove();
        break;
        case "5":
            console.log("Obrigada por utilizar nossos serviços! Até logo!")
            process.exit();
        break;
        default: console.log("Opção inválida.");
        break;
    }
}