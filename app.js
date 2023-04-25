const express = require('express')
const fileUpload = require('express-fileupload')
const multer = require('./public/js_serveur/multer-config')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const functionPostUpload = require('./functionPostUpload')
const treatementPos  = require('./public/js_serveur/api-fetch-test.js')


const PORT = 3000

const app = express()

app.use(express.static('public'))
app.use('/upload', express.static(__dirname + '/upload'))
app.use(fileUpload())
app.use(express.json({limit: '50mb'}));
app.use(cors())

app.set('views', './views')
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/createarticles', (req, res) => {
    res.render('editorArticles')
})

app.post('/upload', (req, res) => {
    const { image } = req.files;

    functionPostUpload(image, req, res)
    .then(data => {
        res.json(data)
    })
});

app.post('/uploadfetch', (req, res) => {
    treatementPos( req.files, req.body )
    .then( data => {
        res.json(data)
    })
    
})

require('./public/js_serveur/apiForm')(app)

app.listen(PORT, function(){
    console.log('je suis lancee sur le port 3000')
})