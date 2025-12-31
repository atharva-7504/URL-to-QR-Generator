import express from "express";
import qr from "qr-image";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Show form
app.get("/qr-generator", (req, res) => {
  res.render("input", { qrImage: null });
});

// Generate QR
app.post("/qr-generator", (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.send("Please enter a valid URL");
  }

  const qr_png = qr.image(url, { type: "png" });
  const filePath = path.join("public", "qr.png");

  qr_png.pipe(fs.createWriteStream(filePath));

  res.render("input", { qrImage: "/qr.png" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/qr-generator`);
});
