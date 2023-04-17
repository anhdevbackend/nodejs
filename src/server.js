
import configViewEngine from './configs/viewEngine';
import express from 'express';
import initWebroute from './route/web';
import connection from './configs/connectDB';
require('dotenv').config();

const app = express();   
const port = process.env.PORT;

configViewEngine(app);
initWebroute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})