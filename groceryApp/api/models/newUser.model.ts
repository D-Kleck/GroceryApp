import { list } from './newList.model';
import { Schema, model } from 'mongoose';
import { User } from './user.model';

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
  groceryLists: [list]
});

export const user = model('User', userSchema);
