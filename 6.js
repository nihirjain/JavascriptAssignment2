let productdetails = {
    name:"Apple 2020 Macbook Air M1",
    price:82000,
    color:"grey",
    hardDisk:"256 GB"
};

for(let key in productdetails){
    console.log(`${key} : ${productdetails[key]}`);
}
