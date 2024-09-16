const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

// for(let i = 0; i < maioresPaises.length; i++){
//     console.log(`${i+1} - ${maioresPaises[i]}`)
// }

let i = 0
    for(let j of maioresPaises){
        i += 1
        console.log(`${i} - ${j}`)
    }

