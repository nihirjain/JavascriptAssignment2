function calculatedays(eventdate){
    const current = new Date();
    const event = new Date(eventdate);
    const differ = event - current ;
    const result = Math.ceil(differ/(1000*60*60*24))
    return result
}

console.log(calculatedays('2023-08-31'))