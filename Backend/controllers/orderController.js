import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { typeOfWaste, weightOfWaste, orderAmount, vendorId } = req.body;

  try {
    const newOrder = new Order({
      user: req.user.id,
      typeOfWaste,
      weightOfWaste,
      orderAmount,
      vendor: vendorId,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('vendor', ['name', 'serviceLocation']);
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    let order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    order.status = status;
    await order.save();

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
