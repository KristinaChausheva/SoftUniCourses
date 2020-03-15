function attachEvents() {

    const BASE_URL = 'https://judgetests.firebaseio.com/locations.json';

    const elements = {
        locationInput: document.querySelector('#location'),
        button: document.querySelector('#submit'),
        notificationHeading: document.querySelector('h1.notification')
    };

    const errHandler = (e) => {
        console.dir(e);
        elements.notificationHeading.textContent = e.message;
        
    }

    elements.button.addEventListener('click', getLocationValue);

    function getLocationValue() {
        const location = elements.locationInput.value;
        fetch(BASE_URL)
        .then((r) => r.json())
        .then((d) => {
            const locationData = d.find((o) => o.name === location);
            console.log(locationData);
            
        })
        .catch(errHandler)
    }



}

attachEvents();