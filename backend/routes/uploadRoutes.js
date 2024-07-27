import express from "express";
import path from "path";
import multer from "multer";

const router = express.Router();

// first parameter of cb is error
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // error = null, destination = '...'
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    // error = null, filename = `....`
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const filtertypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  if (filtertypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Images only"), false);
  }
};

const upload = multer({ storage, fileFilter });

const uploadSingleImage = upload.single("image");

router.post("/", (req, res) => {
  uploadSingleImage(req, res, (err) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else if (req.file) {
      res.status(200).json({
        message: "Image uploaded successfully",
        image: `/${req.file.path}`,
      });
    } else {
      res.status(400).send({ message: "No image file provided!" });
    }
  });
});

export default router;
