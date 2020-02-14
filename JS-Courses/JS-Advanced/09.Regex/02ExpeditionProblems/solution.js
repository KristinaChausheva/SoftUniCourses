// let key = '4ds';
// let message = 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532'

function solve() {

    let key = document.getElementById('string').value;
    let message = document.getElementById('text').value;
    let resultRef = document.getElementById('result');
    let saveMessage = message.match(`${key}(.+)${key}`)[1];
    let ourRegex = new RegExp(/(?<direction>east|north).*?(?<coordinates>\d{2}).*?,[^,].*?(?<decimals>\d{6})/gmi)
    
    let north;// = message.match(ourRegex).filter(x =>x.match(/^north/ig));
    let east;// = message.match(ourRegex).filter(x => x.match(/^east/ig));
    let temp = ourRegex.exec(message);
    while (temp) {
        if (temp[1].toLowerCase()==='east') {
            east = `${temp[2]}.${temp[3]}`;
        } else {
            north = `${temp[2]}.${temp[3]}`;
        }
        temp = ourRegex.exec(message);
    }
    // console.log(saveMessage);
    
    // console.log(east);
    // console.log(north);

    // let lastNorthElement = north.pop().split(' ').pop(',');
    // let lastEastElement = east.pop().split(' ').pop(',');

    resultRef.innerHTML =  `
    <p>${north} N</p>
    <p>${east} E</p>
    <p>Message: ${saveMessage}</p>
    `;
    

}

// solve()