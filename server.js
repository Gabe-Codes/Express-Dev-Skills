const express = require('express');
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');
const methodOverride = require('method-override');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

app.listen(port);
