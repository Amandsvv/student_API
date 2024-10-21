// index.js
const axios = require("axios");

const baseUrl = "http://192.160.117.121:3000/students"; // URL of the Student API
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');

// Function to get all students
const getAllStudents = async () => {
  try {
    const response = await axios.get(baseUrl);
    console.log("All Students:", response.data);
  } catch (error) {
    console.error(
      "Error fetching students:",
      error.response?.data || error.message
    );
  }
};

// Function to get a student by ID
const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    console.log(`Student with ID ${id}:`, response.data);
  } catch (error) {
    console.error(
      `Error fetching student with ID ${id}:`,
      error.response?.data || error.message
    );
  }
};

// Function to add a new student
const addStudent = async (studentData) => {
  try {
    const response = await axios.post(baseUrl, studentData);
    console.log("New Student Added:", response.data);
  } catch (error) {
    console.error(
      "Error adding student:",
      error.response?.data || error.message
    );
  }
};

// Function to update a student
const updateStudent = async (id, studentData) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, studentData);
    console.log(`Student with ID ${id} updated:`, response.data);
  } catch (error) {
    console.error(
      `Error updating student with ID ${id}:`,
      error.response?.data || error.message
    );
  }
};

// Function to delete a student
const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    console.log(`Student with ID ${id} deleted:`, response.data);
  } catch (error) {
    console.error(
      `Error deleting student with ID ${id}:`,
      error.response?.data || error.message
    );
  }
};

// Testing the API consumer functions
(async () => {
  // Fetch all students
    await getAllStudents();
  // Fetch student by ID
  // await getStudentById(2);
  // Add a new student
    // const newStudent = {
    //   name: "Ravi Kumar",
    //   contact: "+919876543210",
    //   email: "ravi.kumar@gmail.com",
    //   age: 24,
    //   program: "M.Tech",
    //   semester: "I",
    // };
    // await addStudent(newStudent);
  // Update a student
  //   const updatedStudent = {
  //     name: "Aman Sharma",
  //     contact: "+919324793486",
  //     email: "aman.sharma@gmail.com",
  //     age: 21,
  //     program: "BCA",
  //     semester: "II",
  //   };
  //   await updateStudent(1, updatedStudent);
  // Delete a student
  //await deleteStudent(2);
})();

