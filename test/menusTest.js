/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTUxOTU0NzY2LCJleHAiOjE1NTIwNDExNjZ9.zP9QMdaYL_1I08-4_0ritDmlIDlSsNhY76h1PstHgc8';
const newDate = new Date();
const thisDay = newDate.toISOString().slice(0, 10);
const menu = {
  menuDate: thisDay,
};

describe("Menus", () => {
  describe("GET /menus", () => {
    it("should get all menus", (done) => {
      chai.request(app).get('/api/v1/menus').set('x-auth-token', token).end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.be.an('object');
        // res.body.should.have.property('data');
        // res.body.data.should.be.an('array');
        done();
      });
    });
  });
  describe("GET /menus/:date", () => {
    it("should get a single menu if date is found", (done) => {
      const date = new Date('2019-03-01');

      chai.request(app).get(`/api/v1/menus/${date}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        done();
      });
    });
    it("should not get a single menu if date is not found", (done) => {
      const date = '2019-02-01';
      chai.request(app).get(`/api/v1/menus/${date}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('Menu with specified date not found!');
        done();
      });
    });
    it("should not get a single menu if validation fails", (done) => {
      const invalidDate = 'wednesdaythefifth';
      chai.request(app).get(`/api/v1/menus/${invalidDate}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Date must be of the format YYYY-MM-DD!');
        done();
      });
    });
  });

  describe("POST /menus", () => {
    it("should post a menu with all required fields", (done) => {
      chai.request(app).post('/api/v1/menus').send(menu)
        .set('x-auth-token', token)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          // res.body.should.have.property('data');
          done();
        });
    });
    it("should not post a menu if validation fails", (done) => {
      const invalidMenu = { ...menu };
      invalidMenu.menuDate = 'augustthe eleventh';
      chai.request(app).post('/api/v1/menus').send(invalidMenu).set('x-auth-token', token)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.an('object');
          res.body.should.have.property('status');
          // res.body.should.have.property('error').eql('Date must be of the format YYYY-MM-DD!');
          done();
        });
    });
  });
});
