// import Sequelize from 'sequelize';
import db from '../database/models';

const Sequelize = require('sequelize');

const { Order } = db;

class ordersService {
  static placeOrder(req, res) {
    return Order.create(req.body)
      .then((order) => {
        return res.status(201).json({
          status: 201,
          data: order,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }

  static getOrdersDay(req, res) {
    const orderDate = req.params.date;
    return Order.findAll({ where: Sequelize.where(Sequelize.fn('date_trunc', 'day', Sequelize.col('createdAt')), '=', orderDate) })
      .then((order) => {
        console.log(order);
        if (order.length === 0) {
          return res.status(404).json({
            status: 404,
            error: 'No order records found for the date specified!',
          });
        }
        return res.status(200).json({
          status: 200,
          data: order,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error,
        });
      });
  }

  static modifyOrder(req, res) {
    const orderID = parseInt(req.params.id, 10);
    const { bill } = req.body;
    return Order.update({ bill }, { where: { id: orderID } })
      .then((order) => {
        if (order.length === 1) {
          return res.status(404).json({
            status: 404,
            error: 'Order with specified id does not exist!',
          });
        }
        return res.status(200).json({
          status: 200,
          data: order,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }

  static getOrders(req, res) {
    return Order.findAll()
      .then((orders) => {
        return res.status(200).json({
          status: 200,
          data: orders,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }

  static getOrder(req, res) {
    const orderID = parseInt(req.params.id, 10);
    return Order.findOne({ where: { id: orderID } })
      .then((order) => {
        return res.status(200).json({
          status: 200,
          data: order,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }

  static cancelOrder(req, res) {
    const orderID = parseInt(req.params.id, 10);
    return Order.destroy({ where: { id: orderID } })
      .then((order) => {
        if (order === 0) {
          return res.status(404).json({
            status: 404,
            error: 'Order with specified id does not exist!',
          });
        }
        return res.status(200).json({
          status: 200,
          data: order,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 500,
          error: 'Internal Server Error!',
        });
      });
  }
}

export default ordersService;
