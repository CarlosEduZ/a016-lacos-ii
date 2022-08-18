const numero = Number(prompt("Diga um número para multiplicar"))
const multi = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i <= 10; i++){
//     console.log(i*numero)
// }

for(let i in multi){
    console.log(multi[i] * numero)
}
