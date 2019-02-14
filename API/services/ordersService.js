import orders from '../models/orders';

const ordersData = orders;

class ordersService {
  static placeOrder(req, res) {
    const orderID = ordersData.length + 1;
    req.body.orderID = orderID;
    const newOrder = req.body;
    ordersData.push(newOrder);
    return res.status(200).json({
      status: 200,
      data: newOrder,
    });
  }

  static getOrdersDay(req, res) {
    const orderDate = req.params.date;
    const ordersDay = ordersData.filter(order => order.orderDate === orderDate);

    if (ordersDay) {
      return res.status(200).json({
        status: 200,
        data: ordersDay,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'No order records on the date specfied!',
    });
  }
}

export default ordersService;
