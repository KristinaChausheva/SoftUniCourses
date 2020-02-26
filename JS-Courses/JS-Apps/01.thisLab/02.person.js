class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        //this.fullName = `${firstName} ` + `${lastName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        return this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        return this._lastName = value;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const [first, last] = value.split(" ");

        if (first !== undefined && last !== undefined) {
            this.firstName = first;
            this.lastName = last;
        }

        return `${this.firstName} ${this.lastName}`;
    }
    

}

let person = new Person('Peter','Ivanov');
console.log(person.fullName);
person.firstName = 'Ivan';
console.log(person.fullName);
console.log(person.firstName);


