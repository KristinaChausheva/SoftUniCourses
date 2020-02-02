function solve() {
    let optionList = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    binaryOption.textContent = "binary";
    let hexOption = document.createElement('option');
    
    hexOption.textContent = "hex";
    optionList.appendChild(binaryOption);
    document.getElementById("selectMenuTo").appendChild(hexOption);

    let button = document.getElementsByTagName('button')[0];

    let input = document.getElementById('input');
    button.addEventListener('click', (e) => {
        let result;
        if (optionList.value === 'binary') {
            result = (Number(input.value)).toString(2);
            
        } else {
            result = (Number(input.value)).toString(16).toUpperCase();
        }
        document.getElementById('result').value = result;
    })
}