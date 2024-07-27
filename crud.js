const prompt = require("prompt-sync")();

const menu = []

const menuInval = item => item == "" || Number(item);

const modelo = () => {
    let opcao = prompt(`Digite 'P' para adicionar um prato ao menu ou pressione 'enter' para adicionar uma bebida: `).toLowerCase();
   
    if (opcao == "p") {
        while(true) { 
            let comida = prompt("Digite o nome do prato que deseja adicionar ao menu: ");

            if (menuInval(comida)) {
                console.log("Prato inválido.");
            }
            else {
              return comida;
            }
        }
    }
    else { 
            while(true) {
            let bebida = prompt("Digite o nome da bebida que deseja adicionar ao menu: ");

            if (menuInval(bebida)) {
                console.log("Bebida inválida.");
            }
            else {
                return bebida;
            }
        }
    }
  
}

const criar = () => {
    menu.push(modelo());
}

const lista = () => {
    
    if (menu.length == 0) {
        console.log("Nada registrado.")
    }
    else {
        console.log("Menu:");
        menu.forEach ((item, indice) => {
            console.log(`${indice + 1} - ${item}`);
        });
    }
}

const atualiza = () => {
    if (menu.length == 0) {
        console.log("Nada registrado.")
    }
    else {
    lista();
    let indice = prompt("Digite o índice do elemento que deseja atualizar no menu:") - 1;
        if (indice < 0 || isNaN(indice)) {
            console.log("Índice inválido.")
        }
        else {
            menu[indice] = modelo();
            console.log("Item atualizado com sucesso!");
        }
    }
}

const remove = () => {
    
    if (menu.length == 0) {
        console.log("Nada registrado.")
    }
    else {
        lista();
    let indice = prompt("Digite o índice do elemento que deseja remover do menu:") - 1;

        if(indice < 0 || isNaN(indice)) {
            console.log("Índice inválido.")
        }
        else {
            menu.splice(indice, 1);
            console.log("Item removido com sucesso!");
        }
    }
}

module.exports = {
    criar,
    lista,
    atualiza,
    remove
}