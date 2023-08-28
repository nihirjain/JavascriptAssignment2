let students = [
    {
        name:"gopal",
        marks:92
    },
    {
        name:"pinal",
        marks:85
    },
    {
        name:"mukesh",
        marks:96
    },
    {
        name:"naman",
        marks:87
    },
    {
        name:"Mohan",
        marks:98
    }
]

function Studentname(name){
    for(let student of students){
        if(student.name==name){
            if(student.marks>90){
                console.log(`Congratulation ${name}! You have Cleared the exam.`)
            }
            else{
                console.log(`Soory ! You have not cleared the exam.`)
            }
            return
        }
        
    }
   console.log("Invalid User !!!");
}
Studentname("Mohan")