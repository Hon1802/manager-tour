import bodyParser from "body-parser"
import express from "express"
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3006;
//cors
const allowedOrigins = {
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3001',
      'https://re-project.vercel.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, 
  };
app.use(cors(allowedOrigins));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//routes
app.use('/', routes);

app.listen(port, () =>{
  console.log('run on : ' + port);
})