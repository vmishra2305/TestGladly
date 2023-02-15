import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://gorest.co.in/public/v2/');

const token = 'dfb5b96fb909ee8beb16ac4f2694b4cd30f164c3b41cd6cb07dc4076b5e12091';

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
