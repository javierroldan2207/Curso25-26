let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let pares1 = array.filter(number => number%2==0);

let pares = array.filter(function(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
})

console.log(pares1);

let cuadrados = array.map(number => number * number);
console.log(cuadrados);

let acumulado = array.reduce((total,number) => total+=number,0);
console.log(acumulado);

let mayores = array.every(number => number > 0);
console.log(mayores);

let algunMayor = array.some(number => number > 10);
console.log(algunMayor);