import { item } from './item.model';
import { Schema, model } from 'mongoose';

// new item
const itemSchema = new Schema<item>({
  itemName: {
    type: String,
    required: 'items need a name'
  },
  quantity: {
    type: Number,
    required: 'How many of that item'
  }
});

export const Item = model('newItem', itemSchema);
