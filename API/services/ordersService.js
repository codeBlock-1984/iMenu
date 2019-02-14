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
}

export default ordersService;
