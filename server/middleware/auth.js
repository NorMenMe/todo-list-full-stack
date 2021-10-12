import createError from "http-errors"
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    
    if (!token) {
      return next(createError(401, "No token provided"));
    }
  
    const decoded = jwt.verify(token, precess.env.SECRET)
    const user = User.findOne({_id: decoded._id})

    if (!user) {
      return next(createError(401, "Auth failed. Invalid token"));
    }
  
    req.user = user;
    next();
  } catch (error) {
      next(error)
  }
}

export default auth
