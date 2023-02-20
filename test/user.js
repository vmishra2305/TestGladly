import supertest from 'supertest';
import { expect } from 'chai';
require('dotenv').config();
const request = supertest(process.env.X_URL);

const token = process.env.X_PASS;

describe('Users', ()=>{
    it(`GET /users`, (done)=>{
        request.get(`users?access-token=${token}`).end((err,res) => {
            expect(res.body).to.not.be.empty;
            done();
        })
    })

    it(`GET /users/1`, (done)=>{
        request.get(`users?gender=female&status=active&access-token=${token}`).end((err,res) => {
            var counter=1;
            res.body.forEach(data => {
                expect(data.gender).to.be.eq('female');
                expect(data.status).to.be.eq('active');
            });
            done();
        })
    })
})
