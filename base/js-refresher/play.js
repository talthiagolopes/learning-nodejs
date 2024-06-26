let person = {
    name: 'Thiago Lopes',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

let personCopy = {...person};

personCopy.name = 'Lopes 2';

console.log(person);
console.log(personCopy);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2));