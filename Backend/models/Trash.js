import mongoose from 'mongoose';

const TrashSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Trash =  mongoose.model('Trash', TrashSchema);

export default Trash;
