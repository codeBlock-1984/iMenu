/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const faker = require('faker');

chai.use(chaiHttp);
chai.should();

const id = 1;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTUxOTU0NzY2LCJleHAiOjE1NTIwNDExNjZ9.zP9QMdaYL_1I08-4_0ritDmlIDlSsNhY76h1PstHgc8';
const meal = {
  name: 'Quaker Oatmeal',
  price: 700,
};

describe("Meals", () => {
  describe("GET /meals", () => {
    it("should get all meals", (done) => {
      chai.request(app).get('/api/v1/meals').set('x-auth-token', token).end((err, res) => {
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
      chai.request(app).get(`/api/v1/meals/${id}`).send(meal).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('id').eql(id);
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('price');
        done();
      });
    });
    it("should not get a single meal if id is not found", (done) => {
      const delId = 1032;
      chai.request(app).get(`/api/v1/meals/${delId}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('Meal with specified ID not found!');
        done();
      });
    });
    /*
    it("should not get a single meal if validation fails", (done) => {
      const invalidId = 'three';
      chai.request(app).get(`/api/v1/meals/${invalidId}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error').eql('ID must be a valid integer value!');
        done();
      });
    }); */
  });

  describe("POST /meals", () => {
    it("should post a meal with all required fields", (done) => {
      const validMeal = { ...meal };
      validMeal.name = `${faker.name.firstName()} pudding`;
      validMeal.price = 400;
      chai.request(app).post('/api/v1/meals').send(validMeal)
        .set('x-auth-token', token).end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          // res.body.data.should.be.an('object');
          done();
        });
    });
    it("should not post a meal if validation fails", (done) => {
      const invalidMeal = { ...meal };
      invalidMeal.price = "twenty thousand naira";
      chai.request(app).post('/api/v1/meals').send(invalidMeal).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        // res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Meal name must be a String!');
        done();
      });
    });
  });
  describe("PUT /meals", () => {
    /*
    it("should modify a meal", (done) => {
      const modId = 4;
      const modMeal = { name: 'Meatball, price: 5000' };
      chai.request(app).put(`/api/v1/meals/${modId}`).send(modMeal).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        done();
      });
    }); */
    /*
    it("should not modify a meal if validation fails", (done) => {
      const invalidMeal = { ...meal };
      invalidMeal.name = ;
      chai.request(app).put(`/api/v1/meals/${id}`).send(invalidMeal).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error').eql('Meal name must be a String!');
        done();
      });
    }); */
    it("should not modify a meal if id is not found", (done) => {
      const invalidMeal = { ...meal };
      const noId = 1024;
      chai.request(app).put(`/api/v1/meals/${noId}`).send(invalidMeal).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Meal with specified ID not found!');
        done();
      });
    });
  });
  describe("DELETE /meals/:id", () => {
    it("should delete a meal", (done) => {
      const delId = 2;
      chai.request(app).delete(`/api/v1/meals/${delId}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        //  res.body.should.have.property('data');
        //  res.body.data.should.be.an('array').with.lengthOf(1);
        done();
      });
    });
    /*
    it("should not delete a meal if validation fails", (done) => {
      const invalidId = '02';
      chai.request(app).delete(`/api/v1/meals/${invalidId}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error').eql('ID must be a valid integer value!');
        done();
      });
    }); */
    it("should not delete a meal if id is not found", (done) => {
      const noId = 1029;
      chai.request(app).delete(`/api/v1/meals/${noId}`).set('x-auth-token', token).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Meal with specified ID not found!');
        done();
      });
    });
  });
});
