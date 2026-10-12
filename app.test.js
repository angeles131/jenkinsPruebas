const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    let server;
    beforeAll(() => {
        server = app.listen(4000); // Puerto distinto para test
    });
    
    afterAll((done) => {
        server.close(done);
    });

    it('Debe retornar status 200 y el mensaje esperado', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('¡Hola desde mi API de Jenkins!\n');
    });
});
