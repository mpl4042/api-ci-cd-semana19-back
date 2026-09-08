const request = require('supertest');
const app = require('../src/app');

describe('Testes da API', () => {
    it('Deve retornar status 200 e a mensagem de sucesso na raiz', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe("Texto Erradoooo!");
    });
});
