import mongoose from 'mongoose';

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  serviceLocation: {
    type: String,
    required: true,
  },
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  }],
});

module.exports = mongoose.model('Vendor', VendorSchema);
