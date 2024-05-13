const birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];

birds.map(x =>{
        console.log("id: "+x.ID);
})

// let sum = 0;
// listProduct.map(x =>{
//     sum += x.price * x.quantity;
// })
// console.log(sum);


// let tong = listProduct.reduce((sum2, x) => sum2 += x.price * x.quantity,0)
// console.log(tong);