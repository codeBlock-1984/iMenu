/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe("Meals", () => {
  describe("GET /meals", () => {
    it("should get all meals", (done) => {
      chai.request(app).get('/api/v1/meals').end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.be.an('array');
        done();
      });
    });
  });
  describe("GET /meals/:id", () => {
    it("should get a single meal if id is found", (done) => {
      const id = 2;
      const meal = {
        mealID: 2,
        mealName: 'Turkey',
        mealPrice: 700,
      };
      chai.request(app).get(`/api/v1/meals/${id}`).send(meal).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('mealID').eql(id);
        res.body.data.should.have.property('mealName');
        res.body.data.should.have.property('mealPrice');
        done();
      });
    });
    it("should not get a single meal if id is not found", (done) => {
      const id = 6;
      chai.request(app).get(`/api/v1/meals/${id}`).end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('Meal with specified ID not found!');
        done();
      });
    });
  });

  describe("POST /meals", () => {
    it("should post a meal with all required fields", (done) => {
      const meal = {
        mealID: 2,
        mealName: 'Turkey',
        mealPrice: 700,
      };
      chai.request(app).post('/api/v1/meals').set('Accept', 'application/x-www-form-urlencoded').send(meal)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.be.an('object');
          done();
        });
    });
  });
  describe("PUT /meals", () => {
    it("should modify a meal", (done) => {
      const id = 2;
      const meal = {
        mealID: 2,
        mealName: 'Turkey',
        mealPrice: 700,
      };
      chai.request(app).put(`/api/v1/meals/${id}`).send(meal).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('mealID').eql(id);
        res.body.data.should.have.property('mealName').eql('Turkey');
        res.body.data.should.have.property('mealPrice').eql(700);
        done();
      });
    });
  });
  describe("DELETE /meals/:id", () => {
    it("should delete a meal", (done) => {
      const id = 2;
      const meal = {
        mealID: 2,
        mealName: 'Turkey',
        mealPrice: 700,
      };
      chai.request(app).delete(`/api/v1/meals/${id}`).send(meal).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.be.an('array').with.lengthOf(1);
        done();
      });
    });
  });
});
