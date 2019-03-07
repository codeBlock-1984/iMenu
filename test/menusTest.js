/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

const newDate = new Date();
const thisDay = newDate.toISOString().slice(0, 10);
const menu = {
  menuDate: thisDay,
};

describe("Menus", () => {
  describe("GET /menus", () => {
    it("should get all menus", (done) => {
      chai.request(app).get('/api/v1/menus').end((err, res) => {
        res.body.should.have.property('status').eql(500);
        res.body.should.be.an('object');
        // res.body.should.have.property('data');
        // res.body.data.should.be.an('array');
        done();
      });
    });
  });
  describe("GET /menus/:date", () => {
    it("should get a single menu if date is found", (done) => {
      const date = new Date('2019-03-05');

      chai.request(app).get(`/api/v1/menus/${date}`).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        done();
      });
    });
    it("should not get a single menu if date is not found", (done) => {
      const date = '2019-02-01';
      chai.request(app).get(`/api/v1/menus/${date}`).end((err, res) => {
        res.should.have.status(500);
        // res.body.should.have.property('error').eql('Menu with specified date does not exist!');
        done();
      });
    });
    it("should not get a single menu if validation fails", (done) => {
      const invalidDate = 'wednesdaythefifth';
      chai.request(app).get(`/api/v1/menus/${invalidDate}`).end((err, res) => {
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
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          // res.body.should.have.property('data');
          done();
        });
    });
    it("should not post a menu if validation fails", (done) => {
      const invalidMenu = { ...menu };
      invalidMenu.menuDate = 'augustthe eleventh';
      chai.request(app).post('/api/v1/menus').send(invalidMenu).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Date must be of the format YYYY-MM-DD!');
        done();
      });
    });
  });
});
