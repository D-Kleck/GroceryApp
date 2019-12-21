import { UserModel } from './../models/newUser.model';
import {Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';

// User Stuff CRUD

export const getAllUsers = (req: Request, res: Response) => {
  UserModel.findById({});
};
// export const getAllLists = (req: Request, res: Response) => {
//   apiList.findById({});
// };
// export const getAllItems = (req: Request, res: Response) => {
//   apiItem.findById({});
// };

export const getUserById = (req: Request, res: Response) => {
  UserModel.findById(req.params.userId, (
    err: any,
    data: any
  ) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

export const getUserByUsername = (req: Request, res: Response) => {
  UserModel.findOne(req.params.username, (
    err: any,
    data: any
  ) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

export const createUser = (user: any, callback: any) => {
  bcrypt.hash(user.password, 10, (err: any, hash: any) => {
    if (err) { throw err; }
    user.password = hash;
    user.save(callback);
  });
};

export const updateUser = (req: any, res: any, next: any) => {
  UserModel.findByIdAndUpdate(req.params.id, {
       $set: req.body
     }, (error: any, data: any) => {
       if (error) {
         console.log(error + 'for data' + data);
         return next(error);
       } else {
        res.status(200).json({success: true, msg: 'User has been updated!'});
       }
    });
  };

// export const updateList = (req: any, res: any, next: any) => {
//   apiList.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//       }, (error: any, data: any) => {
//         if (error) {
//           console.log(error + 'for data' + data);
//           return next(error);
//         } else {
//         res.status(200).json({success: true, msg: 'List has been updated!'});
//         }
//     });
//   };

// export const updateItem = (req: any, res: any, next: any) => {
//   UserModel.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//       }, (error: any, data: any) => {
//         if (error) {
//           console.log(error + 'for data' + data);
//           return next(error);
//         } else {
//         res.status(200).json({success: true, msg: 'User has been updated!'});
//         }
//     });
//   };

//   // Delete User, List or Item

// export const deleteUser = (id: string, res: any) => {
//     UserModel.deleteOne(id, res);
//   };
// export const deleteList = (id: string, res: any) => {
//     apiList.deleteOne(id, res);
//   };
// export const deleteItem = (id: string, res: any) => {
//     apiItem.deleteOne(id, res);
//   };

// export const compareCredential = (candidatePassword: any, hash: any, callback: any) => {
//   bcrypt.compare(candidatePassword, hash, (err: any, isMatch: any) => {
//     if (err) { throw err; }
//     callback(null, isMatch);
//   });
// };


// export const getAllLists = (req: any, res: any) => {
//   list.findById({});
// };
// export const getAllItems = (req: any, res: any) => {
//   user.findById({});
// };



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


// export const createList = (id: string, date: Date, res: any) => {
//   UserModel.findById(id, res);
//   bcrypt.hash(user.password, 10, (err: any, hash: any) => {
//     if (err) { throw err; }
//     user.password = hash;
//     user.save(callback);
//   });

// };

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

