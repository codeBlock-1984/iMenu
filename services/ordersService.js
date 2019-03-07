import { isNullOrUndefined } from 'util';
import db from '../database/models';

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
    const orderDateT = Date.parse(orderDate);
    return Order.findAll({ where: { createdAt: orderDateT } })
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

  static modifyOrder(req, res) {
    const orderID = parseInt(req.params.id, 10);
    const { bill } = req.body;
    return Order.update({ bill }, { where: { id: orderID } })
      .then((order) => {
        if (isNullOrUndefined(order)) {
          return res.status(404).json({
            status: 404,
            error: 'Order with specified date does not exist!',
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
