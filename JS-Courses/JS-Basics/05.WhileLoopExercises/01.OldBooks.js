function oldBooks(params) {
    const favBook = params.shift();
    const capacity = Number(params.shift());
    let currentBook = 0;
    let currentTitle = "";
    while (currentBook <= capacity) {
        currentTitle = params.shift();
        if (currentTitle == favBook) {
            console.log(`You checked ${currentBook} books and found it.`);
            break;
        }
        
        currentBook++;
    }
    if (currentBook >= capacity) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${capacity} books.`); 
    }
}

oldBooks(["Troy", 3, "Stronger", "Life Style", "Tro", "dcnjk", "fwroi" ])