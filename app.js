const express = require('express')
const fileUpload = require('express-fileupload')
const multer = require('./js_serveur/multer-config')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const functionPostUpload = require('./functionPostUpload')



const PORT = 3000

const app = express()

app.use('/css', express.static('css'))
app.use('/js_client', express.static('js_client'))
app.use(fileUpload())
app.use('/images', express.static(path.join(__dirname, 'upload')));
app.use('/images', express.static(path.join(__dirname, 'assets/img_articles')));
app.use(bodyParser.json())
app.use(cors())

app.set('views', './views')
app.set('view engine', 'ejs')

let data_test
let value_img_transfert

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/createarticles', (req, res) => {
    res.render('editorArticles')
})

app.post('/upload', (req, res) => {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    functionPostUpload(image, req, res)
    value_img_transfert = value_img_upload
});

require('./js_serveur/apiForm')(app)

app.listen(PORT, function(){
    console.log('je suis lancee sur le port 3000')
})