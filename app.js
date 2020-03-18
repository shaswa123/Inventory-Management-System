const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
//const router = express.Router();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/home');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('main.ejs', { pageTitle: 'home' });
});

app.listen(5000);
