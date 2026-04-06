const person = {
    firstName: "Ajay",
    lastName: "Jain",
    age:25 
};
for (let x in person){
    console.log("person details:" + x + ":" + person[x])
}