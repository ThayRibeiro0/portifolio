import express from 'express';
import { engine } from 'express-handlebars';
const app = express();

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app. get('/', (req, res) => {
    res.redirect('/about');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/resume', (req, res) => {
    res.render('resume');
})

app.get('/project', (req, res) => {
    res.render('project');
})

app.listen(8080);
