let products = [
    {name:"laptop",price:120000},
    {name:"Mobile",price:70000},
    {name:"laptop Bag",price:20000},
    {name:"Watch",price:20000},
    {name:"Mobile charger",price:1500},
]

products.sort((a,b)=> a.price - b.price)
let length = products.length 
let maxproduct = products[length-1].price
let minproduct = products[0].price
console.log(`The product with max amount is ${products[length-1].name} which is priced at ${maxproduct} `);
console.log(`The product with min amount is ${products[0].name} which is priced at ${minproduct} `);