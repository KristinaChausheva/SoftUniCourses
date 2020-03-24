export const apiKey = 'https://books-f27fe.firebaseio.com/';

export const getAllBooks = () => {
    return fetch(apiKey + 'books.json');
};

export const createNewBook = (bookBody) => {
    return fetch(apiKey + 'books.json', {
        method: 'POST',
        body: JSON.stringify(bookBody)
    });
};

export const updateBook = (bookBody, bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`,{
        method: 'PUT',
        body: JSON.stringify(bookBody)
    });
};

export const deleteBook = (bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`)
}

