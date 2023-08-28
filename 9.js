function uniquecharactercheck(input){
    let charset = new Set();
    for(const char of input){
        if(charset.has(char)){
            console.log("The input string contains duplicates.");
            return false;
        }
        charset.add(char);
    }
    console.log("The input string contains unique character");
}
uniquecharactercheck("mithun");
