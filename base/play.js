let person = {
    name: 'Porra Lopes',
    age: 20,
    great() {
        console.log('Hi, I am ' + this.name);
    }
};

let personCopy = {...person};

personCopy.name = 'Lopes 2';

console.log(person);
console.log(personCopy);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2));