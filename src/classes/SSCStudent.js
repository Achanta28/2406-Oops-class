class SSCStudent {
    constructor(name,gender,age){
        console.log(name,gender,age)
        console.log("Inside Student Constructor");
        this.name= name;
        this.gender = gender;
        this.age = age;
    }
    calculateResult = ()=>{
        console.log("calculateResult")
    }

}
export default SSCStudent;
