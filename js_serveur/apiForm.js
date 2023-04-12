module.exports = (app) => {
    app.post('/api/form', (req, res) => {
        console.log(req.body)
    })
}