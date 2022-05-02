let hello = (name, dogname ) => {
    const str = ["has a dog named"];
    const result = [name,...str,dogname];
    return  result;
}


console.log(hello("bot1","popoye"));
console.log(typeof hello("bot1","popoye"));
console.log( Array.isArray(hello("bot2","potter")));