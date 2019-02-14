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

  static modifyOrder(req, res) {
    const orderID = parseInt(req.params.id, 10);
    const orderModified = ordersData.find(order => order.orderID === orderID);

    if (orderModified) {
      orderModified.orderItems = req.body.orderItems;
      orderModified.orderBill = req.body.orderBill;

      return res.status(200).json({
        status: 200,
        data: orderModified,
      });
    }
    return res.status(404).json({
      status: 404,
      error: `Order with id: ${orderID} does not exist!`,
    });
  }

  static getOrder(req, res) {
    const orderID = parseInt(req.params.id, 10);
    const singleOrder = ordersData.find(order => order.orderID === orderID);
    console.log(req.params.id);
    console.log(orderID);
    console.log(singleOrder);

    if (singleOrder) {
      console.log(`This is ${singleOrder}`);
      return res.status(200).json({
        status: 200,
        data: singleOrder,
      });
    }
    return res.status(404).json({
      status: 404,
      error: `Order with ID: ${orderID} does not exist!`,
    });
  }

  static cancelOrder(req, res) {
    const orderID = parseInt(req.params.id, 10);
    const deletedOrder = ordersData.find(order => order.orderID === orderID);

    if (deletedOrder) {
      ordersData.splice(deletedOrder, 1);
      return res.status(200).json({
        status: 200,
        data: deletedOrder,
      });
    }
    return res.status(404).json({
      status: 404,
      error: `Order with ID: ${orderID} does not exist!`,
    });
  }
}

export default ordersService;
