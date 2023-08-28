let users = ["nihir","shruti","Rakesh","Mohan"];

function usercheck(name){
    if(users.includes(name)){
        console.log(`Yes, ${name} is a Valid User`)
    }
    else{
        console.log(`No, ${name} is not a Valid User`)
    }
}

usercheck("nihir")
usercheck("Someone")