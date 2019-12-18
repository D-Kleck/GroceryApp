import { createUser } from './../controllers/controller';
import * as express from 'express';

export const createUserRoutes = express.Router();

createUserRoutes.post('/', createUser);

