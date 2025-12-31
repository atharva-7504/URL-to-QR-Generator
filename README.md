📌 QR CODE GENERATOR USING NODE.JS
================================

📝 PROJECT DESCRIPTION
----------------------
This project is a QR Code Generator built using Node.js. It takes input
from the user and generates a QR code image for the provided text or URL.
The project uses two important Node.js packages:
🔹 inquirer
🔹 qr-image

These packages help in taking user input and generating QR codes easily.


🛠️ TECHNOLOGIES USED
--------------------
⚙️ Node.js
📥 inquirer (for user input)
🔳 qr-image (for QR code generation)
📂 fs (File System module)


❓ WHY INQUIRER IS USED
----------------------
🧠 Inquirer is a Node.js package that allows us to take input from the user
through the terminal in an interactive way.

Instead of using basic input methods, inquirer provides:
✔️ Input prompts
✔️ Validation
✔️ User-friendly questions

📌 It is mainly used for Command Line Interface (CLI) applications.


🔄 HOW INQUIRER WORKS IN THIS PROJECT
------------------------------------
1️⃣ The inquirer package is imported into the project.
2️⃣ A question prompt is created asking the user to enter a URL or text.
3️⃣ The prompt waits for the user to type the input.
4️⃣ Once the user submits the input, the value is stored in an object.
5️⃣ This value is then used to generate the QR code.

📍 Example:
User input:
➡️ https://example.com

Inquirer stores this input and passes it to the QR generator logic.


❓ WHY QR-IMAGE IS USED
----------------------
🔳 The qr-image package is used to generate QR codes in image format.
It supports formats like:
📄 PNG
📄 SVG
📄 PDF

📌 This package converts text or URLs into a scannable QR code.


⚙️ HOW QR-IMAGE WORKS IN THIS PROJECT
-------------------------------------
1️⃣ The qr-image package is imported.
2️⃣ The user input is passed to the qr-image function.
3️⃣ qr-image creates a QR code stream.
4️⃣ This stream is saved as an image file using the fs module.
5️⃣ The QR code image is stored locally and can be viewed or scanned.

📍 Example:
Input:
➡️ https://example.com

Output:
🖼️ qr_img.png (QR code image for the URL)


📂 ROLE OF FS MODULE
-------------------
🗃️ The fs (File System) module is used to:
✔️ Create files
✔️ Write data into files
✔️ Save the generated QR code image

Without the fs module, the QR code could not be saved as an image file.


🔁 PROJECT FLOW
---------------
▶️ User runs the Node.js application
▶️ Inquirer asks the user to enter a URL or text
▶️ User provides the input
▶️ qr-image generates a QR code
▶️ fs module saves the QR code as an image
▶️ QR code image is generated successfully ✅


⭐ ADVANTAGES OF THIS PROJECT
----------------------------
✔️ Simple and beginner-friendly
✔️ CLI-based Node.js application
✔️ Useful real-world utility
✔️ Demonstrates npm package usage
✔️ Explains file handling in Node.js


🏁 CONCLUSION
-------------
This project demonstrates how Node.js can be used with external packages
like inquirer and qr-image to build useful applications. It helps in
understanding user input handling, QR code generation, and file system
operations in Node.js.

=================================
✅ END OF README
=================================
