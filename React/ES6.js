let soLonNhat = (a,b,c) => {
    let max = a;
    if(b>max){
        max = b;
    }
    if(c>max){
        max = c;
    }
    return max;
}

console.log(soLonNhat(2,6,3));
console.log("==========^^^==========");

let arr = [2,6,7,8,10];

let brr = arr.map(x => {
    if(x%3 == 2 ){
        console.log(x);
    }
})
console.log("==========^^^==========");

let mangMoi = arr.filter(item => item % 3 == 2)
console.log(mangMoi);

console.log("==========^^^==========");
let sum = 0;
arr.map(x => {
    sum+=x;
})

console.log(sum*2);

console.log("==========^^^==========");

let sumReduce = arr.reduce((a , b) => a + b,0) 
console.log(sumReduce*2);