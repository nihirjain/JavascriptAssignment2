function totalcartvalue(...number){
    let sum = number.reduce((acc,curr)=>acc+curr)
    return sum
}
let ans = totalcartvalue(120,122,323,213)
console.log(ans);

