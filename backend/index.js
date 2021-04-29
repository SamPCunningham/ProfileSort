import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/profileRoutes';


const app = express();
const PORT = 4000;

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/profileDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

routes(app);

app.get('/', (req, res) =>
    res.send(`Running on ${PORT}`)
);

app.listen(PORT, () => 
console.log(`Running on port ${PORT}`));