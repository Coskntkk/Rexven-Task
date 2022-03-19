const Student = require("../models/Student");

// Get all students (pagination)
exports.getAllStudents = async (req, res) => {
    try {
        // Get all students
        const students = await Student.find();

        // Pagination
        const page = parseInt(req.query.page);
        const limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const currentStudents = students.slice(startIndex, endIndex);

        // Return response
        return res.status(200).json({
            status: "success",
            students: currentStudents,
            totalPages: Math.ceil(students.length / limit),
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}

// Create a new student
exports.createStudent = async (req, res) => {
    try {
        // Create new student
        const newStudent = new Student(req.body);

        // Save student
        await newStudent.save();

        // Return response
        return res.status(201).json({
            status: "success",
            message: "Student created successfully!",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}

// Get student by first or last name
exports.getStudentById = async (req, res) => {
    try {
        // Get student by id
        const student = await Student.findById(req.params.id);

        // Return response
        return res.status(200).json({
            status: "success",
            student: student,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}

// Update student
exports.updateStudentById = async (req, res) => {
    try {
        // Update student
        await Student.findByIdAndUpdate(req.params.id, req.body);

        // Return response
        return res.status(200).json({
            status: "success",
            message: "Student updated successfully!",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

// Delete student
exports.deleteStudentById = async (req, res) => {
    try {
        // Delete student
        await Student.findByIdAndDelete(req.params.id);

        // Return response
        return res.status(200).json({
            status: "success",
            message: "Student deleted successfully!",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}

// Get student by first or last name
exports.getStudentByName = async (req, res) => {
    try {
        // Get student by first or last name
        const student = await Student.find({
            $or: [
                { firstName: { $regex: req.params.name, $options: "i" } },
                { lastName: { $regex: req.params.name, $options: "i" } },
            ],
        });

        // Return response
        return res.status(200).json({
            status: "success",
            student: student,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};