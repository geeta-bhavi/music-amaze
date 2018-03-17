const request = require('supertest');
const expect = require('expect');
const sinon = require('sinon');
const User = require('../models/User');
const app = require('../app');
const searchStr = 'sa';
const albumId = 272;
const trackId = 396;
const artistId = 34;


const user = {
  userId: 1016,
  username: 'test',
  password: 'test123'
};
const inValidUser = {
  userId: 1016,
  username: 'test',
  password: 'test12'
};

describe('Authenticated Get tests', () => {
  var cookie = null;

  before((done) => {
    request(app)
      .post('/login')
      .send(user)
      .end(function(err, res) {
        if (err) throw err;
        cookie = res.headers['set-cookie'];
        done();
      });
  });

  describe('GET /user/home', () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/user/home')
        .set('cookie', cookie)
        .expect(200, done);
    });
  });

  describe('GET /user/editProfile', () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/user/editProfile')
        .set('cookie', cookie)
        .expect(200, done);
    });
  });

  describe('GET /user/changePassword', () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/user/changePassword')
        .set('cookie', cookie)
        .expect(200, done);
    });
  });

  describe(`GET /search/${searchStr}`, () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/search/${searchStr}')
        .set('cookie', cookie)
        .expect(200, done);
    });
  });

  describe(`GET /search/tracks/${searchStr}`, () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/search/tracks/${searchStr}')
        .set('cookie', cookie)
        .expect(200, done);
    });
  });

  describe(`GET /search/artists/${searchStr}`, () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/search/artists/${searchStr}')
        .set('cookie', cookie)
        .expect(200, done);
    });
  });

  describe(`GET /search/albums/${searchStr}`, () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/search/albums/${searchStr}')
        .set('cookie', cookie)
        .expect(200, done);
    });
  });
});

describe('POST /login', () => {

  it('should create user session for valid user', (done) => {
    request(app)
      .post('/login')
      .send(user)
      .expect(200, done);
  });

  it('should throw 401 for invalid user', (done) => {
    request(app)
      .post('/login')
      .send(inValidUser)
      .end(function(err, res) {
        expect(401);
        expect(res.body).toInclude({
          msg: 'Invalid email or password.'
        });
        done();
      });
  });

});

describe('POST /signup', () => {

  const alreadyExistingEmail = {
    email: 'test@gmail.com',
    username: 'test1',
    password: 'test12'
  }

  const alreadyExistingName = {
    email: 'test1@gmail.com',
    username: 'test',
    password: 'test12'
  }

  it('should not create user when a user with the same email already exists', (done) => {
    request(app)
      .post('/signup')
      .send(alreadyExistingEmail)
      .end(function(err, res) {
        expect(400);
        expect(res.body).toInclude({
            msg: 'Account with that email address already exists.'
        });
        done();
      });
  });

  it('should not create user when a user with the same name already exists', (done) => {
    request(app)
      .post('/signup')
      .send(alreadyExistingName)
      .end(function(err, res) {
        expect(400);
        expect(res.body).toInclude({
          msg: 'Account with that username already exists.'
        });
        done();
      });
  });

});

describe('POST /user/editProfile', () => {
  var cookie = null;

  const alreadyExistingEmail = {
    userId: 1016,
    email: 'olive@gmail.com',
    username: 'test'
  }

  const alreadyExistingName = {
    userId: 1016,
    email: 'test@gmail.com',
    username: 'olive'
  }

  before((done) => {
    request(app)
      .post('/login')
      .send(user)
      .end(function(err, res) {
        if (err) throw err;
        cookie = res.headers['set-cookie'];
        done();
      });
  });

  it('should not edit profile of a user when a user with the same email already exists', (done) => {
    request(app)
      .post('/user/editProfile')
      .set('cookie', cookie)
      .send(alreadyExistingEmail)
      .end(function(err, res) {
        expect(400);
        expect(res.body).toInclude({
            msg: 'The email address you have entered is already associated with an account'
        });
        done();
      });
  });

  it('should not edit profile of a user when a user with the same name already exists', (done) => {
    request(app)
      .post('/user/editProfile')
      .set('cookie', cookie)
      .send(alreadyExistingName)
      .end(function(err, res) {
        expect(400);
        expect(res.body).toInclude({
          msg: 'The username is already in use'
        });
        done();
      });
  });

});
