class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    getName = () => {   
        return "name is "+this.fname + " " + this.lname;
    }
    
    getAge = () =>{
        return "age is "+this.age;
    }
}

let person1 = new Person("bot","robot",56);

console.log(person1.getName());
console.log(person1.getAge());