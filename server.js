//Required dependencies 
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//import routes 
const routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function(){
    console.log('Server is listening on: http://localhost:' + PORT);
});
