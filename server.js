const express = require('express');
const hbs = require('hbs');
var app = express();
const PORT = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('currentYear', () => {
  return new Date().getFullYear();
});
app.use((req, res, next) => {
  var now = new Date().toString();
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// })
app.use(express.static(__dirname + '/public')); //this is static content so accessing file directly from url viz. localhost:3000/help.html
app.get('/', (req, res) => {
  //res.send(`<h1>Namo Venkatesaya - Welcome to Express Framework!!!</h1>` );
  res.render('index.hbs', {
    pageTitle: 'Welcome to Express Handlebars',
    welcomeMessage: 'First Express Handlebar demonstration'
  })
});

app.get('/about', (req, res) => {
  // res.send({
  //   firstName: "Kishore",
  //   lastName: "Bramhamdam",
  //   address: [
  //      "2331 Edward Stec BLVD",
  //      "Edison",
  //      "NJ"
  //   ]
  // })
  res.render('about.hbs', {
    pageTitle: 'Venkatadri Samamsthanam Brahmande Nasti Kinchana, Venkatesa samo devo na bhutho na bhavishyathi'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    route: "/bad",
    error: "unable to get page"
  })
});
app.listen(PORT, ()=> {
  console.log('Server started successfully on port 3000')
});
