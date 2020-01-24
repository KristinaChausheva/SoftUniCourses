function solve(params) {
    let parsedData = params.reduce((db, componentData) => {
        let [systemName, componentName, subComponentName] = componentData.split("|").map(x => x.trim());

        if (db[systemName]) {
            db[systemName] = {[componentName] : [subComponentName]}
            return db;
        }

        if (!db[systemName][componentName]) {
            db[systemName][componentName] = [...db[systemName][componentName], subComponentName];
            return db;
        }

        db[systemName][componentName] = [...db[systemName][componentName], subComponentName];


        return db;
    }, {})
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]	
)
