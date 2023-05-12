const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        
        it('Responde con status: 200', async () => {
         const response = await request.get('/rickandmorty/character/1')
         expect(response.statusCode).toBe(200)
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1')
            for (const prop in response.body) {
                expect(response.body).toHaveProperty(prop)
            }
           });
        
       it('Si hay un error responde con status: 500', async () => {
         const response = await request.get('/rickandmorty/character/525454j')
         expect(response.statusCode).toBe(500)
        });

           
      })

      describe("GET /rickandmorty/login", () => {
        
        it('Responde con un objeto con la propiedad access en true si la informacion del usuario es correcta', async () => {
         const response = await request.get('/rickandmorty/login?email=kfortuner29@hotmail.com&password=penelope29')
         const access = { access:true };
         expect(response.body).toEqual(access);
        });
      })

      describe("POST /rickandmorty/fav", () => {
        
        it('Responde con un objeto con la propiedad access en false si la informacion del usuario es incorrecta', async () => {
         const response = await request.get('/rickandmorty/login?email=kfortuner29@hotmail.com&password=penelope298')
         const access = { access:false };
         expect(response.body).toEqual(access);
        });
      })
})
