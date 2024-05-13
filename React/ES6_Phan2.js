

let snt = (x) => {
    if(x < 2){
        return false;
    }
        
    if(x == 2){
        return true;
    }

    for(let i=2 ; i<x-1 ;i++){
        if(x%i == 0){
            return false;
        }
    }
    return true;
}

console.log(snt(7));
console.log("==========^^^==========");


let arr = [1,5,9,8,6,7,101];
arr.map(x =>{
    if(snt(x) == true){
        console.log(x);
    }
})
console.log("==========^^^==========");

let mangMoi = arr.filter(item => {
    if(snt(item) == true){
        console.log(item);
    }
})
console.log("==========^^^==========");
let sumReduce = arr.reduce((a , x) => a + x*x,0);
console.log(sumReduce);
