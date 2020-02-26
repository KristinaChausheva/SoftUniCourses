class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error('There is not enough space on the hard drive"');
        }

        const installedProgram = {
            name,
            requiredSpace
        };
        this.installedPrograms.push(installedProgram);
        this.hddMemory -= requiredSpace;
        return installedProgram;
    }

    uninstallAProgram(name) {
        const found = this.installedPrograms.find(element => element.name === name);
        if (!found) {
            throw new Error('Control panel is not responding');
        }
        const index = this.installedPrograms.indexOf(found);

        this.hddMemory += found.requiredSpace;
        return this.installedPrograms.splice(index, 1);
    }

    openAProgram(name) {
        
        const found = this.installedPrograms.find(element => element.name === name);
        let ramUsage = found.requiredSpace / this.ramMemory * 1.5;
        let cpuUsage = ((found.requiredSpace / this.cpuGHz) / 500) * 1.5;
        const openedProgram = {
            name,
            ramUsage,
            cpuUsage
        }
        if (!found) {
            throw new Error(`The ${openedProgram.name} is not recognized`);
        }
        if (this.taskManager.find(element => element.name === name)) {
            throw new Error(`The ${openedProgram.name} is already open`);
        }


        
        if (ramUsage >= 100) {
            throw new Error(`${openedProgram.name} caused out of memory exception`)
        }
        
        if (cpuUsage >= this.cpuGHz) {
            throw new Error(`${openedProgram.name} caused out of cpu exception`)
        }
       
        this.taskManager.push(openedProgram);

        return openedProgram;
    }

    taskManagerView() {
        
        if (this.taskManager === []) {
            return `All running smooth so far`;
        } else {

            let str= ""
            //return this.taskManager
            for (let i = 0; i < this.taskManager.length; i++) {
                const element = this.taskManager[i];
                str += `Name - ${element.name} | Usage - CPU: ${element.cpuUsage.toFixed(0)}%, RAM: ${element.ramUsage.toFixed(0)}% \n`
                //output.push(`Name - ${element.name} | Usage - CPU: ${element.cpuUsage.toFixed(0)}%, RAM: ${element.ramUsage.toFixed(0)}%`) 
                
            }
            return str
            // return `Name - ${openedProgram.name} | Usage - CPU: ${openedProgram.cpuUsage.toFixed(0)}%, RAM: ${openedProgram.ramUsage.toFixed(0)}%`
        }
        
    }

}

let computer = new Computer(4096, 7.5, 25000);

computer.installAProgram('Word', 7000);
console.log(computer.hddMemory);

computer.installAProgram('Excel', 10000);
console.log(computer.hddMemory);
computer.installAProgram('PowerPoint', 1000);
console.log(computer.hddMemory);
computer.uninstallAProgram('Word');
console.log(computer.hddMemory);
computer.installAProgram('Solitare', 1500);
console.log(computer.hddMemory);

computer.openAProgram('hgrfsyh');
computer.openAProgram('Solitare');

console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);






