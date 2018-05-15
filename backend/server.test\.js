const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('API Routes', () => {
  describe('GET /api/v1/users', () => {
    it('return all of the users', () => {
      
    });
  });
});