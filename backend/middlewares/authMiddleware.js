const jwt = require ("jsonwebtoken");
const User = require ("../models/userModel.js");
const asyncHandler = require ("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {//protect api from unauthorized access
  let token;

  if (
      req.headers.authorization &&//check authorization headers
      
    req.headers.authorization.startsWith("Bearer")//check for token named barer 
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];//taking the token out

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);//verify token ID

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
