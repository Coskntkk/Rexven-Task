// Import modules
const router = require("express").Router();
const fs = require("fs");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const xlsx = require("node-xlsx");

const Student = require("../models/Student");

// .../students
router
    .route("/")
    // Upload excel or csv file to students
    .post(upload.single("file"), async (req, res) => {
        // Read file
        const file = req.file;
        let uploadList = [];

        // Check file name
        if (file.originalname.split(".")[1] === "csv") {
            // Csv file
            // Save file to uploads folder
            const filePath = `./uploads/${file.originalname}`;
            fs.writeFileSync(filePath, file.buffer);

            // Read file and parse
            const rawData = fs.readFileSync(filePath, "utf8").trim();
            const listData = rawData.split("\n");
            listData.shift();

            // Create list students
            listData.map(async (item) => {
                const student = item.split(",");

                const newStudent = {
                    id: parseInt(student[0]),
                    team: student[1],
                    country: student[2],
                    firstName: student[3],
                    lastName: student[4],
                    dateOfBirth: student[5],
                    hometown: student[6],
                    province: student[7],
                    isVerified:
                        student[8].toLowerCase() === "true" ||
                        student[8].toLowerCase() === "yes" ||
                        student[8].toLowerCase() === "evet"
                            ? true
                            : false,
                    age: parseInt(student[9]),
                };

                uploadList.push(newStudent);
            });

            // Delete file
            fs.unlinkSync(filePath);
        } else if (file.originalname.split(".")[1] === "xlsx") {
            // Xlsx file
            // Save file to uploads folder
            const filePath = `./uploads/${file.originalname}`;
            fs.writeFileSync(filePath, file.buffer);

            // Read file and parse
            const workSheetsFromFile = xlsx.parse(filePath);
            const data = workSheetsFromFile[0].data;
            data.shift();

            // Create new students
            data.map((student) => {
                const newStudent = {
                    id: parseInt(student[0]),
                    team: student[1],
                    country: student[2],
                    firstName: student[3],
                    lastName: student[4],
                    dateOfBirth: student[5],
                    hometown: student[6],
                    province: student[7],
                    isVerified:
                        student[8].toLowerCase() === "evet" ||
                        student[8].toLowerCase() === "yes" ||
                        student[8].toLowerCase() === "true"
                            ? true
                            : false,
                    age: parseInt(student[9]),
                };

                uploadList.push(newStudent);
            });

            // Delete file
            fs.unlinkSync(filePath);
        } else {
            // Return error
            return res.status(400).json({
                status: "error",
                message: "File type not supported!",
            });
        }

        // Save students to database
        try {
            await Student.insertMany(uploadList);
            res.json({
                status: "success",
                message: "Students imported successfully!",
            });
        } catch (err) {
            res.json({ status: "error", message: err.message });
        }
    });

// Export router
module.exports = router;
