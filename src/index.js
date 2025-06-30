const player1 = {
NOME: "MARIO",
VELOCIDADE: 4,
MANOBRABILIDADE: 3,
PODER: 3,
PONTOS: 0,
};

const player2 = {
NOME: "LUIGI",
VELOCIDADE: 3,
MANOBRABILIDADE: 4,
PODER: 4,
PONTOS: 0,
};

const player3 ={
NOME: "YOSHI",
VELOCIDADE: 2,
MANOBRABILIDADE: 4,
PODER: 3,
PONTOS: 0,
};

const player4 ={
NOME: "BOWSER",
VELOCIDADE: 5,
MANOBRABILIDADE: 2,
PODER: 5,
PONTOS: 0,
};

const player5 ={
NOME: "Peach",
VELOCIDADE: 3,
MANOBRABILIDADE: 4,
PODER: 2,
PONTOS: 0,
};

const player6 ={
NOME: "Donkey Kong",
VELOCIDADE: 2,
MANOBRABILIDADE: 2,
PODER: 5,
PONTOS: 0,
};


 //async function rolar dado

async function rollDice() {
return Math.floor(Math.random() * 6) + 1;
}                                        

async function getRandomBlock(){
    let random = Math.random()
    let result 

    switch (true){
    case random < 0.33:
    result = "RETA"
    break;

    case random < 0.66:
        result = "CURVA"
        break;
    default:
        result = "CONFRONTO"
        break;
        
    }
    return result;


}

async function logRollResult(characterName, block, diceResult, attribute){
console.log(`${characterName}🎲 Rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}


 //funções que recebem parametros

async function playRaceEngine(character1, character2){                 
for(let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`)

    //Sortear bloco

    let block = await getRandomBlock()
    console.log(`${block}`);


    //rolar os dados
let diceResult1 = await rollDice();
let diceResult2 = await rollDice();

// teste de habilidade
let TotaltestSkill1 = 0;
let TotaltestSkill2 = 0;


if(block === "RETA"){
    TotaltestSkill1 = diceResult1 + character1.VELOCIDADE;
    TotaltestSkill2 = diceResult2 + character2.VELOCIDADE;

    await logRollResult(character1.NOME, "VELOCIDADE", diceResult1, character1.VELOCIDADE )
    await logRollResult(character2.NOME, "VELOCIDADE", diceResult2, character2.VELOCIDADE )
}


if(block === "CURVA"){
TotaltestSkill1 = diceResult1 + character1.MANOBRABILIDADE
TotaltestSkill2 = diceResult2 + character2.MANOBRABILIDADE

await logRollResult(character1.NOME,"MANOBRABILIDADE", diceResult1, character1.MANOBRABILIDADE)
await logRollResult(character2.NOME,"MANOBRABILIDADE", diceResult2, character2.MANOBRABILIDADE)
}

let powerResult1 = diceResult1 + character1.PODER
let powerResult2 = diceResult2 + character2.PODER

if(block === "CONFRONTO"){

console.log(`${character1.NOME} confrontou com ${character2.NOME}!🥊`)

await logRollResult(character1.NOME, "PODER", diceResult1, character1.PODER )
await logRollResult(character2.NOME, "PODER", diceResult2, character2.PODER )

if(powerResult1 > powerResult2 && character2.PONTOS > 0){
    console.log(`${character1.NOME} Venceu o confronto! ${character2.NOME} Perdeu um ponto🐢`)
    character2.PONTOS--;
}
}
if(powerResult2 > powerResult1){
if(character1.PONTOS > 0){
    character1.PONTOS--;
} 

}
if(powerResult2 === powerResult1){
console.log("EMPATE, Nenhum ponto foi perdido.")
}

//verificando o vencedor

if(TotaltestSkill1 > TotaltestSkill2){
    console.log(`${character1.NOME} marcou um ponto!!`);
    character1.PONTOS++;
} else if(TotaltestSkill2 > TotaltestSkill1){
    console.log(`${character2.NOME} marcou um ponto!!`);
    character2.PONTOS++;
}

console.log("-------------------------------")
}



if(character1.PONTOS > character2.PONTOS){
    console.log(`\n${character1.NOME} Venceu a corrida! Parabéns🏆`)
}else if(character2.PONTOS > character1.PONTOS){
    console.log(`\n${character2.NOME} Venceu a corrida! Parabéns🏆`)
}else{
    console.log("a corrida terminou em empate")
}

}
    
async function declareWinner (character1, character2){
console.log("Resultado final:")
console.log(`${character1.NOME} ${character1.PONTOS} `)
console.log(`${character2.NOME} ${character2.PONTOS} `)
}
                                 

(async function main(){
    console.log(`🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando....\n`)
    
   await playRaceEngine(player1, player2)
   await declareWinner(player1, player2)
})()           //<-------- função auto-invocavel
