import express from 'express';

const app = express();

const port = 5000;

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
