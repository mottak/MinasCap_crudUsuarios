import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/index'
import UserModel from "../../src/infra/sequelize/models/User";
import { expect } from 'chai'
import { allUsers, userById } from './mocks/userMocks';

chai.use(chaiHttp);


describe('GET /api/user', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('Retorna os usuários existentes com sucesso - status 200', async () => {
    sinon.stub(UserModel, 'findAll').resolves(allUsers as any)

    const result = await chai.request(app).get('/api/user')

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.an('array')
    expect(result.body[0]).to.have.property('id')
    expect(result.body[0]).to.have.property('name')
    expect(result.body[0]).to.have.property('email')

  })

  it('Retornar status 500 se o banco de dados não resolver', async () => {
    sinon.stub(UserModel, 'findAll').rejects();
    const result = await chai.request(app).get('/api/user')

    expect(result.status).to.be.equal(500);
  })

})

describe('GET /api/user/:id', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('Retorna o usuário com sucesso - status 200', async () => {
    sinon.stub(UserModel, 'findByPk').resolves(userById as any)

    const result = await chai.request(app).get('/api/user/1')

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.an('object')
    expect(result.body).to.have.property('id')
    expect(result.body).to.have.property('name')
    expect(result.body).to.have.property('email')

  })

  it('Tenta buscar um usuário com id que não existe no banco de dados - status 404', async () => {
    sinon.stub(UserModel, 'findByPk').resolves(null)

    const result = await chai.request(app).get('/api/user/50')

    expect(result.status).to.be.equal(404);
    expect(result.body).to.be.an('object');
    expect(result.body).to.have.property('message');
    expect(result.body).to.be.deep.equal({
      message: "Não existe usuário com o id informado."
    });

  })

})

describe('POST /api/user', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('Cria um novo usuário no banco de dados - status 201', async () => {
    sinon.stub(UserModel, 'create').resolves(userById as any)

    const result = await chai.request(app)
      .post('/api/user')
      .send({
        name:'Raissa da Silva',
        email: 'raissa@email.com'
      })

    expect(result.status).to.be.equal(201);
    expect(result.body).to.be.an('object')
    expect(result.body).to.have.property('id')
    expect(result.body).to.have.property('name')
    expect(result.body).to.have.property('email')

  })

  it('Tenta cadastrar um novo usuário com nome menor que 3 letras', async () => {
    const result = await chai.request(app)
      .post('/api/user')
      .send({
        name:'Ra',
        email: 'raissa@rmail.com'
      })

    expect(result.status).to.be.equal(400);
    expect(result.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' })
  })

  it('Tenta cadastrar um novo usuário com email invalido', async () => {
    const result = await chai.request(app)
      .post('/api/user')
      .send({
        name:'Raissa da Silva',
        email: 'raissarmail.com'
      })

    expect(result.status).to.be.equal(400);
    expect(result.body).to.be.deep.equal({ message: '"email" must be a valid email' })
  })

})

describe('PUT /api/user/:id', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('Atualiza um usuário no banco de dados - status 200', async () => {
    sinon.stub(UserModel, 'update').resolves()

    const result = await chai.request(app)
      .put('/api/user/2')
      .send({
        name: 'Raissa da Silva',
      })

    expect(result.status).to.be.equal(200);
    expect(result.body).to.be.an('object')
    expect(result.body).to.have.property('message')
    expect(result.body).to.be.deep.equal({ message: 'Usuário atualizado com sucesso.'})

  })

  it('Tenta atualizar um novo usuário com nome menor que 3 letras', async () => {
    const result = await chai.request(app)
      .put('/api/user/1')
      .send({
        name:'Ra',
      })

    expect(result.status).to.be.equal(400);
    expect(result.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' })
  })

})







