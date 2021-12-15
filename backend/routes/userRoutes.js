const express = require('express');
const { registerUser,authUser, updateUserProfile } = require('../controllers/userControllers');
const router = express.Router()
const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(registerUser);// route() is an api end point
router.route("/login").post(authUser);// route() is an api end point
router.route("/profile").post(protect, updateUserProfile);// route() is an api end point



module.exports = router;