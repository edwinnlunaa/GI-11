// Import necessary modules
import express from 'express';
import fs from 'fs';

// Initialize the Express application
const app = express();
const PORT = 3000;
const employeesFile = 'employees.json';

// Endpoint to get all employees
app.get('/employees', (request, response) => {
    // Read the employees.json file
    fs.readFile(employeesFile, 'utf8', (error, data) => {
        if (error) {
            // Handle file read error
            response.status(500).send('Internal Server Error');
            return;
        }

        // Parse the file content into a JSON array
        const employees = JSON.parse(data);

        // Send the JSON array as the response
        response.json(employees);
    });
});

// Endpoint to get a specific employee by employeeID
app.get('/employees/:employeeID', (request, response) => {
    // pull the employeeID from the request parameters
    const employeeID = parseInt(request.params.employeeID);

    // Read the employees.json file
    fs.readFile(employeesFile, 'utf8', (error, data) => {
        if (error) {
            // Handle file read error
            response.status(500).send('Internal Server Error');
            return;
        }

        // Parse the file content into a JSON array
        const employees = JSON.parse(data);

        // Find the employee with the matching employeeID
        const employee = employees.find(emp => emp.employeeID === employeeID);

        if (employee) {
            // Send the employee data as the response
            response.json(employee);
        } else {
            // Send a 404 Not Found response if employee is not found
            response.status(404).send('Employee not found');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    // Log a message to the console indicating the server is running
    console.log(`Server is running on http://localhost:${PORT}`);
});