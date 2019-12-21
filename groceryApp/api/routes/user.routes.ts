import { first } from 'rxjs/operators';
import {
  getUserByUsername,
  createUser, updateUser,} from './../controllers/controller';
import { UserModel } from './../models/newUser.model';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as config from '../config/database.config';
import * as userControl from '../controllers/controller';


// Router definition

export const router = express.Router();


// get all
router.get('/users/:userId', userControl.getUserById);


// Registration Route

router.post('/', (req: any, res: any, next: any) => {
const user = new UserModel({
firstName: req.body.firstName,
lastName: req.body.lastName,
username: req.body.username,
password: req.body.password,
admin: true,
lists: [],
});

createUser(user, (err: any, data: any) => {
  if (err) {
    res.json({success: false, msg: 'Unable to signup user,' + data + ' please try again later!'});
    next(err);
  } else {
    res.json({success: true, msg: 'Congratualtions! You signed up successfuly!'});
  }
});

// Signin route

// router.post('/signin', (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   getUserByUsername(username, (err, user) => {
//     if (err) { throw err; }
//     if (!user) {
//       return res.json({success: false, msg: 'Invalid username or password'});
//     }

//     compareCredential(password, user.password, (err, isMatch) => {
//       if(err) { throw err; }
//         if(isMatch) {
//         const token = jwt.sign({data: user}, config.message, {
//           expiresIn: 604800 // 1 week time
//         });
//         res.json({
//           success: true,
//           token: 'JWT '+token,
//           user: {
//             id: user._id,
//             username: user.username
//           }
//         });
//       } else {
//         return res.json({success: false, msg: 'Invalid username or password'});
//       }
//     });
//   });
// });

// Update Profile route
router.put('/update/:userId', updateUser);
});
