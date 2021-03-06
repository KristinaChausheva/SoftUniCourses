function result() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }
    
        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
            ;
    
        }

        getSalary() {
            return this.salary;
        }
    }
    
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.')
        }

        getSalary() {
            return this.salary;
        }
    }
    
    class Senior extends Employee {
        constructor(name, age) {
            super(name,age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }

        getSalary() {
            return this.salary;
        }
    }
    
    class Manager extends Employee {
        constructor(name,age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }
    
        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

result = result();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);
var guy4 = new result.Employee('ivanka', 33)
//console.log(guy3.hasOwnProperty('divident'));
guy2.salary = 1200;
guy3.divident = 200
console.log(guy3.collectSalary());
//console.log(guy3.salary);

//console.log(guy3.getSalary());


