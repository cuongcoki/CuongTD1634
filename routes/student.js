import express from 'express'
import { body } from 'express-validator'
import { studentController } from '../controllers/index.js';

const studentRouter = express.Router();

studentRouter.get('/', studentController.getAllStudents);

studentRouter.get('/:id', studentController.getStudentById);

studentRouter.post('/',
    body("name").notEmpty().withMessage("Please input your name!!"),
    body("email").isEmail().withMessage("Please input format your email!!"),
    body("gender").isIn(['Male', 'Female']).withMessage("Gender must be 'Male' or 'Female'"),
    body("phoneNumber").isLength({ min: 5, max: 50 }).withMessage("Phone number must be between 5 and 50 characters"),
    studentController.addNewStudent
);

studentRouter.delete('/:id', studentController.deleteStudentById);

export default studentRouter;
