class Company {
    constructor(departments) {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department) {
            throw new Error('Invalid input');
        }
        if (salary < 0) {
            throw new Error('Invalid input');
        }
        const emp = {
            username,
            salary,
            position,
            department
        }
        this.departments.push(emp);
        return ` New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment(){

        let totalSalary= 0;
        let counter = 1;
        const departmentTotalSalary = {} //{depName: [totalSalary, counter]}
        let depName = "";
        for (let i = 0; i < this.departments.length; i++) {
            const element = this.departments[i];
            depName = element.department;
            
            if (Object.keys(departmentTotalSalary).includes(depName)) {//totalSalary += Number(element.salary);
                counter++;
               totalSalary += Number(element.salary)
               departmentTotalSalary[depName] = [totalSalary, counter];
               
            } else {
                departmentTotalSalary[depName] = [Number(element.salary), 1];
                totalSalary = Number(element.salary)
                
            }
            
        }
        const departmentAverageSalary = {}

        for (let [key, value] of Object.entries(departmentTotalSalary)) {
            let total = value[0];
            let counter = value[1]
            let av = total/counter
            console.log(`${key}: ${av}`);
          }
        // for (let k = 0; k < Object.keys(departmentTotalSalary).length; k++) {
        //     const el = Object.keys(departmentTotalSalary)[k];
        //     departmentAverageSalary[el] =  
            
        // }

        return departmentTotalSalary

        // for (let i = 0; i < this.departments.length; i++) { // length ===3
        //     let keyArr = Object.keys(this.departments[i])
        //     //console.log(keyArr); //[ 'username', 'salary', 'position', 'department' ]
            
        //     for (let j = 0; j < keyArr.length; j++) {
        //         const element = keyArr[j];
        //         //console.log(keyArr[j]); // salary
                

        //         if (element === 'salary') {
        //             totalSalary += this.departments[i].salary;
        //         }
                
                
        //     }
            
        // }
        // return totalSalary / this.departments.length
        //return this.departments
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


