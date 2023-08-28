function otp(){
    max = 9999;
    min = 1000;
   const otp = Math.floor(Math.random()*(max-min+1)+min);
    return otp.toString();
}
console.log(`Here is Your ${otp()}`)