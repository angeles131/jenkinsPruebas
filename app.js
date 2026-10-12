const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola desde mi API de Jenkins!\n');
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}

module.exports = server;
