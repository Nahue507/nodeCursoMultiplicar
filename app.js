const fs = require('fs');
const argv = require('./Config/yargs').argv;
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar.js')

let comando = argv._[0];
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.blue(archivo)}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('comando no reconocido');
}




// let argumento = argv[2]
// let base = argumento.split('=')[1];