let number = +prompt('Введите число')
let stepen = +prompt('Введите степень')
let result = 1

number = !isNaN(number) && !number == 0 ? number : number;
stepen = NaN || !stepen == 0 ? stepen : 2 ;

for(let counter=0; counter < stepen; counter++){
    result = result * number
}

console.log(result);