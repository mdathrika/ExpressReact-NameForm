var express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('main',{});
});

app.listen(8080, () => {
    console.log('Server Started');
});
