import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routes/product.route.js'
import dotenv from 'dotenv'
dotenv.config();

const app = express()
app.use(express.json());
app.use('/api', productRouter);

//connecting to db
mongoose.connect(process.env.mongo_url).then(() => {
    console.log('Connected to Database')
}).catch((error) => {
    console.log(error)
});

export default app
