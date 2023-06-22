import express from 'express'
import fetch from 'node-fetch'

const app = express();
const port = 3000;

import userKey from './key.js'

app.get('/', (req, res) => {

  res.send('hello world');

  const URL = "https://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01?" + userKey + "&pageNo=1&numOfRows=3&type=xml"

  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

})

app.listen(port, () => {

  console.log('Servers running');

})