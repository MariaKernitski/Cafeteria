const prompt = require("prompt-sync")();

const menu = []

const comidas = [];

const bebidas = [];

const menuInval = item => item == "" || Number(item);

const modelo2 = () => {
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

const modelo3 = () => {
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

const modelo = () => {
    let opcao = prompt(`Digite 'P' para adicionar um prato ao menu ou pressione 'enter' para adicionar uma bebida: `).toLowerCase();
   
    if (opcao == "p") {
        while(true) { 
            let comida = prompt("Digite o nome do prato que deseja adicionar ao menu: ");

            if (menuInval(comida)) {
                console.log("Prato inválido.");
            }
            else {
                comidas.push(comida);
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
                bebidas.push(bebida);
                return bebida;
            }
        }
    }
  
}

const criar = () => {
    menu.push(modelo());
    console.log("Item adicionado com sucesso!")
}

const lista = () => {
    
    if (menu.length == 0) {
        console.log("Nada registrado.")
    }
    else {
        console.log("Menu:\n");
        console.log("Pratos:")

        comidas.forEach ((item, indice) => {
            console.log(`${indice + 1} - ${item}`);
        });

        console.log("\nBebidas:")

        bebidas.forEach ((bebida, indice) => {
            console.log(`${indice + 1} - ${bebida}`);
        });
    }
}

const atualiza = () => {
    if (menu.length == 0) {
        console.log("Nada registrado.")
    }
    else {
        lista();
        let item = prompt("Digite 'P' para atualizar um prato ou pressione 'enter' para atualizar uma bebida: ").toLowerCase();

        if (item == "p") {
        let indice = prompt("Digite o índice do prato que deseja atualizar no menu: ") - 1;
            if (indice < 0 || isNaN(indice)) {
                console.log("Índice inválido.")
            }
            else {
                comidas[indice] = modelo2();
                console.log("Prato atualizado com sucesso!");
            }
        }
        else {
            let indice = prompt("Digite o índice da bebida que deseja atualizar no menu: ") - 1;
            if (indice < 0 || isNaN(indice)) {
                console.log("Índice inválido.")
            }
            else {
                bebidas[indice] = modelo3();
                console.log("Bebida atualizada com sucesso!");
            }
        }
    }
}

const remove = () => {
    
    if (menu.length == 0) {
        console.log("Nada registrado.")
    }
    else {
        lista();
        let item = prompt("Digite 'P' para remover um prato ou pressione 'enter' para remover uma bebida: ").toLowerCase();

        if(item == "p") {
            let indice = prompt("Digite o índice do prato que deseja remover do menu: ") - 1;

                if(indice < 0 || isNaN(indice)) {
                    console.log("Índice inválido.")
                }
                else {
                    comidas.splice(indice, 1);
                    console.log("Prato removido com sucesso!");
                }
            }
        else {
            let indice = prompt("Digite o índice da bebida que deseja remover do menu: ") - 1;

                if(indice < 0 || isNaN(indice)) {
                    console.log("Índice inválido.")
                }
                else {
                    bebidas.splice(indice, 1);
                    console.log("Bebida removida com sucesso!");
                }
        }
        }
}

module.exports = {
    criar,
    lista,
    atualiza,
    remove
}
