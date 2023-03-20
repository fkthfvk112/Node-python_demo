const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const { spawn } = require('child_process');
const python = spawn('python', ['./python/helloWorld.py', 'I am arguement!!']);

//템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

python.stdout.on('data', (data)=>{
    console.log(`stdout : ${data}`);
})


app.get('/', (req, res)=>{
  res.render('home')
})

// 서버 실행
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
