const request = require('supertest');
const app = require('../app');
const expect = require('expect');

describe('Routes:', () => {
  describe('GET /', () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });

  describe('GET /login', () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/login')
        .expect(200, done);
    });
  });

  describe('GET /signup', () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/signup')
        .expect(200, done);
    });
  });

  describe('GET /forgotPassword', () => {
    it('should return 200 OK', (done) => {
      request(app)
        .get('/forgotPassword')
        .expect(200, done);
    });
  });

  describe('GET /user/home', () => {
    it('should return 302', (done) => {
      request(app)
        .get('/user/home')
        .expect(302)
        .end(function(err, res) {
          expect(res.headers.location).toBe('/login')
          done();
        });
    });
  });

  describe('GET /user/editProfile', () => {
    it('should return 302', (done) => {
      request(app)
        .get('/user/editProfile')
        .expect(302)
        .end(function(err, res) {
          expect(res.headers.location).toBe('/login')
          done();
        });
    });
  });

  describe('GET /user/changePassword', () => {
    it('should return 302', (done) => {
      request(app)
        .get('/user/changePassword')
        .expect(302)
        .end(function(err, res) {
          expect(res.headers.location).toBe('/login')
          done();
        });
    });
  });

  describe('GET /random-url', () => {
    it('should return 302', (done) => {
      request(app)
        .get('/random-url')
        .expect(302, done);
    });
  });

});
