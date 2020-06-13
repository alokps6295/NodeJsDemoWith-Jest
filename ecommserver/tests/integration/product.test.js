const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { product } = require('../../src/models');
const { productOne, productTwo,userOne, admin, insertUsers,insertProducts } = require('../fixtures/userAndPeoductFixture.fixture');
const { userOneAccessToken} = require('../fixtures/token.fixture');

setupTestDB();

describe('product routes', () => {
  describe('POST /product', () => {
    let newUser;

    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'password1',
        role: 'user',
      };
      jest.setTimeout(4900);
    });

    test('should return 201 and successfully create new product if data is ok', async () => {
      await insertUsers([userOne]);
      const resp = await request(app)
      .post('/auth/register')
      .send(newUser)
      .expect(httpStatus.CREATED);
      productOne['usermail']=newUser.email;
      console.log(resp.body.token,"resp......");
      const res = await request(app)
        .post('/product/addProduct')
        .set('Authorization', `Bearer ${resp.body.token}`)
        .send(productOne)
        .expect(httpStatus.CREATED);
    });


    test('should return 401 error is access token is missing', async () => {
      await request(app).post('/product/addProduct').send(productOne).expect(httpStatus.UNAUTHORIZED);
    });

  });

  describe('GET /product/getAllProduct', () => {
    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'password1',
        role: 'user',
      };
      jest.setTimeout(4900);
    });
    test('should return 200 and all users', async () => {
      const resp = await request(app)
      .post('/auth/register')
      .send(newUser)
      .expect(httpStatus.CREATED);
      productOne['usermail']=newUser.email;
      productTwo['usermail']=newUser.email;

      await insertProducts([productOne, productTwo]);

      const res = await request(app)
        .get('/product/getAllProduct')
        .set('Authorization', `Bearer ${resp.body.token}`)
        .send()
        .expect(httpStatus.OK);
console.log(res.body,"array.....")
      expect(res.body.allDocs).toBeInstanceOf(Array);
      expect(res.body.allDocs).toHaveLength(2);
    });

    test('should return 401 if access token is missing', async () => {
      await insertProducts([productOne, productTwo]);

      await request(app).get('/product/getAllProduct').send().expect(httpStatus.UNAUTHORIZED);
    });
  });

  describe('GET /product/fetchProduct', () => {
    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'password1',
        role: 'user',
      };
      jest.setTimeout(4900);
    });
    test('should return 200 and the user object if data is ok', async () => {
      const resp = await request(app)
      .post('/auth/register')
      .send(newUser)
      .expect(httpStatus.CREATED);
      productOne['usermail']=newUser.email;
      productTwo['usermail']=newUser.email;

      await insertProducts([productOne, productTwo]);
      const res = await request(app)
        .get(`/product/fetchProduct?usermail=${newUser.email}`)
        .set('Authorization', `Bearer ${resp.body.token}`)
        .send()
        .expect(httpStatus.OK);
    });

    test('should return 401 error if access token is missing', async () => {
      await insertUsers([userOne]);
      await request(app).get(`/product/fetchProduct?${userOne.email}`).send().expect(httpStatus.UNAUTHORIZED);
    });

  });


});
