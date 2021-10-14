// const person = {
//     name : "gomnam",
//     lastName : "gomnaman",
//     get fullName(){
//         console.log(`${person.name} ${person.lastName}`);
//     },
//     set fullName (value) {
//         const parts = value.split(" ");
//         this.name = parts[0];
//         this.lastName = parts[1];
//     },
// };
// person.fullName = true;
// person.fullName;
// Uncaught TypeError: value.split is not a function
// at Objec set fullName [as fullName]



//solotion 1

const person1 = {
    name : "gomnam",
    lastName : "gomnaman",
    get fullName(){
        console.log(`${person1.name} ${person1.lastName}`);
    },
    set fullName (value) {
        if (typeof value!== "string") return ;
        const parts = value.split(" ");
        this.name = parts[0];
        this.lastName = parts[1];
    },
};
person1.fullName = true;
person1.fullName;
//gomnam gomnaman


//we dont want exit we want exit and show message
const person2 = {
    name : "gomnam",
    lastName : "gomnaman",
    get fullName(){
        console.log(`${person2.name} ${person2.lastName}`);
    },
    set fullName (value) {
        if (typeof value!== "string")
        throw new Error (" fullName is not valid"); 
        const parts = value.split(" ");
        this.name = parts[0];
        this.lastName = parts[1];
    },
};
person2.fullName;

try{
    person2.fullName = true;
}catch (error){
    alert(error);
}
// Error:  fullName is not valid