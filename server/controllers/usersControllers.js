import User from "../models/User.js";
import createError from "http-errors";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


export const getAllUsers = async (req, res, next) => {
  try {
    const readAllUsers = await User.find();

    res.json(readAllUsers);
  } catch (error) {
    next(error);
  }
};


export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const readOneUser = await User.findById(id);
    if (!readOneUser)
      throw new createError(404, `No user with id ${id} was found.`);

    res.json({ message: "user found" });
  } catch (error) {
    next(error);
  }
};

//   register

export const register = async (req, res, next) => {
  const body = req.body

  try {
    const user = new User(body)
    if(!user) throw new createError(400, 'user not created')
    user.password = bcrypt.hashSync(user.password, 10)
    await user.save()
    // user.password = undefined

    const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: '3d'})

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 432000000),
      sameSite: 'none',
      secure: 'true'
    }

    res.cookie('userToken', token, cookieOptions ).send(user)


  } catch (error) {
    next(error)
  }

}

// login

export const login = async (req, res, next) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({username})
    if(!user) throw new createError(404,'Usernot found')
    const isPwValid = bcrypt.compareSync(password, user.password)
    if(!isPwValid) throw new createError(404,'Wrong password')

    // user.password = undefined

    const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: '3d'})

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 432000000),
      sameSite: 'none',
      secure: 'true'
    }

    res.cookie('userToken', token, cookieOptions ).send(user)

  } catch (error) {
    next(error)
  }
}

export const logout = async (req, res, next) => {
  res.clearCookie('userToken').send()
}

// Auth route for frontend context 
export const authUser = async (req, res) => {
  let user = req.user;
  user.password = undefined;
  res.send(user);
}


// users/:id/posts
export const getUserTodos = async (req, res, next) => {
  const {id} = re.params
  try {
    const userTodos = Todos.find({user: id}).populate({user})
    if(!userTodos) throw new createError(404, `No todos of user with id ${id} was found.`)
    res.json(userTodos) 
  } catch (error) {
    next(error)
  }
}