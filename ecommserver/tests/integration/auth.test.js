const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const httpMocks = require('node-mocks-http');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const app = require('../../src/app');
const config = require('../../src/config/config');
const auth = require('../../src/middlewares/auth');
const ApiError = require('../../src/utils/ApiError');
const setupTestDB = require('../utils/setupTestDB');
const { user, product } = require('../../src/models');
const { roleRights } = require('../../src/config/roles');
const { userOne,insertUsers } = require('../fixtures/userAndPeoductFixture.fixture');
const { userOneAccessToken} = require('../fixtures/token.fixture');

setupTestDB();

describe('Auth routes', () => {
  describe('POST /auth/register', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'password1',
      };
      jest.setTimeout(3000);
    });

    test('should return 201 and successfully register user if request data is ok', async () => {
      const res = await request(app).post('/auth/register').send(newUser).expect(httpStatus.CREATED);
      console.log(res.body,"res given");
     // expect(res.body.user).not.toHaveProperty('password');
      expect(res.body).toEqual({ token: expect.anything()});
    });
  });
})
