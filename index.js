const express = require('express');
const app = express();
const routes = require('./routes');
const Booru = require('booru')

// Pour activer la doc Swagger

//const swaggerJSDoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swaggerdoc.json');
//const options = { customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.14.0/swagger-ui.min.css'};

app.use(express.static('public'))
app.use('/api', routes.router);
app.use('/public', express.static('public'));
app.get('/yuri', (req, res) => {
  let posts = await Booru.search('dan', ['yuri'], { limit: 350, random: false })
  d = posts
  resu = []
  d.forEach(ggwp =>{
  ld = { url: `${ggwp.file_url}` }
  resu.push(ld)
  })
  random =  resu[Math.floor(Math.random() * resu.length)]
  res.json({url: "https://external-content.duckduckgo.com/iu/?u=" + random.url})
})

/*
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerDocument, options));
 */

app.listen(process.env.PORT || 3000);

module.exports = app;
