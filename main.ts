import readlineSync from 'readline-sync'

function mostrar(list:string[]){
    console.log(`
    -------
    ${list[0]}  ${list[1]}  ${list[2]}
    ${list[3]}  ${list[4]}  ${list[5]}
    ${list[6]}  ${list[7]}  ${list[8]}
    -------
    
    `)

}

let list : string[]= [
    '*','*','*',
    '*','*','*',
    '*','*','*',
]

while(true){
    mostrar(list)
    let ops:number = parseInt(readlineSync.question("digite um número de 0, 8 ? :"))
    let pc : number = Math.floor(Math.random()*9) 
    
    if ((ops< 0 || ops >8) || (list[ops] == "X"  || list[ops]=="O") ){
        console.log("digite um número valido !")
    }else{
        list.splice(ops, 1, "X")
        do{
            pc = Math.floor(Math.random()*9)
        }while(list[pc]== "X" || list[pc]=="O")    
        list.splice(pc, 1, "O")
    }

    if(
        
        (list[0] === "X" && list[1] === "X" && list[2] === "X") ||
        (list[3] === "X" && list[4] === "X" && list[5] === "X") ||
        (list[6] === "X" && list[7] === "X" && list[8] === "X") ||
        (list[0] === "X" && list[3] === "X" && list[6] === "X") ||
        (list[1] === "X" && list[4] === "X" && list[7] === "X") ||
        (list[2] === "X" && list[5] === "X" && list[8] === "X") ||
        (list[0] === "X" && list[4] === "X" && list[8] === "X") ||
        (list[2] === "X" && list[4] === "X" && list[6] === "X")
        
        
    ){
        console.log("vc venceu")
        break
    }

    
    if(
        
        (list[0] === "O" && list[1] === "O" && list[2] === "O") ||
        (list[3] === "O" && list[4] === "O" && list[5] === "O") ||
        (list[6] === "O" && list[7] === "O" && list[8] === "O") ||
        (list[0] === "O" && list[3] === "O" && list[6] === "O") ||
        (list[1] === "O" && list[4] === "O" && list[7] === "O") ||
        (list[2] === "O" && list[5] === "O" && list[8] === "O") ||
        (list[0] === "O" && list[4] === "O" && list[8] === "O") ||
        (list[2] === "O" && list[4] === "O" && list[6] === "O")
        
        
    ){
        console.log("vc perdeu")
        break
    }

}