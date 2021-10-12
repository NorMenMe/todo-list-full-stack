import mongoose from "mongoose";
const { connect } = mongoose;
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.MONGO_URI

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log(`Connection to db established`))
  .catch((err) => {
    console.log(`We can not connect to the DB ->`, err);
  });

