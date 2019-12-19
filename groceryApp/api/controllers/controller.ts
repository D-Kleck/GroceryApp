import { apiUser } from './../models/newUser.model';
import { Item } from './../models/newItem.model';
import { list } from './../models/newList.model';
import * as bcrypt from 'bcryptjs';

// User Stuff CRUD

export const getUserById = (id: string, res: any) => {
  apiUser.findById(id, res);
};

export const getUserByUsername = (username: string, res: any) => {
  const query = {username};
  apiUser.findOne(query, res);
};

export const createUser = (user: any, callback: any) => {
  bcrypt.hash(user.password, 10, (err: any, hash: any) => {
    if (err) { throw err; }
    user.password = hash;
    user.save(callback);
  });

};

export const updateUser = (req: any, res: any, next: any) => {
  apiUser.findByIdAndUpdate(req.params.id, {
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

export const deleteUser = (id: string, res: any) => {
    apiUser.deleteOne(id, res);
  };

export const compareCredential = (candidatePassword: any, hash: any, callback: any) => {
  bcrypt.compare(candidatePassword, hash, (err: any, isMatch: any) => {
    if (err) { throw err; }
    callback(null, isMatch);
  });
};

export const getAllUsers = (req: any, res: any) => {
  apiUser.findById({});
};


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


export const createList = (req: any, res: any) => {
  const newList = new list({
    date: req.body.date,
    items: [],
  });
};

export const createitem = (req: any, res: any) => {
  const newItem = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
  });
};

