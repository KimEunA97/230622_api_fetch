import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const URL = 'https://jsonplaceholder.typicode.com/todos/';

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {

      const title = data.map((item) => item.title);
      console.log(title)


      // 응답 보내기
      res.send('hello world');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error occurred');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});