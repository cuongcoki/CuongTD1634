import Student from "../models/Student.js"

const getAllStudents = async () => {
    try {
        const students = await Student.find().exec();
        return students;
    }catch (error) {
        throw new Error(error.toString());
    }
}

const getStudentById = async (id) => {
    try {
        const studentID = await Student.findById(id).exec();
        return studentID;
    }catch (error) {
        throw new Error(error.toString());
    }
}

const addNewStudent = async (studentData) => {
    try {
        const existingStudent = await Student.findOne({email: studentData.email}).exec();
        if(existingStudent) {
            throw new Error('Email already exists!!')
        }

        const newStudent = new Student(studentData);
        const savedStudent = await newStudent.save();
        return savedStudent;
    }catch(error) {
        throw new Error(error.toString());
    }
}

const deleteStudentById = async (id) => {
    try{
        const studentId = await Student.findByIdAndDelete(id);
        return studentId;
    }catch(error) {
        throw new Error(error.toString());
    }
}

export default {
    getAllStudents, getStudentById, addNewStudent, deleteStudentById
}
