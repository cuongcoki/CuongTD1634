import {  validationResult } from "express-validator";
import { studentRepository } from "../repository/index.js";

const getAllStudents = async (req, res) => {
    try {
        const students = await studentRepository.getAllStudents();
        res.status(200).json({
            message: 'Get students successfully',
            data: students
        });
    }catch(error) {
        res.status(500).json({
            message: error.toString()
        });
    }
}

const getStudentById = async (req, res) => {
    try {
        const studentId = await studentRepository.getStudentById(req.params.id);
        
        if(!studentId) {
            return res.status(404).json({
                message: 'Id not found.',
            });
        }
        res.status(200).json({
            message: 'Get detail student successfully.',
            data: studentId
        });
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        });
    }
}

const addNewStudent = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try{
        const studentData = req.body;
        const newStudent = await studentRepository.addNewStudent(studentData);
        res.status(201).json({
            message: 'Insert student successfully.',
            data: newStudent
        })
    }catch(error) {
        res.status(500).json({message: error.toString()})
    }
}

const deleteStudentById = async (req, res) => {
    try {
        const studentId = await studentRepository.deleteStudentById(req.params.id);
        
        if(!studentId) {
            return res.status(404).json({
                message: 'Id not found.',
            });
        }
        res.status(200).json({
            message: 'Delete student successfully.',
            data: studentId
        });
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        });
    }
}

export default {
    getAllStudents, getStudentById, addNewStudent, deleteStudentById
}
