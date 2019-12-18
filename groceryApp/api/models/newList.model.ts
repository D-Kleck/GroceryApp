import { Item } from './newItem.model';
import { Schema, model } from 'mongoose';
import { grocerList } from './grocerList.model';

// New list
const listSchema = new Schema<grocerList>({
  Date: {
    type: Date,
    required: 'Need to know when the list is for'
  },
  items: [Item], // calling the new item model in this model does that work?
});

export const list = model('newList', listSchema);
