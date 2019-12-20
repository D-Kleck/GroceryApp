import { Schema, model } from 'mongoose';
import { User } from './user.model';
import { grocerList } from './grocerList.model';
import { item } from './item.model';

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

// New List with item schema
const listSchema = new Schema<grocerList>({
  Date: {
    type: Date,
    required: 'Need to know when the list is for'
  },
  // tslint:disable-next-line: new-parens
  items: {
    type: [itemSchema]
  } // calling the new item model in this model does that work?
});

// New User
const userSchema = new Schema<User>({
  firstName: {
    type: String,
    required: 'A first Name is required to sign-up'
  },
  lastName: {
    type: String,
    required: 'A last Name is required to sign-up'
  },
  username: {
    type: String,
    required: 'A username is required to sign-up'
  },
  password: {
    type: String,
    required: 'A password is required to sign-up'
  },
  admin: {
    type: Boolean,
    required: 'is an admin or not'
  },
  groceryLists: {
    type: [listSchema],
  }
});

export const apiUser = model('User', userSchema);
export const apiList = model('List', listSchema);
export const apiItem = model('Item', itemSchema);
