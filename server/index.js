import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// Every route inside postRoutes begins with routes
app.use('/posts', postRoutes)

// TEMPORARILY SET HERE - MUST BE SECURED LATER
const CONNECTION_URL = 'mongodb+srv://noahs438:ukraineproject123@ukraineproject.ril3y.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Avoid any errors in the console
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));