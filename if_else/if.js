

// var age = 18;
// var hight = 44;
// if(age > 20 || hight > 40){
//     console.log ('Your are voter')
// }else{
//     console.log('your are not voter')
// }



// function add (x, y){
//     const sum = x + y;
//     console.log(sum)
//     return sum;

// }
// Refactored add function using arrow syntax and fixed argument passing

const add = (x, y) => {
    const sum = x + y;
    console.log(sum);
    return sum;
};

const sum = add(10, 5); // Added missing second argument

const num = [ 12, 15, 14, 80]

const Num =  num.map(n => n *2)
console.log(Num)

const friend = ['Rajib', 'Hason', 'Salam']
const length = friend.map(frd => frd.length)
console.table(length)
const Fastl = friend.map(frd => frd[0]);
console.table(Fastl)