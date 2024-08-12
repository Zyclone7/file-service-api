const express = require('express');
const { 
  uploadFiles, 
  getFile, 
  deleteFile, 
  uploadMiddleware, 
  getAllFiles, 
  updateFile // Import the updateFile function
} = require('../controllers/fileController');

const router = express.Router();

// Route to upload new files
router.post('/upload', uploadMiddleware, uploadFiles);

// Route to get a file by ID
router.get('/:id', getFile);

// Route to get all files
router.get('/', getAllFiles);

// Route to delete a file by ID
router.delete('/:id', deleteFile);

// Route to update a file by ID
router.put('/:id', uploadMiddleware, updateFile);

module.exports = router;
