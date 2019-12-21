import { grocerList } from './grocerList.model';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  admin: boolean;
  groceryLists: grocerList[];
}
