const fs = require('fs');
const colors = require('colors');
let data = '';




let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un numero`)
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ${limite} no es un numero`)
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`Tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}.txt`)
            }
        });
    })
};

let listarTabla = (base, limite) => {

    console.log('=============================='.green);
    console.log(`======Tabla de ${base} =======`.green);
    console.log('=============================='.green);
    if (Number(base) && Number(limite)) {
        for (i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    } else {
        throw (new Error('Error en los parametros'))
    }

}
module.exports = {
    crearArchivo,
    listarTabla
}