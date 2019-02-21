/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe("Menus", () => {
  describe("GET /menus", () => {
    it("should get all menus", (done) => {
      chai.request(app).get('/api/v1/menus').end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.be.an('array');
        done();
      });
    });
  });
  describe("GET /menus/:date", () => {
    it("should get a single menu if date is found", (done) => {
      const date = '2019-02-14';

      chai.request(app).get(`/api/v1/menus/${date}`).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('menuID');
        res.body.data.should.have.property('menuDate');
        res.body.data.should.have.property('menuOptions');
        res.body.data.menuOptions.should.be.an('array');
        done();
      });
    });
    it("should not get a single menu if date is not found", (done) => {
      const date = '2019-02-28';
      chai.request(app).get(`/api/v1/menus/${date}`).end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('Menu with specified date does not exist!');
        done();
      });
    });
  });

  describe("POST /menus", () => {
    it("should post a menu with all required fields", (done) => {
      const newDate = new Date();
      const thisDay = newDate.toISOString().slice(0, 10);
      const menu = {
        menuID: 2,
        menuDate: thisDay,
        menuOptions: [
          {
            mealName: 'CoconutRice',
            mealPrice: 780,
          },
          {
            mealName: 'OkraStew',
            mealPrice: 1670,
          },
          {
            mealName: 'YamFishSauce',
            mealPrice: 1600,
          },
        ],
      };
      chai.request(app).post('/api/v1/menus').set('Accept', 'application/x-www-form-urlencoded').send(menu)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.be.an('array');
          done();
        });
    });
  });
});
