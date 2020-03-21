function attachEvents() {

    let BASE_URL = 'https://judgetests.firebaseio.com/locations.json';
    let W_URL = `https://judgetests.firebaseio.com/forecast/{status}/{code}.json`;

    const elements = {
        locationInput: document.querySelector('#location'),
        button: document.querySelector('#submit'),
        notificationHeading: document.querySelector('h1.notification')
    };

    const errHandler = (e) => {
        console.dir(e);
        elements.notificationHeading.textContent = e.message;
        
    }

    const jsonMiddleWare = (r) => r.json();

    elements.button.addEventListener('click', getLocationValue);

    function getLocationValue() {
        const location = elements.locationInput.value;

        fetch(BASE_URL)
        .then(jsonMiddleWare)
        .then((d) => {
            const {name, code } = d.find((o) => o.name === location);
            //console.log(name);
            const CURRENT_TODAY_URL = W_URL.replace('{status}/{code}', `today/${code}`);
            const CURRENT_UPCOMING_URL = W_URL.replace('{status}/{code}', `upcoming/${code}`)

           Promise.all([
                fetch(CURRENT_TODAY_URL).then(jsonMiddleWare),
                fetch(CURRENT_UPCOMING_URL).then(jsonMiddleWare)
           ])
           
           .then(showWeatherLocation)
           .catch(errHandler)
        })
        .catch(errHandler);
        
    }

    function showWeatherLocation([todayData, upcomingData]){
        console.log(todayData);
        
    }

    function createHTMLElement(tagName, classNames, textContent) {
        let element = document.createAttribute(tagName);
        if (classNames) {
            element.classList.add(...classNames);
        }
        if (textContent) {
            element.textContent = textContent;
        }

        return element;
    }



}

attachEvents();