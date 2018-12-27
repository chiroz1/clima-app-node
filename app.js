//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);

        let tmp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${tmp.temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clime en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));


clima.getClima(32.6245389, -115.4522623)
    .then(resp => {
        console.log(resp.temperatura);
    })
    .catch(e => console.log(e)); */