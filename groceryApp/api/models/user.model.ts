import { grocerList } from './grocerList.model';

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  groceryLists: [grocerList];
}
