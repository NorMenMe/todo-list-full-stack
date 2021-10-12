import User from '../models/User.js'
import createError from 'http-errors'

const isAdmin = async (req, res, next) => {
    const user = req.user
    try {
        if(!user) throw new createError(404, 'user not signed in')
        if(!user.isAdmin) throw new createError(404, 'no admin rights')
        next()
    } catch (error) {
        next(error)
    }

}

export default isAdmin