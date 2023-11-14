import express from 'express';
import  cors from 'cors';
import testRoute from './routes/test.js'

const app = express();

const port = 5000;

app.use(cors())
app.use(express.json())

app.use('/api',testRoute)

async function start() {
  try {
    app.listen(port, () => {
      console.log(`server started on port ${port}` || 3000);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
