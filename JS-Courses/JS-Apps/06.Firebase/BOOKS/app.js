import { apiKey, createNewBook } from './firebase-requests.js';

function extractFormData (formRef, formConfig) {
    return formConfig.reduce((acc, inputName) => {
        acc[inputName] = formRef.elements[inputName].value;
        return acc;
    }, {})
}

function doStuff() {

    let formInputs = ['title', 'author', 'isbn'];

    let formRef = document.querySelector('form');

    formRef.addEventListener('submit', (e) => {
        e.preventDefault();

        let parsedForm = extractFormData(formRef, formInputs)
        createNewBook(parsedForm);


    })

    console.log(apiKey);

}

doStuff();