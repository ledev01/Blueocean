import axios from 'axios'

function fetchAPI() {
    return ( 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
     );
}

export {fetchAPI};