/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

const order = {
  userID: 4,
  menuID: 1,
  orderDate: '2019-02-14',
  orderBill: 4050,
  orderItems: [
    {
      mealName: 'Coconut Rice',
      mealPrice: 780,
    },
    {
      mealName: 'Okra Stew',
      mealPrice: 1670,
    },
    {
      mealName: 'Yam & Fish Sauce',
      mealPrice: 1600,
    },
  ],
};

describe("Orders", () => {
  describe("GET /orders", () => {
    it("should get all orders", (done) => {
      chai.request(app).get('/api/v1/orders').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.be.an('array');
        done();
      });
    });
  });

  describe("GET /orders/:date", () => {
    it("should get orders if date is found", (done) => {
      const date = '2019-02-14';

      chai.request(app).get(`/api/v1/orders/${date}`).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.be.an('array');
        done();
      });
    });
    it("should not get orders if date is not found", (done) => {
      const date = '2019-02-30';
      chai.request(app).get(`/api/v1/orders/${date}`).end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('No order records on the date specfied!');
        done();
      });
    });
    it("should not get orders if validation fails", (done) => {
      const invalidDate = '2019-2-19';
      chai.request(app).get(`/api/v1/orders/${invalidDate}`).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error').eql('Date must be of the format YYYY-MM-DD!');
        done();
      });
    });
  });

  describe("POST /orders", () => {
    it("should post an order with all required fields", (done) => {
      const newDate = new Date();
      const thisDay = newDate.toISOString().slice(0, 10);
      order.orderDate = thisDay;
      order.userID = 9;

      chai.request(app).post('/api/v1/orders').set('Accept', 'application/x-www-form-urlencoded').send(order)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.be.an('object');
          done();
        });
    });
    it("should not post an order if validation fails", (done) => {
      const invalidOrder = { ...order };
      invalidOrder.orderDate = '2019-2-19';
      chai.request(app).post('/api/v1/orders').send(invalidOrder).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error').eql('Date must be of the format YYYY-MM-DD!');
        done();
      });
    });
  });
  describe("PUT /orders", () => {
    it("should modify an order", (done) => {
      const id = 2;

      chai.request(app).put(`/api/v1/orders/${id}`).send(order).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('orderID').eql(id);
        res.body.data.should.have.property('userID');
        res.body.data.should.have.property('menuID');
        res.body.data.should.have.property('orderBill');
        res.body.data.should.have.property('orderItems');
        res.body.data.orderItems.should.be.an('array');
        done();
      });
    });
    it("should not modify an order if id is not found", (done) => {
      const noId = 9;
      chai.request(app).put(`/api/v1/orders/${noId}`).send(order).end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql(`Order with id: ${noId} does not exist!`);
        done();
      });
    });
    it("should not modify an order if validation fails", (done) => {
      const invalidOrder = { ...order };
      invalidOrder.orderDate = '2019-2-19';
      const newId = 2;
      chai.request(app).put(`/api/v1/orders/${newId}`).send(invalidOrder).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error').eql('Date must be of the format YYYY-MM-DD!');
        done();
      });
    });
  });
  describe("DELETE /orders/:id", () => {
    it("should delete an order", (done) => {
      const id = 2;

      chai.request(app).delete(`/api/v1/orders/${id}`).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.be.an('object');
        done();
      });
    });
    it("should not delete an order if id is not found", (done) => {
      const noId = 9;
      chai.request(app).delete(`/api/v1/orders/${noId}`).end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql(`Order with ID: ${noId} does not exist!`);
        done();
      });
    });
    it("should not delete an order if validation fails", (done) => {
      const invalidId = '02';
      chai.request(app).delete(`/api/v1/orders/${invalidId}`).end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('status');
        res.body.should.have.property('error').eql('ID parameter must be a valid integer value!');
        done();
      });
    });
  });
});
