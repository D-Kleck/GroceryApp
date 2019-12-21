import { item } from './item.model';

// tslint:disable-next-line: class-name
export interface grocerList {
  // tslint:disable-next-line: ban-types
  id: Number;
  date: Date;
  items: item[];
}
