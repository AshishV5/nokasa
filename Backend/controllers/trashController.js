import Trash from '../models/Trash.js';

export const getAllTrashTypes = async (req, res) => {
  try {
    const trashTypes = await Trash.find();
    res.json(trashTypes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const createTrashType = async (req, res) => {
  const { type, description } = req.body;

  try {
    const newTrashType = new Trash({
      type,
      description,
    });

    const trashType = await newTrashType.save();
    res.json(trashType);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
