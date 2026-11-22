let age : number = 25
let hasVoterId : boolean = true

if (age >= 18 && hasVoterId){
    console.log("Eligble for vote")
}

if(age >=18){
    console.log("Above 18 years old")
    if(hasVoterId){
        console.log("Eligble to vote")
    }
}
