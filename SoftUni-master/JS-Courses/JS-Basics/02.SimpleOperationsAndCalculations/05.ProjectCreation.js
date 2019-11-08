function ProjectCreation(input) {
    let name = input.shift();
    let countProjects = Number(input.shift());

    console.log(`The architect ${name} will need ${3 * countProjects} hours to complete ${countProjects} project/s.`);

}

ProjectCreation(["George", 4])