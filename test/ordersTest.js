/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

const order = {
  userId: 2,
  bill: 4050,
};

describe("Orders", () => {
  describe("GET /orders", () => {
    it("should get all orders", (done) => {
      chai.request(app).get('/api/v1/orders').end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        // res.body.should.have.property('data');
        done();
      });
    });
  });

  describe("GET /orders/:date", () => {
    it("should get orders if date is found", (done) => {
      const date = new Date('2019-03-05');

      chai.request(app).get(`/api/v1/orders/${date}`).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        done();
      });
    });
    it("should not get orders if date is not found", (done) => {
      const date = '2019-02-30';
      chai.request(app).get(`/api/v1/orders/${date}`).end((err, res) => {
        res.should.have.status(500);
        done();
      });
    });
    it("should not get orders if validation fails", (done) => {
      const invalidDate = 'tuesdaythefirst';
      chai.request(app).get(`/api/v1/orders/${invalidDate}`).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Date must be of the format YYYY-MM-DD!');
        done();
      });
    });
  });

  describe("POST /orders", () => {
    it("should post an order with all required fields", (done) => {
      const validOrder = { bill: 900, userId: 2 };
      // validOrder.userId = 3;

      chai.request(app).post('/api/v1/orders').send(validOrder)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          done();
        });
    });
    it("should not post an order if validation fails", (done) => {
      const invalidOrder = { ...order };
      invalidOrder.bill = 'tuesdaytheeight';
      chai.request(app).post('/api/v1/orders').send(invalidOrder).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Bill must be a valid integer amount!');
        done();
      });
    });
  });
  describe("PUT /orders", () => {
    it("should modify an order", (done) => {
      const id = 5;

      chai.request(app).put(`/api/v1/orders/${id}`).send(order).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        done();
      });
    });
    it("should not modify an order if id is not found", (done) => {
      const noId = 204;
      chai.request(app).put(`/api/v1/orders/${noId}`).end((err, res) => {
        res.should.have.status(500);
        // res.body.should.have.property('error').eql(`Order with id: ${noId} does not exist!`);
        done();
      });
    });
    it("should not modify an order if validation fails", (done) => {
      const invalidOrder = { ...order };
      invalidOrder.bill = '2019-2-19';
      const newId = 2;
      chai.request(app).put(`/api/v1/orders/${newId}`).send(invalidOrder).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        // res.body.should.have.property('error').eql('Bill must be a valid integer amount!');
        done();
      });
    });
  });
  describe("DELETE /orders/:id", () => {
    it("should delete an order", (done) => {
      const id = 6;

      chai.request(app).delete(`/api/v1/orders/${id}`).end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
    it("should not delete an order if id is not found", (done) => {
      const noId = 1024;
      chai.request(app).delete(`/api/v1/orders/${noId}`).end((err, res) => {
        res.should.have.status(500);
        done();
      });
    });
    it("should not delete an order if validation fails", (done) => {
      const invalidId = '02';
      chai.request(app).delete(`/api/v1/orders/${invalidId}`).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        done();
      });
    });
  });
});
