import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  typeOfWaste: {
    type: String,
    required: true,
  },
  weightOfWaste: {
    type: Number,
    required: true,
  },
  orderAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed'],
    default: 'Pending',
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
  },
});

const Order =  mongoose.model('Order', OrderSchema);


export default Order;
