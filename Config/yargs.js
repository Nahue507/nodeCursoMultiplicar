const opt = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}




const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo con los resultados de multiplicar con base hasta un limite', opt)
    .help()
    .argv


module.exports = {
    argv
}