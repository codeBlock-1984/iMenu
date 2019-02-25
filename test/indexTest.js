/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe("Index", () => {
  describe("GET /", () => {
    it("should display home page", (done) => {
      chai.request(app).get('/').end((err, res) => {
        res.should.have.status(200);
        res.should.have.header('Content-Type', "text/html; charset=utf-8");
        done();
      });
    });
  });
});
