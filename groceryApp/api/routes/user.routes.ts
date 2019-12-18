import { currentUser } from './../models/user.model';
import { getUserById, addUser, addList } from './../controllers/user.controller';
import { User } from './../models/user';

const express = require('express');

// Router definition

export const router = express.Router();

export const jwt = require('express-jwt');

let auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

let ctrlProfile = require('../controllers/profile');
let ctrlAuth = require('../controllers/authentication');

// add user route
router.post('/add', (req, res, next) => {
  let user = new currentUser({
    id: ;
    username: string;
    password: string;
    admin: boolean;
    groceryList: Array<Object>;
  });
