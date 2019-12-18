import { Item } from './../models/newItem.model';
import { list } from './../models/newList.model';
import { user } from './../models/newUser.model';



export const getAllUsers = (req: any, res: any) => {
  user.findById({});
};
// export const getAllLists = (req: any, res: any) => {
//   list.findById({});
// };
// export const getAllItems = (req: any, res: any) => {
//   user.findById({});
// };

export const getUser = (req: any, res: any) => {
  user.findById(req.params.username);
};

// export const getList = (req: any, res: any) => {
//   list.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true
//   });
// };

// // export const getItem = (req: any, res: any) => {
// //   Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
// //     new: true
// //   });
// // };

export const createUser = (req: any, res: any) => {
  const newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.passord,
    grocerLists: [],
  });
};

// export const createList = (req: any, res: any) => {
//   const newList = new list({
//     date: req.body.date,
//     items: [],
//   });
// };

// export const createitem = (req: any, res: any) => {
//   const newItem = new Item({
//     name: req.body.name,
//     quantity: req.body.quantity,
//   });
// };


export const updateUser = (req: any, res: any) => {
  user.findOneAndUpdate({ _id: req.params.memberId }, req.body, {
    new: true
  });
};

export const deleteUser = (req: any, res: any) => {
  user.deleteOne({ _id: req.params.memberId });
};

// export const addList = (req: any, res: any) => {
//   const newMatch = new Matches({
//     baseMemberUsername: req.body.baseMemberUsername,
//     matchMemberPassword: req.body.matchMemberUsername
//   });
// };
