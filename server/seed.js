import mongoose from "mongoose";
import './connect/db-connect.js'
import faker from "faker";
import User from './models/User.js';
import Todo from './models/Todo.js'

const seed = async () => {

    // CLEANUP 
  try {
    await User.deleteMany();
    await Todo.deleteMany()
  } catch (error) {
    console.log(err)
  }
    

    // INSERTS

    const userPromises = Array(3).fill(null).map(()=>{
        const userData= {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.name.lastName(),
            email: faker.internet.email(),
            password: '$2a$10$Wp4z130C4AFmgvTgaxhF5eI7LBfPwBNFl7sThEx9lCEVO63ej.kQ2',  //"123456789!aA"
        }
        const user = new User(userData)
        return user.save()
    })

    try {
      const usersCreated = await Promise.all(userPromises);
    } catch (error) {
      console.log(error)
    }

    try {
      const admin = await User.create({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: 'admin',
        email: faker.internet.email(),
        password: '$2a$10$Wp4z130C4AFmgvTgaxhF5eI7LBfPwBNFl7sThEx9lCEVO63ej.kQ2',
        isAdmin: true})
    } catch (error) {
      console.log(error)
    }
    
    const userArrIds = User.find().map(item => item._id)

   const todoPromises = Array(12).fill(null).map(()=>{
     const todoData = {
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      user: faker.random.arrayElement(userArrIds)
     }
     const todo = new Todo(todoData)
     return todo.save()
   })
    
   try {
    const todosCreated = await Promise.all(todoPromises);
  } catch (error) {
    console.log(error)
  }

    //  SUCCESS REPORT
    console.log(`seeded`);

    // CLOSE CONNECTION TO DATABASE AND FINISH SCRIPT
    try {
      await mongoose.connection.close();
    } catch (error) {
      console.log(error)
    }
};

seed();
