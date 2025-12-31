QR CODE GENERATOR USING NODE.JS

Project Description
This project is a simple QR Code Generator developed using Node.js. It takes input from the user and generates a QR code image for the provided text or URL.

Technologies Used
Node.js
inquirer
qr-image
fs module

Use of Inquirer
Inquirer is used to take input from the user through the command line. It provides an interactive and easy way to ask questions and receive user input in a Node.js application.

Use of qr-image
The qr-image package is used to convert the user input into a QR code. It generates a QR code image in PNG format that can be scanned using any QR scanner.

Working of the Project
First, the user enters a text or URL using inquirer. Then, the qr-image package generates a QR code for the input. Finally, the fs module saves the generated QR code as an image file.

Conclusion
This project helps in understanding how to use external npm packages in Node.js for building command-line applications and performing file operations.
