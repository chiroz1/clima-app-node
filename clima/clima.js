const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d25d3fff104cec9783bdfa54b1d7b52f`)

    let temp = resp.data.main.temp;
    let tempMinima = resp.data.main.temp_min;
    let tempMaxima = resp.data.main.temp_max;

    return {
        temperatura: temp,
        minima: tempMinima,
        maxima: tempMaxima
    }
}

module.exports = {
    getClima
}