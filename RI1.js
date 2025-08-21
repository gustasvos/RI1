const personagem1 = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
 
const personagem2 = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Pistolas",
    armaSecundaria: "Rifle",
    velocidade: 60,
    forca: 65,
    resistencia: 62,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
const personagem3 = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Força Física",
    armaSecundaria: "",
    velocidade: 77,
    forca: 99,
    resistencia: 95,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
const personagem4 = {
    nome: "Thor",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "",
    velocidade: 92,
    forca: 81,
    resistencia: 82,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
const personagem5 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Lasers propulsores",
    armaSecundaria: "",
    velocidade: 90,
    forca: 63,
    resistencia: 81,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
const personagem6 = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco",
    armaSecundaria: "Flechas",
    velocidade: 57,
    forca: 60,
    resistencia: 64,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
const personagem7 = {
    nome: "Peter Parker",
    codinome: "Homem Aranha",
    armaPrincipal: "Teias",
    armaSecundaria: "",
    velocidade: 86,
    forca: 71,
    resistencia: 66,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
const personagem8 = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manoplas do Infinito",
    armaSecundaria: "Jóias do Infinito",
    velocidade: 70,
    forca: 93,
    resistencia: 95,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundária: " + this.armaSecundaria + "\n"
            + "Nível de Força: " + this.forca + "\n"
            + "Nível de Velocidade: " + this.velocidade + "\n"
            + "Nível de Resistência: " + this.resistencia + "\n"
    }
}
 
let personagens = []
personagens.push(personagem1, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7, personagem8)

function compara(arr) {
    let maiorf = arr[0].forca
    let maiorv = arr[0].velocidade
    let maiorr = arr[0].resistencia

    for (i=1; i < arr.length; i++) {
        if (arr[i].forca > maiorf) {
            maiorf = arr[i]
        }
        if (arr[i].velocidade > maiorv) {
            maiorv = arr[i]
        }
        if (arr[i].resistencia > maiorr) {
            maiorr = arr[i]
        }
    }
    console.log("MAIOR FORÇA: \n" + maiorf.descricao())
    console.log("MAIOR VELOCIDADE: \n" + maiorv.descricao())
    console.log("MAIOR RESISTÊNCIA: \n" + maiorr.descricao())
}

compara(personagens)