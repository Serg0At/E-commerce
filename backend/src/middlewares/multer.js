const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.resolve(__dirname, "..", "storage", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    req.body.uploadDir = uploadDir;
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const title = Date.now();
    cb(null, `/${title}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type"), false);
    }
  },
  
  limits: { fileSize: 1024 * 1024 * 100 }, // 100MB
});

module.exports = upload;
