import bodyParser from "body-parser"
import express from "express"
//

import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
dotenv.config();
const app = express();

//cors
const allowedOrigins = {
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:6969',
      'http://127.0.0.1:6969',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, 
  };
app.use(cors(allowedOrigins));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3006;
app.listen(port, () =>{
  console.log('run on : ' + port);
})