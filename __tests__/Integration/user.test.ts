import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/index'
import { UserDAO } from '../../src/infra/daos/userDaos';
import { expect } from 'chai'
import { allUsers, userById } from './mocks/userMocks';

chai.use(chaiHttp);


describe('GET /api/user', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('Retorna os usuários existentes com sucesso - status 200', async () => {
    sinon.stub(UserDAO.prototype, 'findAll').resolves(allUsers)

    const result = await chai.request(app).get('/api/user')

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.an('array')
    expect(result.body[0]).to.have.property('id')
    expect(result.body[0]).to.have.property('name')
    expect(result.body[0]).to.have.property('email')

  })

  it('Retornar status 500 se o banco de dados não resolver', async () => {
    sinon.stub(UserDAO.prototype, 'findAll').rejects();
    const result = await chai.request(app).get('/api/user')

    expect(result.status).to.be.equal(500);
  })

})






