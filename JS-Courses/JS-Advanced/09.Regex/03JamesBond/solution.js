let key = 'specialKey';
let line = 'In this text the specialKey HELLOWORLD! is correct, but the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while SpeCIaLkeY SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!]'

function solve() {

    // let [key, ...line] = JSON.parse(document.getElementById('array').value);
    // let resultRef = document.getElementById('result');
    let ourRegex = new RegExp(`${key}[ ] +([A-Z!%#\$]{8, })([\., ]|$)`,'gmi');
    line.forEach(dataLine => {
        let replacedLine = dataLine;
        if (dataLine.match(ourREgex)) {
            let matches = dataLine.match(ourRegex)
            .map(x => x.split(" ")[1])
            .filter(str => str === str.toUpperCase('p'))
            .map(x => {

            })
        }

        
        
        // let tempP = document.createElement('p');
        // tempP.innerText = replacedLine;
        // resultRef.appendChild(tempP);
        //line.match(dataLine.ourRegex[1]);
    });
    console.log(ourRegex);
}

solve()
